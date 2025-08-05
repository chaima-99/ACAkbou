/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Globe,
  Heart,
  Clock
} from 'lucide-react';

import servicesimg from '../assets/servicesimg.jpg';
import combined from '../assets/combined.png';
import sprints from '../assets/sprints.png';
import middle from '../assets/middle.png';
import long from '../assets/long.png';
import relays from '../assets/relays.png';
import hurdles from '../assets/hurdles.png';
import steeplachase from '../assets/steeplachase.png';
import jumps from '../assets/jumps.png';
import throws from '../assets/throws.png';
import cross from '../assets/cross.png';
import walk from '../assets/walk.png';
import kid from '../assets/kid.png';



// Initialize AOS-like animations with Framer Motion
const AthleticsCard = ({ discipline, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div 
        variants={imageVariants}
        whileHover="hover"
        className="relative h-48 overflow-hidden"
      >
        {/* Image placeholder */}
        <img 
          src={discipline.image} 
          alt={discipline.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
          {discipline.category}
        </div>
      </motion.div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-gray-900 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {discipline.title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {discipline.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const AthleticsComponent = () => {
  const disciplines = [
    {
      title: "Sprints",
      description: "100m, 200m, 400m – explosive power and speed.",
      category: "Speed",
      image: sprints
    },
    {
      title: "Middle Distance",
      description: "800m to 1500m – balance between speed and endurance.",
      category: "Endurance",
      image: middle
    },
    {
      title: "Long Distance",
      description: "3km, 5km, 10km – aerobic strength and consistent pacing.",
      category: "Endurance",
      image: long
    },
    {
      title: "Relays",
      description: "4x100m & 4x400m – speed, rhythm, and smooth baton exchanges.",
      category: "Team",
      image: relays
    },
    {
      title: "Hurdles",
      description: "100m/110m & 400m – mix of sprinting and precise technique.",
      category: "Technical",
      image: hurdles
    },
    {
      title: "Steeplechase",
      description: "3000m & 3000m with barriers and water jumps – endurance + agility.",
      category: "Technical",
      image: steeplachase
    },
    {
      title: "Jumps",
      description: "Long jump, high jump, triple jump, pole vault – explosive leg and body control.",
      category: "Field",
      image: jumps
    },
    {
      title: "Throws",
      description: "Shot put, discus, javelin, hammer – power and technical precision.",
      category: "Field",
      image: throws
    },
    {
      title: "Cross Country",
      description: "Off-road distance running – stamina, terrain awareness, and mental toughness.",
      category: "Endurance",
      image: cross
    },
    {
      title: "Race Walking",
      description: "3km to 20km – endurance walking with technique discipline.",
      category: "Technical",
      image: walk
    },
    {
      title: "Combined Events",
      description: "Heptathlon (women) & Decathlon (men) – compete in 7-10 different events.",
      category: "Multi",
      image: combined
    },
    {
      title: "Kids Athletics",
      description: "Fun 3km athletics and multisport games for kids under 12.",
      category: "Youth",
      image: kid
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Athletics Disciplines
          </motion.h1>
          <motion.p 
            variants={subtitleVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the variety of track & field sports our club offers – there's something for every type of athlete.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {disciplines.map((discipline, index) => (
            <AthleticsCard 
              key={discipline.title}
              discipline={discipline}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>
    </div>
  );
};




const AthleticsServices = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 100
        });
      });
    }
  }, []);

  
  const benefits = [
    {
      icon: User,
      title: "Professional Coaching",
      description: "Expert coaches with extensive experience in competitive athletics. Our certified professionals provide personalized guidance to help you reach your training and competitive goals and fitness level"
    },
    {
      icon: Globe,
      title: "Community Support",
      description: "Join a vibrant and supportive community of athletes at all levels, from beginners to elite competitors. Build lasting friendships and find training partners"
    },
    {
      icon: Heart,
      title: "Personalized Training",
      description: "Receive individualized training programs tailored to your specific needs, goals and fitness level. Our coaches adapt sessions to maximize your potential"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "We offer training sessions throughout the week to accommodate different schedules and lifestyles"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Our Services
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                At ACAkbou, we support athletes of all levels
                in their journey to success. From sprinting and
                endurance training to competition prep and youth
                development, our services are designed to help
                you grow, compete, and thrive in the world of athletics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden ">
                <div className="flex items-center justify-center relative">
                  <img src={servicesimg} alt="" className='shadow-lg' />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Athletics Disciplines */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AthleticsComponent />
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Why Join ACakbou?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of training with the best athletics club in the region
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#E63946] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AthleticsServices;
