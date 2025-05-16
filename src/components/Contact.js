import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // All email recipients
    const recipients = [
      'info@star-house.in',
      'hamzaasifstarhouse@gmail.com',
      'moosa.starhouse@gmail.com',
      'esamex7@gmail.com'
    ];

    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    // Create mailto URL
    const mailtoUrl = `mailto:${recipients.join(',')}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Show success message
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Opening your email client...'
    });
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[rgb(0_0_0_/_0.4)]">
      {/* Using global background from CSS */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-serif mb-4">
            Get in <span className="text-white">Touch</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, custom orders, or anything else, our team is ready to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Company Info */}
            <div className="bg-[rgb(0_0_0_/_0.4)] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Company Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-white mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <p className="text-white/70">Plot No. 57-64 Near Durga Mandir,</p>
                    <p className="text-white/70">Wajidpur, Jajmau,</p>
                    <p className="text-white/70">Kanpur, U.P. INDIA 208010</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-white mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-white/70">info@star-house.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Management Team */}
            <div className="bg-[rgb(0_0_0_/_0.4)] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Management Team</h3>
              
              <div className="space-y-6">
                {/* Managing Partners */}
                <div className="space-y-4">
                  <h4 className="text-white font-medium mb-2">Managing Partners</h4>
                  
                  <div>
                    <p className="text-white font-medium">Mohammad Hamza Asif</p>
                    <p className="text-white/70">hamzaasifstarhouse@gmail.com</p>
                    <p className="text-white/70">+91 9695100777</p>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-white font-medium">Mohammad Moosa</p>
                    <p className="text-white/70">moosa.starhouse@gmail.com</p>
                    <p className="text-white/70">+91 9559700777</p>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-white font-medium">Mohammad Esa</p>
                    <p className="text-white/70">esamex7@gmail.com</p>
                    <p className="text-white/70">+91 9793700777</p>
                  </div>
                </div>

                {/* Company Manager */}
                <div>
                  <h4 className="text-white font-medium mb-2">Company Manager</h4>
                  <p className="text-white font-medium">Mohammad Javed</p>
                  <p className="text-white/70">+91 8418-888876</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-white/40"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-white/40"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-white/40"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-white/40"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#1a0d40] text-white rounded-sm hover:bg-[#0f0823] transition-all shadow-lg"
                >
                  Send Message
                </button>
                
                {formStatus.submitted && (
                  <div className={`mt-4 p-4 rounded-sm ${formStatus.success ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
