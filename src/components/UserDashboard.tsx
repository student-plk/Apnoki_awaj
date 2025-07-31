import React from 'react';
import { Heart, MessageCircle, Phone, Users, LogOut, Calendar, Activity } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { updateUsageStats } from '../services/userService';

const UserDashboard: React.FC = () => {
  const { user, userProfile } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleFeatureAction = async (feature: string) => {
    if (!user) return;
    
    try {
      switch (feature) {
        case 'voiceClone':
          await updateUsageStats(user.uid, 'voiceClonesCreated');
          break;
        case 'conversation':
          await updateUsageStats(user.uid, 'conversationsStarted');
          break;
        case 'session':
          await updateUsageStats(user.uid, 'totalSessions');
          break;
      }
      // You can add navigation or modal opening here
      alert(`${feature} action completed! Usage stats updated.`);
    } catch (error) {
      console.error('Error updating usage stats:', error);
    }
  };

  const premiumFeatures = [
    {
      icon: Phone,
      title: 'Voice Cloning',
      description: 'Create AI voice replicas of your loved ones',
      status: 'Active'
    },
    {
      icon: MessageCircle,
      title: '24/7 Emotional Support',
      description: 'Always-available AI conversations',
      status: 'Active'
    },
    {
      icon: Heart,
      title: 'Healing Conversations',
      description: 'Therapeutic AI responses for emotional healing',
      status: 'Active'
    },
    {
      icon: Users,
      title: 'Mirror Self-Talk',
      description: 'Reflect and grow with your AI self',
      status: 'Active'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-cream via-white to-lime/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-deep-purple mb-4">
            Welcome to Apno ki Awaj
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your premium features are now unlocked, {user?.email}
          </p>
          
          {/* User Stats */}
          {userProfile && (
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h3 className="text-lg font-semibold text-deep-purple mb-4">Your Usage Statistics</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-lime">{userProfile.usageStats.totalSessions}</div>
                  <div className="text-sm text-gray-600">Total Sessions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-lime">{userProfile.usageStats.voiceClonesCreated}</div>
                  <div className="text-sm text-gray-600">Voice Clones</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-lime">{userProfile.usageStats.conversationsStarted}</div>
                  <div className="text-sm text-gray-600">Conversations</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Member since: {userProfile.createdAt.toDate().toLocaleDateString()}
              </div>
            </div>
          )}
          
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Premium Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {premiumFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lime to-deep-purple rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-deep-purple mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {feature.description}
              </p>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                {feature.status}
              </span>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-deep-purple mb-6 text-center">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button 
              onClick={() => handleFeatureAction('voiceClone')}
              className="p-6 bg-gradient-to-r from-lime to-deep-purple text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Start Voice Clone</h3>
              <p className="text-sm opacity-90">Create your first voice replica</p>
            </button>
            <button 
              onClick={() => handleFeatureAction('conversation')}
              className="p-6 bg-gradient-to-r from-lime to-deep-purple text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Begin Chat</h3>
              <p className="text-sm opacity-90">Start an emotional conversation</p>
            </button>
            <button 
              onClick={() => handleFeatureAction('session')}
              className="p-6 bg-gradient-to-r from-lime to-deep-purple text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Heart className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Healing Session</h3>
              <p className="text-sm opacity-90">Start your healing journey</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 