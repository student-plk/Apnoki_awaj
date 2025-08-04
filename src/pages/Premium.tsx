import React from 'react';
import { Lock, Star, Zap, Heart, Crown, Bell, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Premium = () => {
  const premiumFeatures = [
    {
      icon: Heart,
      title: 'Advanced Voice Memory',
      description: 'Deeper emotional understanding and longer conversation history',
      locked: true,
    },
    {
      icon: Zap,
      title: 'Personalized AI Replies',
      description: 'Responses tailored to your unique relationship dynamics',
      locked: true,
    },
    {
      icon: Star,
      title: 'Multiple Voice Profiles',
      description: 'Create unlimited voice clones for all your loved ones',
      locked: true,
    },
    {
      icon: Crown,
      title: 'Priority Support',
      description: '24/7 premium support for your emotional wellbeing',
      locked: true,
    },
    {
      icon: Sparkles,
      title: 'Deep Healing Conversations',
      description: 'Advanced therapy-inspired dialogue patterns',
      locked: true,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-deep-purple/10 via-cream to-lime/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime to-deep-purple text-white px-6 py-3 rounded-full mb-6 animate-fade-up">
            <Crown size={20} />
            <span className="font-semibold">Premium Experience</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-deep-purple mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Unlock Deeper Emotional Connection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Experience the full power of AI-driven emotional healing with advanced features designed for deeper connections.
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-lime to-deep-purple"></div>
          </div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-lime to-deep-purple rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Heart className="text-white" size={36} />
            </div>
            <h2 className="text-3xl font-bold text-deep-purple mb-4">
              Something Beautiful is Coming
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Advanced voice memory, personalized AI replies, and deep healing conversations — crafted with love and launching soon.
            </p>
            
            {/* Notify Button */}
            <div className="space-y-4">
              <button 
                onClick={() => {
                  alert('Thank you for your interest! We\'ll notify you as soon as Premium features are available. Your emotional wellbeing is our priority.');
                }}
                className="px-8 py-4 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <Bell size={20} />
                <span>Get Notified When Premium Launches</span>
              </button>
              <p className="text-sm text-gray-500">
                Be the first to experience premium emotional AI
              </p>
            </div>
          </div>
        </div>

        {/* Premium Features Preview */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-deep-purple text-center mb-12">
            What's Coming in Premium
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {premiumFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Locked Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 to-lime/20 rounded-2xl backdrop-blur-sm z-10 flex items-center justify-center opacity-80 group-hover:opacity-90 transition-opacity">
                  <div className="text-center">
                    <Lock className="text-deep-purple mx-auto mb-2" size={24} />
                    <span className="text-deep-purple font-semibold text-sm">Coming Soon</span>
                  </div>
                </div>
                
                {/* Feature Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime to-deep-purple rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-deep-purple mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-lime/10 to-deep-purple/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-deep-purple mb-4">
              Your emotional wellbeing matters
            </h3>
            <p className="text-gray-600 mb-6">
              While you wait for Premium, continue using our free features to stay connected with your loved ones. Every conversation is a step toward healing.
            </p>
            <Link 
              to="/voice-talk"
              className="inline-block px-8 py-3 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Continue with Free Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;