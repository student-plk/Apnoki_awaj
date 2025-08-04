import React from 'react';
import { Linkedin, Users, Heart, Lightbulb, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import lakshyaImage from '../assets/Lakshya - photo.jpg';
import palakImage from '../assets/palak-photo.jpg';
import mediaCoverage1 from '../assets/1.jpg';
import mediaCoverage2 from '../assets/2.jpg';
import mediaCoverage3 from '../assets/3.jpg';
import mediaCoverage4 from '../assets/4.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Lakshya Chalana',
      role: 'Co-Founder',
      image: lakshyaImage,
      linkedin: 'https://www.linkedin.com/in/lakshya-chalana-886306285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      portfolio: 'https://lakshya-chalana-portfolio.netlify.app/',
      description: 'Passionate about leveraging AI to create meaningful emotional connections and healing experiences.',
      expertise: ['AI/ML', 'Product Strategy', 'Technical Leadership']
    },
    {
      name: 'Palak Saini',
      role: 'Co-Founder',
      image: palakImage,
      linkedin: 'https://www.linkedin.com/in/palak-saini-7868b921b',
      portfolio: 'https://palaksaini-portfolio.netlify.app/',
      description: 'Dedicated to building technology that heals hearts and brings families closer together.',
      expertise: ['User Experience', 'Business Development', 'Emotional Design']
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-cream via-white to-lime/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime to-deep-purple text-white px-6 py-3 rounded-full mb-6 animate-fade-up">
            <Users size={20} />
            <span className="font-semibold">Meet Our Team</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-deep-purple mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Brains Behind the Build
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Student Innovators Who Dared to Dream & Do
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile Section */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-lime shadow-lg mx-auto">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-r from-lime to-deep-purple rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-deep-purple to-lime rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-deep-purple mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{member.description}</p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-lime/10 to-deep-purple/10 text-deep-purple rounded-full text-sm font-medium border border-lime/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Media Coverage Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-purple mb-4">
              Media Coverage & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our journey with Apno ki Awaj has been featured in leading media outlets and recognized at prestigious events like JAZBAA 4.0.
            </p>
          </div>

          {/* JAZBAA 4.0 Highlight */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime to-deep-purple text-white px-6 py-3 rounded-full mb-4">
                <span className="font-semibold">🏆 JAZBAA 4.0</span>
              </div>
              <h3 className="text-2xl font-bold text-deep-purple mb-4">
                Student Startups Shine Globally
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We presented Apno ki Awaj at JAZBAA 4.0, India's premier student-led startup showcase, 
                where 150+ student startups were featured live on YouTube under the mentorship of Vimal Daga.
              </p>
            </div>

            {/* Media Coverage Horizontal Scroll */}
            <div className="relative w-full">
              <div className="horizontal-scroll gap-6 pb-4 scrollbar-hide w-full">
                {[
                  {
                    image: mediaCoverage1,
                    title: "The Bizz Stories",
                    description: "JAZBAA 4.0: Student Startups Shine Globally",
                    date: "August 2, 2025"
                  },
                  {
                    image: mediaCoverage2,
                    title: "Sangri Today",
                    description: "JAZBAA 4.0: India's Student Startups Go Global",
                    date: "August 2, 2025"
                  },
                  {
                    image: mediaCoverage3,
                    title: "LinuxWorld Presentation",
                    description: "Live presentation at JAZBAA 4.0 showcasing Apno ki Awaj",
                    date: "August 1, 2025"
                  },
                  {
                    image: mediaCoverage4,
                    title: "Team Spotlight",
                    description: "Our team featured in the JAZBAA 4.0 event coverage",
                    date: "August 1, 2025"
                  }
                ].map((media, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-cream to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-96"
                  >
                    <div className="h-64 rounded-lg overflow-hidden shadow-md mb-4">
                      <img 
                        src={media.image} 
                        alt={media.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-deep-purple mb-2">{media.title}</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{media.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{media.date}</span>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-lime/10 text-lime text-xs rounded-full">Media</span>
                        <span className="px-2 py-1 bg-deep-purple/10 text-deep-purple text-xs rounded-full">JAZBAA 4.0</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Scroll Indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-lime rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-deep-purple mb-2">150+</div>
              <div className="text-gray-600">Student Startups</div>
              <div className="text-sm text-gray-500">Featured at JAZBAA 4.0</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-deep-purple mb-2">12+</div>
              <div className="text-gray-600">Media Outlets</div>
              <div className="text-sm text-gray-500">Covered Our Story</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-deep-purple mb-2">3200+</div>
              <div className="text-gray-600">Concurrent YouTube</div>
              <div className="text-sm text-gray-500">Live Viewers</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-lime to-deep-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-deep-purple mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              We believe that technology should heal, not just connect. Apno ki Awaj was born from a simple yet powerful idea: 
              what if we could preserve the voices of our loved ones and create meaningful conversations that bring comfort and healing? 
              As student innovators, we dared to dream beyond the conventional and built something that truly matters.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-lime to-deep-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-deep-purple mb-2">Emotional Healing</h3>
                <p className="text-sm text-gray-600">Creating technology that heals hearts and brings families closer</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-lime to-deep-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-deep-purple mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Pushing boundaries of what AI can do for emotional wellbeing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-lime to-deep-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-deep-purple mb-2">Community</h3>
                <p className="text-sm text-gray-600">Building a world where no one feels alone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-lime/10 to-deep-purple/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-deep-purple mb-4">
              Join Us in This Journey
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the power of emotional AI and discover how technology can bring healing and connection to your life.
            </p>
            <Link 
              to="/voice-talk"
              className="inline-block px-8 py-4 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
      
      {/* Back to Home Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          to="/"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Back to Home"
        >
          <Users size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Team; 