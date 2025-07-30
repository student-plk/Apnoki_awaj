import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 text-center animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="text-green-500" size={32} />
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Premium Features Unlocked!
        </h2>
        
        <p className="text-gray-600 mb-6">
          Welcome to Apno की Awaj! You can now access all premium features including voice cloning, 24/7 support, and mirror self-talk. Your first login gives you full access to explore and connect with your loved ones.
        </p>
        
        <button
          onClick={onClose}
          className="w-full py-3 bg-gradient-to-r from-lime to-deep-purple text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
        >
          Start Connecting
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;