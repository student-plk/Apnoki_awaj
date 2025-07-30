import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { User } from 'firebase/auth';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  createdAt: Timestamp;
  lastLoginAt: Timestamp;
  premiumFeatures: {
    voiceCloning: boolean;
    emotionalSupport: boolean;
    healingConversations: boolean;
    mirrorSelfTalk: boolean;
  };
  usageStats: {
    totalSessions: number;
    voiceClonesCreated: number;
    conversationsStarted: number;
  };
}

export const createUserProfile = async (user: User): Promise<void> => {
  try {
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      createdAt: serverTimestamp() as Timestamp,
      lastLoginAt: serverTimestamp() as Timestamp,
      premiumFeatures: {
        voiceCloning: true,
        emotionalSupport: true,
        healingConversations: true,
        mirrorSelfTalk: true,
      },
      usageStats: {
        totalSessions: 0,
        voiceClonesCreated: 0,
        conversationsStarted: 0,
      },
    };

    await setDoc(doc(db, 'users', user.uid), userProfile);
    console.log('User profile created successfully');
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

export const updateUserLastLogin = async (uid: string): Promise<void> => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      lastLoginAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating last login:', error);
    throw error;
  }
};

export const updateUsageStats = async (
  uid: string, 
  field: keyof UserProfile['usageStats'], 
  increment: number = 1
): Promise<void> => {
  try {
    const userRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      const currentStats = userDoc.data().usageStats;
      await updateDoc(userRef, {
        [`usageStats.${field}`]: currentStats[field] + increment,
      });
    }
  } catch (error) {
    console.error('Error updating usage stats:', error);
    throw error;
  }
};

export const checkUserExists = async (uid: string): Promise<boolean> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    return userDoc.exists();
  } catch (error) {
    console.error('Error checking if user exists:', error);
    return false;
  }
}; 