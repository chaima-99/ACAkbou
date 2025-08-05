/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Star, Award, Users, Shield, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutimg from '../assets/aboutimg.jpg';
import Amer from '../assets/amer.jpg';
import Mourad from '../assets/mourad.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const historyMilestones = [
    {
      year: "2016",
      title: "Founded",
      description: "Started as a small community club with just 25 dedicated athletes and 3 coaches."
    },
    {
      year: "2018", 
      title: "First Champions",
      description: "Our athletes won their first state championships, establishing our reputation for excellence."
    },
    {
      year: "2020",
      title: "National Recognition", 
      description: "Became one of the top-ranked clubs nationwide, with qualified athletes and world-class coaches."
    }
  ];

  const coaches = [
    {
      name: "Mourad Maloum",
      role: "Head Coach",
      experience: "12 years experience",
      specialty: "Track Olympic Qualifier",
      image: Mourad
    },
    {
      name: "Amar Salhi", 
      role: "Assistant Coach",
      experience: "8 years experience",
      specialty: "Former World Championship Medalist",
      image: Amer
    },
    {
      name: "Chafiaa Salhi",
      role: "Youth Coach", 
      experience: "6 years experience",
      specialty: "National Junior Development Coach",
      image: "https://via.placeholder.com/250x300/F1F1F1/1D1D1D?text=Lisa+Chen"
    }
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do"
    },
    {
      icon: Users,
      title: "Teamwork", 
      description: "Building strong relationships and supporting each other"
    },
    {
      icon: Shield,
      title: "Discipline",
      description: "Maintaining focus and commitment to achieve our goals"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Acting with honesty and strong moral principles"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#E63946] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About ACAkbou
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dedicated to developing champions through excellence in training, coaching, and athletic development
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Athlitisme Club Akbou is committed to providing world-class training and coaching to athletes of all levels. We believe that every athlete has the potential to achieve greatness with the right guidance, support, and dedication.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our comprehensive programs focus on developing not just athletic performance but also character, leadership, and life skills that will serve our athletes both on the track and beyond.
              </p>
              
              <div className="flex items-center space-x-4 bg-[#E63946] text-white p-4 rounded-lg">
                <div className="bg-white rounded-full p-2">
                  <Target className="text-[#E63946]" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-lg">9 years of Excellence</div>
                  <div className="text-sm opacity-90">Proven track record of developing champions</div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="flex items-center justify-center">
                <img src={aboutimg} alt="about image" className='h-100 rounded-lg'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4">
              Our History
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a premier athletics training facility
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-[#E63946] hidden md:block"></div>
            
            <div className="space-y-12">
              {historyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  {/* Content */}
                  <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg relative">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#E63946] rounded-full border-4 border-white shadow-lg" 
                         style={{
                           [index % 2 === 0 ? 'right' : 'left']: '-2.5rem'
                         }}
                    ></div>
                    
                    <div className="text-3xl font-bold text-[#E63946] mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D1D1D] mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Placeholder space for timeline balance */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4">
              Meet Our Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class coaches with Olympic and international experience dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                className="bg-[#F1F1F1] rounded-lg overflow-hidden shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-64 bg-gray-300 flex items-center justify-center">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">
                    {coach.name}
                  </h3>
                  <div className="text-[#E63946] font-semibold mb-2">
                    {coach.role}
                  </div>
                  <div className="text-gray-600 text-sm mb-2">
                    {coach.experience}
                  </div>
                  <p className="text-gray-700 text-sm">
                    {coach.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class coaches with Olympic and international experience dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center bg-white p-8 rounded-lg shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E63946] rounded-full mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1D1D] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;