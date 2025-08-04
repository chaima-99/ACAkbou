import React from 'react';
import { Target, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission, vision, and values
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              ACAkbou has been serving our community with dedication and excellence. 
              We believe in creating lasting relationships and delivering exceptional results.
            </p>
            <p className="text-gray-600">
              Our team of professionals is committed to providing the highest quality 
              services while maintaining the values that define who we are.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Target className="text-[#E63946]" size={32} />
                <div>
                  <h3 className="font-semibold text-lg">Our Mission</h3>
                  <p className="text-gray-600">To deliver excellence in everything we do</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Heart className="text-[#E63946]" size={32} />
                <div>
                  <h3 className="font-semibold text-lg">Our Values</h3>
                  <p className="text-gray-600">Integrity, quality, and customer satisfaction</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Star className="text-[#E63946]" size={32} />
                <div>
                  <h3 className="font-semibold text-lg">Our Vision</h3>
                  <p className="text-gray-600">To be the leading choice in our field</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;