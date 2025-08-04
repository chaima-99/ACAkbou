import React from 'react';
import { Settings, Zap, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Technical Support",
      description: "Professional technical assistance and maintenance services"
    },
    {
      icon: Zap,
      title: "Quick Solutions",
      description: "Fast and efficient problem-solving for urgent needs"
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Comprehensive security solutions for peace of mind"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support whenever you need us"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the range of professional services we offer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E63946] bg-opacity-10 rounded-full mb-4">
                    <IconComponent className="text-[#E63946]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#E63946] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d12936] transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
