const About = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our dealings.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in every aspect of our recruitment process.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, collaboration, and mutual success.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our methods and embrace new technologies to deliver better results.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
            About TalentPro
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Empowering businesses through exceptional talent acquisition and strategic recruitment solutions
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-background p-8 rounded-xl">
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-poppins font-bold text-text mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses by delivering top-tier talent that fuels innovation and growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-background p-8 rounded-xl">
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-poppins font-bold text-text mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted recruitment partner across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <blockquote className="text-2xl md:text-3xl font-poppins font-medium text-text mb-6 leading-relaxed">
              "At TalentPro, we know that great companies are built on great teams. 
              That's why we're committed to helping our clients find the right talent 
              to achieve their business goals."
            </blockquote>
            <p className="text-lg text-gray-600">
              — TalentPro Leadership Team
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with clients and candidates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-poppins font-semibold text-text mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">500+</div>
              <div className="text-blue-100">Successful Placements</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">50+</div>
              <div className="text-blue-100">Client Companies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the professionals who make TalentPro the trusted recruitment partner it is today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Team member" 
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-poppins font-semibold text-text mb-2">Rajesh Kumar</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Team member" 
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-poppins font-semibold text-text mb-2">Priya Sharma</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Team member" 
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-poppins font-semibold text-text mb-2">Amit Patel</h3>
              <p className="text-gray-600">Senior Recruiter</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
