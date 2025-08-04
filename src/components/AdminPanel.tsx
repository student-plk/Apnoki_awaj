import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { UserProfile } from '../services/userService';
import { Users, Calendar, Activity, Eye } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = usersSnapshot.docs.map(doc => doc.data() as UserProfile);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-lime border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-cream via-white to-lime/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-deep-purple mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            View all users and their usage statistics
          </p>
          
          {/* Summary Stats */}
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h3 className="text-lg font-semibold text-deep-purple mb-4">Platform Statistics</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-lime">{users.length}</div>
                <div className="text-sm text-gray-600">Total Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime">
                  {users.reduce((sum, user) => sum + user.usageStats.totalSessions, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Sessions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime">
                  {users.reduce((sum, user) => sum + user.usageStats.voiceClonesCreated, 0)}
                </div>
                <div className="text-sm text-gray-600">Voice Clones</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime">
                  {users.reduce((sum, user) => sum + user.usageStats.conversationsStarted, 0)}
                </div>
                <div className="text-sm text-gray-600">Conversations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-deep-purple">All Users</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Member Since
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sessions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Voice Clones
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversations
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={user.uid} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-lime to-deep-purple rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {user.email.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.email}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.displayName || 'No display name'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.createdAt && typeof user.createdAt.toDate === 'function' 
                        ? user.createdAt.toDate().toLocaleDateString() 
                        : 'Unknown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.usageStats.totalSessions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.usageStats.voiceClonesCreated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.usageStats.conversationsStarted}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.lastLoginAt && typeof user.lastLoginAt.toDate === 'function' 
                        ? user.lastLoginAt.toDate().toLocaleDateString() 
                        : 'Unknown'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 