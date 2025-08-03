'use client';

import { Metadata } from 'next';
import { useState } from 'react';

// Note: Since we're using 'use client', we can't export metadata from this component
// Instead, we'll need to handle this differently or create a separate metadata export

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              {submitMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering Request</option>
                    <option value="careers">Careers</option>
                    <option value="complaint">Complaint</option>
                    <option value="compliment">Compliment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CD3A9] focus:border-transparent"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4CD3A9] text-black py-3 px-6 rounded-md font-medium text-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#4CD3A9] p-3 rounded-full">
                      <span className="text-black text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">General Inquiries: (555) 123-FOOD</p>
                      <p className="text-gray-600">Catering: (555) 456-CATER</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#4CD3A9] p-3 rounded-full">
                      <span className="text-black text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">info@sloppycanteen.com</p>
                      <p className="text-gray-600">catering@sloppycanteen.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#4CD3A9] p-3 rounded-full">
                      <span className="text-black text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Response Time</h3>
                      <p className="text-gray-600">We typically respond within 24 hours</p>
                      <p className="text-gray-600">Urgent matters: Call us directly</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#4CD3A9] text-black p-3 rounded-full hover:bg-opacity-90 transition-colors">
                    <span className="text-xl">📘</span>
                  </a>
                  <a href="#" className="bg-[#4CD3A9] text-black p-3 rounded-full hover:bg-opacity-90 transition-colors">
                    <span className="text-xl">📷</span>
                  </a>
                  <a href="#" className="bg-[#4CD3A9] text-black p-3 rounded-full hover:bg-opacity-90 transition-colors">
                    <span className="text-xl">🐦</span>
                  </a>
                </div>
                
                <p className="text-gray-600 mt-4">
                  Stay updated with our latest menu items, promotions, and location news!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Do you offer catering services?</h3>
              <p className="text-gray-600">
                Yes! We offer catering for events of all sizes. Contact us at catering@sloppycanteen.com 
                or call (555) 456-CATER for more information.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Do you have vegetarian/vegan options?</h3>
              <p className="text-gray-600">
                Absolutely! We have several vegetarian options and plant-based alternatives. 
                Look for the 🌱 symbol on our menu.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Can I place orders online?</h3>
              <p className="text-gray-600">
                Yes, we're working on our online ordering system. In the meantime, 
                please call your preferred location to place orders for pickup.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Are you hiring?</h3>
              <p className="text-gray-600">
                We're always looking for great team members! Visit any of our locations 
                to fill out an application or email your resume to jobs@sloppycanteen.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
