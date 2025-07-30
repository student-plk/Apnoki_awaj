import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Phone, Users } from 'lucide-react';
import LoginModal from '../components/LoginModal';
import SuccessModal from '../components/SuccessModal';
import UserDashboard from '../components/UserDashboard';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLoginSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  // If user is logged in, show dashboard
  if (user) {
    return <UserDashboard />;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background with gradient and shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime/20 via-cream to-deep-purple/20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold text-deep-purple mb-6 leading-tight">
                Apno की Awaj
              </h1>
              <p className="text-xl text-gray-700 mb-4 font-medium">
                "Because love deserves a voice that stays"
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stay emotionally connected with your loved ones, even when they're far — or gone.
              </p>
              <button
                onClick={() => user ? setIsSuccessModalOpen(true) : setIsLoginModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {user ? 'Access Premium Features' : 'Stay Connected'}
              </button>
            </div>

            {/* Right: Animation */}
            <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                {/* Mirror Animation */}
                <div className="w-80 h-80 bg-gradient-to-br from-lime/30 to-deep-purple/30 rounded-3xl flex items-center justify-center animate-mirror-flip shadow-2xl">
                  <div className="w-64 h-64 bg-white/90 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime/10 to-deep-purple/10"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-lime to-deep-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Heart className="text-white" size={32} />
                      </div>
                      <p className="text-deep-purple font-semibold">Always With You</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-lime rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-deep-purple rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-deep-purple mb-6">
                Apno की Awaj: Because love deserves a voice that stays.
              </h2>
              <div className="bg-cream p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Apno की Awaj is your emotional AI companion designed to fight loneliness, stress, grief, and anxiety. 
                  By cloning voices of loved ones using past chats and audio notes, our AI gives you a chance to talk, 
                  listen, and heal — anytime, anywhere.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Whether you're away from family, missing someone who's passed, or just feeling low — you'll always 
                  have someone to talk to.
                </p>
              </div>
            </div>

            {/* Right: Voice Wave Animation */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex items-end space-x-2 h-32">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-lime to-deep-purple rounded-full animate-voice-wave"
                      style={{
                        width: '8px',
                        height: `${Math.random() * 80 + 20}px`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime to-deep-purple text-white px-6 py-3 rounded-full">
                    <MessageCircle size={20} />
                    <span className="font-semibold">Healing Conversations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Preview */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-purple mb-4">
              Emotional Connection, Reimagined
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the comfort of familiar voices and supportive conversations whenever you need them most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Voice Cloning',
                description: 'Recreate the voices of your loved ones with AI precision and warmth.',
              },
              {
                icon: MessageCircle,
                title: '24/7 Support',
                description: 'Always-available emotional conversations that understand and care.',
              },
              {
                icon: Users,
                title: 'Mirror Self-Talk',
                description: 'Reflect and grow through conversations with your AI self.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-lime to-deep-purple rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-deep-purple mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
};

export default Home;