const Services = () => {
  const services = [
    {
      title: 'Talent Acquisition',
      description: 'We source, screen, and present only the best-fit candidates.',
      longDescription: 'Our comprehensive talent acquisition service covers the entire recruitment lifecycle. We use advanced sourcing techniques, thorough screening processes, and detailed candidate assessments to ensure we present only the most qualified professionals who align with your company culture and requirements.',
      features: [
        'Advanced candidate sourcing',
        'Comprehensive screening & assessment',
        'Cultural fit evaluation',
        'Background verification',
        'Reference checks'
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Time-Saving Hiring',
      description: 'Our streamlined process eliminates delays and reduces HR workload.',
      longDescription: 'We understand that time is money in business. Our optimized hiring process reduces time-to-hire by up to 50% while maintaining quality standards. We handle the heavy lifting so your HR team can focus on strategic initiatives.',
      features: [
        'Streamlined recruitment process',
        'Reduced time-to-hire',
        'Automated candidate tracking',
        'Regular progress updates',
        'Dedicated recruitment manager'
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Cost-Effective Recruitment',
      description: 'We help save money and minimize hiring risks.',
      longDescription: 'Our recruitment solutions are designed to maximize your ROI while minimizing costs. We help you avoid expensive hiring mistakes, reduce turnover, and optimize your recruitment budget through strategic planning and execution.',
      features: [
        'Reduced hiring costs',
        'Lower turnover rates',
        'Risk mitigation strategies',
        'Budget optimization',
        'ROI-focused approach'
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Industry Insights',
      description: 'Data-driven market trends, salary benchmarks, and candidate expectations.',
      longDescription: 'Stay ahead of the competition with our comprehensive market intelligence. We provide detailed insights into industry trends, salary benchmarks, candidate expectations, and competitive landscape to help you make informed hiring decisions.',
      features: [
        'Market trend analysis',
        'Salary benchmarking',
        'Competitive intelligence',
        'Candidate behavior insights',
        'Industry reports'
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored recruitment strategies that align with your goals.',
      longDescription: 'Every organization is unique, and so are their recruitment needs. We develop customized solutions that align with your business objectives, company culture, and specific requirements to ensure optimal results.',
      features: [
        'Tailored strategies',
        'Flexible engagement models',
        'Scalable solutions',
        'Industry-specific expertise',
        'Ongoing optimization'
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Comprehensive recruitment solutions designed to meet your unique hiring needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From talent acquisition to customized solutions, we provide end-to-end recruitment services 
              that help you build winning teams
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold text-text mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-background p-8 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-primary mb-4 opacity-20">{index + 1}</div>
                      <h4 className="text-xl font-poppins font-semibold text-text">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures quality, efficiency, and successful placements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing customized recruitment approach' },
              { step: '03', title: 'Execution', description: 'Sourcing, screening, and presenting candidates' },
              { step: '04', title: 'Placement', description: 'Successful onboarding and follow-up support' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-text mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have deep expertise across multiple sectors and understand the unique 
              challenges and requirements of each industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'IT & Technology',
              'Healthcare',
              'Manufacturing',
              'Retail & E-commerce',
              'Banking & Finance'
            ].map((industry, index) => (
              <div key={index} className="bg-background p-6 rounded-lg text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                <h3 className="font-poppins font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our services can help you find the perfect candidates 
            and build a stronger team for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Schedule a Consultation
            </a>
            <a href="tel:+919876543210" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
