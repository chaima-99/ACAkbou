import React from 'react';
import { Home as HomeIcon, Users, Award, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to ACAkbou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for excellence and innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="mx-auto mb-4 text-[#E63946]" size={48} />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">Dedicated professionals working for you</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Award className="mx-auto mb-4 text-[#E63946]" size={48} />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to delivering the best results</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <MapPin className="mx-auto mb-4 text-[#E63946]" size={48} />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Serving our community with pride</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;