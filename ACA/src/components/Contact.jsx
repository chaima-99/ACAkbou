/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageCircle,
  Send,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^(05|06|07)[0-9]{8}$/;

    if (
      formData.phone.trim() &&
      !phoneRegex.test(formData.phone.replace(/\s/g, ''))
    ) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:acakbou@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="bg-[#E63946] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           Get in touch with our team - we're here to help you start your athletic journey
          </motion.p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Phone className="w-6 h-6 text-white" />,
              title: 'Phone',
              content: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
              note: 'Call us during business hours',
            },
            {
              icon: <MapPin className="w-6 h-6 text-white" />,
              title: 'Address',
              content: ['Stade 1 November 1954 akbou'],
              note: 'Visit our training facility',
            },
            {
              icon: <Mail className="w-6 h-6 text-white" />,
              title: 'Email',
              content: ['acakbou@gmail.com'],
              note: 'We respond within 24 hours',
            },
            {
              icon: <Clock className="w-6 h-6 text-white" />,
              title: 'Training Hours',
              content: ['Mon-Fri: 6AM - 9PM', 'Sat-Sun: 8AM - 6PM'],
              note: 'Training sessions available',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <div className="space-y-2 mb-4">
                {card.content.map((line, i) => (
                  <p key={i} className="text-gray-700 font-medium">
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-gray-500 text-sm">{card.note}</p>
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Have questions about our programs? Want to schedule a visit? Fill out
              the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Facility</h2>
          </div>
        </div>

        {/* Form + Map Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {[
                {
                  label: 'Your Name *',
                  name: 'name',
                  icon: User,
                  type: 'text',
                  placeholder: 'Enter your name',
                },
                {
                  label: 'Email Address *',
                  name: 'email',
                  icon: Mail,
                  type: 'email',
                  placeholder: 'Enter your email',
                },
                {
                  label: 'Phone Number',
                  name: 'phone',
                  icon: Phone,
                  type: 'tel',
                  placeholder: 'Enter your phone',
                },
                {
                  label: 'Subject *',
                  name: 'subject',
                  icon: MessageCircle,
                  type: 'text',
                  placeholder: 'Enter subject',
                },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium mb-2 text-gray-800">
                    {field.label}
                  </label>
                  <div className="relative">
                    <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                        errors[field.name]
                          ? 'border-red-500 bg-red-50 focus:ring-red-200'
                          : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      placeholder={field.placeholder}
                    />
                  </div>
                  {errors[field.name] && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors resize-vertical ${
                    errors.message
                      ? 'border-red-500 bg-red-50 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="Write your message here..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'hover:scale-105 focus:ring-4 focus:ring-blue-200 transform bg-red-500'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Us</h2>
            <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.218026480763!2d4.538358324496145!3d36.45228698723647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128cfc9695555555%3A0x100816d6befdafd2!2sStade%201%20November%201954%20akbou!5e0!3m2!1sen!2sdz!4v1754391303463!5m2!1sen!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="rounded-lg"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-gray-800">Our Office</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-gray-800">Visit Our Office</h3>
              <p className="text-gray-600 text-sm">
                We're located in the heart of the city, easily accessible by public transport and with parking available nearby.
              </p>

              <div className="mt-4 p-4 rounded-lg bg-gray-50">
                <h4 className="font-medium mb-2 text-gray-800">Directions</h4>
                <p className="text-sm text-gray-600">
                  Take the subway to the nearest station or drive via the main highway. Parking is available in the building's underground garage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
