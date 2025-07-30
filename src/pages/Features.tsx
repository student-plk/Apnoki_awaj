import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, Heart, Smartphone, Carrot as Mirror, Shield } from 'lucide-react';

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Phone,
      title: 'Talk to Your Loved One (Voice Clone)',
      description: 'Hear their voice again — through AI trained on messages and audio you provide.',
      side: 'left',
    },
    {
      icon: MessageCircle,
      title: '24×7 Emotional Chat Support',
      description: 'Chat with an emotionally intelligent AI that listens, responds with empathy, and understands emotional cues.',
      side: 'right',
    },
    {
      icon: Heart,
      title: 'Healing AI Replies',
      description: 'Soft, supportive responses that help you calm down, reflect, and feel heard.',
      side: 'left',
    },
    {
      icon: Smartphone,
      title: 'Voice in Your Pocket',
      description: 'Carry your loved ones\' voice anywhere, anytime. Access comfort with a tap.',
      side: 'right',
    },
    {
      icon: Mirror,
      title: 'Mirror Self Talk',
      description: 'Reflect and speak with your AI self — trained in your tone, to encourage personal healing and growth.',
      side: 'left',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-cream via-white to-lime/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-deep-purple mb-6 animate-fade-up">
            Features that heal, connect, and comfort
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Every feature is designed with love, empathy, and the understanding that emotional connection transcends physical presence.
          </p>
        </div>

        {/* Timeline Features */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-lime to-deep-purple h-full rounded-full hidden lg:block"></div>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card grid lg:grid-cols-2 gap-12 items-center ${
                  visibleFeatures.includes(index) 
                    ? feature.side === 'left' 
                      ? 'animate-slide-in-left' 
                      : 'animate-slide-in-right'
                    : 'opacity-0'
                }`}
                data-index={index}
              >
                {/* Content */}
                <div className={`${feature.side === 'right' ? 'lg:order-2' : ''} relative`}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-lime to-deep-purple rounded-2xl flex items-center justify-center mb-6">
                      <feature.icon className="text-white" size={28} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-deep-purple mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-lime to-deep-purple rounded-full border-4 border-white shadow-lg" 
                       style={{
                         [feature.side === 'left' ? 'right' : 'left']: '-3rem'
                       }}>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${feature.side === 'right' ? 'lg:order-1' : ''} flex justify-center`}>
                  <div className="w-80 h-80 bg-gradient-to-br from-lime/20 to-deep-purple/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime/10 to-deep-purple/10 animate-shimmer bg-[length:200%_100%]"></div>
                    <div className="w-64 h-64 bg-white/90 rounded-2xl flex items-center justify-center relative z-10">
                      <feature.icon className="text-deep-purple opacity-30" size={64} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-deep-purple mb-4">
              Ready to reconnect with love?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your healing journey today. Every conversation brings you closer to peace.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;