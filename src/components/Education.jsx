import { useEffect, useRef } from 'react';

const Education = () => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="section-title gradient-text opacity-0 translate-y-10 transition-all duration-700"
        >
          ACADEMIC PROFILE
        </h2>
        
        <div 
          ref={cardRef}
          className="max-w-3xl mx-auto card opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <img 
                src="https://www.senecapolytechnic.ca/content/dam/projects/seneca/seneca-logo.svg" 
                alt="Seneca Polytechnic Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-1">Seneca Polytechnic</h3>
              <h4 className="text-xl text-gray-300 mb-2">Honours Bachelor of Data Science and Software Engineering</h4>
              <p className="text-gray-400">Sep 2023 - Aug 2027</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Machine Learning & Statistical Analysis</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Big Data Processing & Analytics</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Data Visualization & Business Intelligence</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Full-Stack Development & Software Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
