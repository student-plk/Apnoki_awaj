import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Phone, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import SuccessModal from '../components/SuccessModal';
import UserDashboard from '../components/UserDashboard';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/logo.png';
import lakshyaImage from '../assets/Lakshya - photo.jpg';
import palakImage from '../assets/palak-photo.jpg';

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lime/20 via-cream to-deep-purple/20">
        {/* Curved SVG background - Responsive waves */}
        <svg className="absolute inset-0 w-full h-full z-0 hidden md:block" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,100 Q400,200 800,100 T1440,100 V600 H0 Z" fill="#ede9fe" opacity="0.7" />
          <path d="M0,200 Q400,350 800,200 T1440,200 V600 H0 Z" fill="#cddc39" opacity="0.15" />
          <path d="M0,300 Q400,500 800,300 T1440,300 V600 H0 Z" fill="#7b1fa2" opacity="0.10" />
        </svg>
        
        {/* Mobile-optimized smaller waves */}
        <svg className="absolute inset-0 w-full h-full z-0 md:hidden" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 Q100,100 200,50 T400,50 V300 H0 Z" fill="#ede9fe" opacity="0.5" />
          <path d="M0,100 Q100,150 200,100 T400,100 V300 H0 Z" fill="#cddc39" opacity="0.1" />
          <path d="M0,150 Q100,200 200,150 T400,150 V300 H0 Z" fill="#7b1fa2" opacity="0.08" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              {/* Logo above the heading */}
              <div className="flex justify-center lg:justify-start mb-4 md:mb-6">
                <img src={logo} alt="Apno ki Awaj Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-lg object-cover" />
              </div>
              <div className="flex items-center justify-center lg:justify-start mb-3 md:mb-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-deep-purple leading-tight">
                  Apno ki Awaj
              </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-3 md:mb-4 font-medium">
                "Because love deserves a voice that stays"
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Stay emotionally connected with your loved ones, even when they're far — or gone.
              </p>
              <button
                onClick={() => user ? setIsSuccessModalOpen(true) : setIsLoginModalOpen(true)}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full text-base md:text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {user ? 'Access Premium Features' : 'Stay Connected'}
              </button>
            </div>
            {/* Right: 3D Mirror AI SVG Illustration */}
            <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl md:w-[400px] md:h-[400px]" style={{transform: 'rotate(-3deg) perspective(1000px)'}}>
                {/* 3D Mirror Frame with depth */}
                <defs>
                  <linearGradient id="mirrorGradient" x1="180" y1="80" x2="340" y2="280" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" stopOpacity="0.95" />
                    <stop offset="0.5" stopColor="#ede9fe" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#e8e4f4" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="mirrorFrame" x1="180" y1="80" x2="340" y2="280" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#cddc39" />
                    <stop offset="0.5" stopColor="#a5d6a7" />
                    <stop offset="1" stopColor="#8bc34a" />
                  </linearGradient>
                  <linearGradient id="personGradient" x1="85" y1="125" x2="155" y2="275" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7b1fa2" />
                    <stop offset="0.5" stopColor="#9c27b0" />
                    <stop offset="1" stopColor="#ba68c8" />
                  </linearGradient>
                  <linearGradient id="aiGradient" x1="230" y1="125" x2="300" y2="275" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ede9fe" />
                    <stop offset="0.5" stopColor="#e1bee7" />
                    <stop offset="1" stopColor="#ce93d8" />
                  </linearGradient>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
                  </filter>
                </defs>
                
                {/* Mirror shadow */}
                <rect x="185" y="85" width="150" height="190" rx="12" fill="#000" opacity="0.2" />
                {/* 3D Mirror Frame */}
                <rect x="180" y="80" width="160" height="200" rx="15" fill="url(#mirrorFrame)" stroke="#cddc39" strokeWidth="6" filter="url(#shadow)" />
                <rect x="185" y="85" width="150" height="190" rx="12" fill="url(#mirrorGradient)" />
                
                {/* 3D Energetic Person (left, outside mirror) */}
                {/* Person shadow */}
                <ellipse cx="125" cy="275" rx="40" ry="15" fill="#000" opacity="0.2" />
                {/* Head with 3D gradient */}
                <circle cx="120" cy="160" r="35" fill="url(#personGradient)" filter="url(#shadow)" />
                <circle cx="120" cy="160" r="30" fill="#cddc39" />
                {/* 3D face details */}
                <ellipse cx="115" cy="155" rx="4" ry="6" fill="#7b1fa2" />
                <ellipse cx="125" cy="155" rx="4" ry="6" fill="#7b1fa2" />
                {/* Smiling mouth with depth */}
                <path d="M110 170 Q120 180 130 170" stroke="#7b1fa2" strokeWidth="3" fill="none" />
                {/* 3D cheeks */}
                <circle cx="105" cy="165" r="3" fill="#ffb3d9" opacity="0.6" />
                <circle cx="135" cy="165" r="3" fill="#ffb3d9" opacity="0.6" />
                {/* 3D Body with gradient */}
                <rect x="95" y="195" width="50" height="80" rx="25" fill="url(#personGradient)" filter="url(#shadow)" />
                {/* 3D Arms with perspective */}
                <rect x="85" y="210" width="15" height="40" rx="7" fill="url(#personGradient)" style={{transform: 'rotate(-15deg)'}} filter="url(#shadow)" />
                <rect x="140" y="210" width="15" height="40" rx="7" fill="url(#personGradient)" style={{transform: 'rotate(15deg)'}} filter="url(#shadow)" />
                {/* 3D Hands */}
                <circle cx="92" cy="250" r="8" fill="#cddc39" filter="url(#shadow)" />
                <circle cx="148" cy="250" r="8" fill="#cddc39" filter="url(#shadow)" />
                
                {/* 3D Cheerful AI Reflection (inside mirror) */}
                {/* AI shadow inside mirror */}
                <ellipse cx="265" cy="275" rx="40" ry="15" fill="#000" opacity="0.1" />
                {/* AI Head with 3D gradient */}
                <circle cx="260" cy="160" r="35" fill="url(#aiGradient)" filter="url(#shadow)" />
                <circle cx="260" cy="160" r="30" fill="#fff" />
                {/* AI Face details with depth */}
                <rect x="255" y="150" width="10" height="3" rx="1.5" fill="#cddc39" />
                <rect x="255" y="155" width="10" height="3" rx="1.5" fill="#cddc39" />
                <rect x="255" y="160" width="10" height="3" rx="1.5" fill="#cddc39" />
                {/* 3D AI eyes */}
                <circle cx="258" cy="170" r="3" fill="#7b1fa2" filter="url(#shadow)" />
                <circle cx="262" cy="170" r="3" fill="#7b1fa2" filter="url(#shadow)" />
                {/* AI smile with depth */}
                <path d="M255 175 Q260 180 265 175" stroke="#7b1fa2" strokeWidth="2" fill="none" />
                {/* 3D AI Body */}
                <rect x="240" y="195" width="50" height="80" rx="25" fill="url(#aiGradient)" filter="url(#shadow)" />
                <rect x="240" y="195" width="50" height="80" rx="25" fill="#7b1fa2" opacity="0.2" />
                {/* 3D AI Arms */}
                <rect x="230" y="210" width="15" height="40" rx="7" fill="url(#aiGradient)" filter="url(#shadow)" />
                <rect x="285" y="210" width="15" height="40" rx="7" fill="url(#aiGradient)" filter="url(#shadow)" />
                {/* 3D AI Hands */}
                <circle cx="237" cy="250" r="8" fill="#fff" stroke="#7b1fa2" strokeWidth="2" filter="url(#shadow)" />
                <circle cx="293" cy="250" r="8" fill="#fff" stroke="#7b1fa2" strokeWidth="2" filter="url(#shadow)" />
                
                {/* 3D Energy particles with glow */}
                <circle cx="280" cy="140" r="2" fill="#cddc39" opacity="0.8" filter="url(#shadow)">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="290" cy="150" r="1.5" fill="#7b1fa2" opacity="0.6" filter="url(#shadow)">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="285" cy="180" r="1" fill="#cddc39" opacity="0.7" filter="url(#shadow)">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite" />
                </circle>
                
                {/* Enhanced 3D Mirror shimmer effect */}
                <rect x="190" y="120" width="140" height="8" rx="4" fill="#fff" opacity="0.4" filter="url(#shadow)">
                  <animate attributeName="x" values="190;250;190" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="190" y="180" width="140" height="6" rx="3" fill="#fff" opacity="0.3" filter="url(#shadow)">
                  <animate attributeName="x" values="190;260;190" dur="2.5s" repeatCount="indefinite" />
                </rect>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-purple mb-4 md:mb-6">
                Apno ki Awaj: Because love deserves a voice that stays.
              </h2>
              <div className="bg-cream p-6 md:p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Apno ki Awaj is your emotional AI companion designed to fight loneliness, stress, grief, and anxiety. 
                  By cloning voices of loved ones using past chats and audio notes, our AI gives you a chance to talk, 
                  listen, and heal — anytime, anywhere.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-3 md:mt-4">
                  Whether you're away from family, missing someone who's passed, or just feeling low — you'll always 
                  have someone to talk to.
                </p>
              </div>
            </div>

            {/* Right: Voice Wave Animation */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex items-end space-x-1 md:space-x-2 h-24 md:h-32">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-lime to-deep-purple rounded-full animate-voice-wave"
                      style={{
                        width: '6px',
                        height: `${Math.random() * 60 + 15}px`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <div className="text-center mt-6 md:mt-8">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime to-deep-purple text-white px-4 md:px-6 py-2 md:py-3 rounded-full">
                    <MessageCircle size={16} className="md:w-5 md:h-5" />
                    <span className="font-semibold text-sm md:text-base">Healing Conversations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Preview */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-purple mb-3 md:mb-4">
              Emotional Connection, Reimagined
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Experience the comfort of familiar voices and supportive conversations whenever you need them most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-lime to-deep-purple rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <feature.icon className="text-white md:w-7 md:h-7" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-deep-purple mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-purple mb-3 md:mb-4">
              Brains Behind the Build
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Student Innovators Who Dared to Dream & Do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {[
              {
                name: 'Lakshya Chalana',
                role: 'Co-Founder',
                image: lakshyaImage,
                portfolio: 'https://lakshya-chalana-portfolio.netlify.app/',
                description: 'Passionate about leveraging AI to create meaningful emotional connections.',
                expertise: ['AI/ML', 'Product Strategy']
              },
              {
                name: 'Palak Saini',
                role: 'Co-Founder',
                image: palakImage,
                portfolio: 'https://palaksaini-portfolio.netlify.app/',
                description: 'Dedicated to building technology that heals hearts and brings families closer.',
                expertise: ['User Experience', 'Business Development']
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-lime to-deep-purple rounded-full overflow-hidden border-2 border-lime shadow-lg mx-auto">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-deep-purple to-lime rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink className="text-white md:w-4 md:h-4" size={16} />
                    </a>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-deep-purple mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 text-sm md:text-base mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-lime/10 to-deep-purple/10 text-deep-purple rounded-full text-xs md:text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/team"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full text-base md:text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Meet the Full Team
            </Link>
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