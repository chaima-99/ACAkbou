import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Event = () => {
  const events = [
    {
      title: "Annual Conference 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Convention Center",
      attendees: "200+ Expected"
    },
    {
      title: "Workshop Series",
      date: "April 10, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Training Room A",
      attendees: "50+ Expected"
    },
    {
      title: "Community Meetup",
      date: "May 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Community Hall",
      attendees: "100+ Expected"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at our exciting upcoming events and activities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#E63946] h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-3 text-[#E63946]" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock size={18} className="mr-3 text-[#E63946]" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-3 text-[#E63946]" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-3 text-[#E63946]" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-[#E63946] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#d12936] transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
