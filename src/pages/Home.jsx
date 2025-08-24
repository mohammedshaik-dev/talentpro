import { Link } from 'react-router-dom';

const Home = () => {
  const keyServices = [
    {
      title: 'Talent Acquisition',
      description: 'We source, screen, and present only the best-fit candidates.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Time-Saving Hiring',
      description: 'Our streamlined process eliminates delays and reduces HR workload.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Cost-Effective Recruitment',
      description: 'We help save money and minimize hiring risks.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Industry Insights',
      description: 'Data-driven market trends, salary benchmarks, and candidate expectations.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored recruitment strategies that align with your goals.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const industries = [
    'IT & Technology',
    'Healthcare',
    'Manufacturing',
    'Retail & E-commerce',
    'Banking & Finance'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
            Your Partner in Finding Top Talent – Faster, Smarter, Cost-Effective
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            We connect organizations with exceptional candidates who drive business success. 
            With our expertise, you save time, reduce hiring costs, and gain access to the 
            best professionals in the market.
          </p>
          <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Key Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-4">
              Our Key Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive recruitment solutions designed to meet your unique hiring needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyServices.map((service, index) => (
              <div key={index} className="bg-background p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-poppins font-semibold text-text mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini About */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-6">
                Why Choose TalentPro?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At TalentPro, we know that great companies are built on great teams. 
                That's why we're committed to helping our clients find the right talent 
                to achieve their business goals.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to empower businesses by delivering top-tier talent that 
                fuels innovation and growth, while our vision is to be the most trusted 
                recruitment partner across industries.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have deep expertise across multiple sectors and understand the unique 
              challenges and requirements of each industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-background p-6 rounded-lg text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                <h3 className="font-poppins font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help you find the perfect candidates for your organization. 
            Schedule a consultation today and take the first step towards building a stronger team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get Started Today
            </Link>
            <Link to="/services" className="btn-primary bg-white text-primary hover:bg-gray-100">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
