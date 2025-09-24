
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = new URLSearchParams();
    
    // Convert FormData to URLSearchParams
    for (const [key, value] of formData.entries()) {
      data.append(key, value as string);
    }
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d35kqiurrp5vu46banhg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString()
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Get in touch for a personalized consultation and quote
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <i className="ri-phone-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Direct Line</h4>
                  <a href="tel:404.398.2355" className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300">
                    404.398.2355
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                  <i className="ri-mail-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Email Support</h4>
                  <a href="mailto:support@unitedinnovationsled.com" className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-300">
                    support@unitedinnovationsled.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                  <i className="ri-map-pin-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Location</h4>
                  <p className="text-gray-300">Atlanta, Georgia<br />United States</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-green-600 to-teal-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                  <i className="ri-whatsapp-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">WhatsApp</h4>
                  <a href="https://wa.me/14043982355" className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-300">
                    404.398.2355
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <i className="ri-time-line text-blue-400 mr-2"></i>
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-green-400">8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-green-400">9:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gray-500">Closed</span>
                </p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-blue-400 font-medium text-center">
                    <i className="ri-customer-service-2-line mr-2"></i>
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Message */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 rounded-full mr-4">
                  <i className="ri-user-star-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Joel Silva</h4>
                  <p className="text-gray-400 text-sm">Founder & Leader</p>
                </div>
              </div>
              <p className="text-gray-300 italic text-center">
                "We don't just light up screens—we light up possibilities."
              </p>
            </div>
          </div>
          
          <div>
            <form 
              id="contact-quote-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <i className="ri-send-plane-line text-blue-400 mr-3"></i>
                Request a Quote
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <div className="relative">
                    <select
                      id="service-type"
                      name="service-type"
                      className="w-full px-4 py-3 pr-8 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none cursor-pointer transition-all duration-300 hover:border-gray-500"
                    >
                      <option value="">Select service type</option>
                      <option value="equipment-sales">Equipment Sales</option>
                      <option value="equipment-rental">Equipment Rental</option>
                      <option value="extended-warranty">Extended Warranty</option>
                      <option value="custom-solution">Custom Solution</option>
                      <option value="consultation">Consultation Only</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-vertical transition-all duration-300 hover:border-gray-500"
                    placeholder="Please describe your project requirements, installation location, size preferences, and any specific needs..."
                  />
                  <p className="text-xs text-gray-400 mt-1">Maximum 500 characters</p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center">
                      <i className="ri-check-double-line text-green-400 text-xl mr-3"></i>
                      <p className="text-green-300 font-medium">Thank you! Your request has been submitted successfully. We'll contact you within 24 hours.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center">
                      <i className="ri-error-warning-line text-red-400 text-xl mr-3"></i>
                      <p className="text-red-300 font-medium">Sorry, there was an error submitting your request. Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-500 hover:to-green-400 border-0 shadow-lg shadow-blue-500/20 hover:shadow-green-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Quote Request</span>
                      <i className="ri-send-plane-line ml-2 relative z-10"></i>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
