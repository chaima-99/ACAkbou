/* eslint-disable no-unused-vars */
// components/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  Quote, ChevronLeft, ChevronRight, Play, Phone,  Award, Target, Activity } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroimg from '../assets/heroimg.png';
import emma from '../assets/emma.png';
import mike from '../assets/Mike.png';
import sarah from '../assets/sarah.png';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';
import gallery9 from '../assets/gallery9.jpg';
import gallery10 from '../assets/gallery10.jpg';
import gallery11 from '../assets/gallery11.jpg';
import gallery12 from '../assets/gallery12.jpg';
import gallery13 from '../assets/gallery13.jpg';
import gallery14 from '../assets/gallery14.jpg';
import gallery15 from '../assets/gallery15.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const achievements = [
    {
      icon: Activity,
      number: "50+",
      label: "Athletes",
      description: "Qualified for Nationals"
    },
    {
      icon: Award,
      number: "9",
      label: "Years",
      description: "of Excellence"
    },
    {
      icon: Target,
      number: "200+",
      label: "Members",
      description: "Active Athletes"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Elite Sprinter",
      image: sarah,
      quote: "Training here has been life-changing. The coaches are exceptional and the community is incredibly supportive."
    },
    {
      name: "Mike Chen",
      role: "Marathon Runner",
      image: mike,
      quote: "This program transformed my running completely. I achieved my personal best and made lifelong friends."
    },
    {
      name: "Emma Davis",
      role: "High Jumper",
      image: emma,
      quote: "The coaching and training environment here is world-class. I couldn't have achieved my goals anywhere else."
    }
  ];

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15
  ];

  const scrollLeft = () => {
    document.getElementById('gallery-scroll').scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('gallery-scroll').scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image with Responsive Sizing */}
  <div className="absolute inset-0">
    <img 
      src={heroimg} 
      alt="hero image" 
      className="w-full h-full object-cover object-center"
    />
    {/* Lighter Overlay for better image visibility */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30"></div>
  </div>
  
  {/* Hero Content */}
  <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      RUN. TRAIN. ACHIEVE.
    </motion.h1>
    
    <motion.p 
      className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Join ACAkbou and unlock your potential with world-class training and coaching.
    </motion.p>
    
    <motion.div 
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Link 
        to="/services"
        className="w-full sm:w-auto bg-[#E63946] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
      >
        <Play size={18} className="sm:w-5 sm:h-5" />
        <span>Services</span>
      </Link>
      <Link 
        to="/contact"
        className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-[#1D1D1D] transition-all duration-200 inline-flex items-center justify-center space-x-2"
      >
        <Phone size={18} className="sm:w-5 sm:h-5" />
        <span>Contact Us</span>
      </Link>
    </motion.div>
  </div>
</section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating excellence and the success of our dedicated athletes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center bg-white p-8 rounded-lg shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E63946] bg-opacity-10 rounded-full mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[#E63946] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold text-[#1D1D1D] mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4">
              What Our Athletes Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real athletes who've transformed their performance with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#F1F1F1] p-8 rounded-lg relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="text-[#E63946] mb-4" size={32} />
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-[#1D1D1D]">
                      {testimonial.name}
                    </div>
                    <div className="text-[#E63946] text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at ACAkbou Gallery Section */}
      <section className="py-20 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4">
              Life at ACAkbou
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real athletes who've transformed their performance with us
            </p>
          </div>

          {/* Gallery with horizontal scroll */}
          <div className="relative" data-aos="fade-up">
            {/* Navigation Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="text-[#1D1D1D]" size={24} />
            </button>
            
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="text-[#1D1D1D]" size={24} />
            </button>

            {/* Scrollable Gallery */}
            <div
              id="gallery-scroll"
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;