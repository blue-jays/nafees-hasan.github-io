import { useEffect, useRef } from 'react';

const DataAnalysis = () => {
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

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

    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          observer.observe(card);
        }, index * 100);
      });
    }

    return () => observer.disconnect();
  }, []);

  const dataProjects = [
    {
      id: 1,
      title: 'Sales Data Analysis',
      description: 'Comprehensive analysis of sales data with interactive Power BI dashboards and insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com/blue-jays/sales-analysis',
      demo: null,
      tags: ['Power BI', 'CSV', 'Data Visualization']
    },
    {
      id: 2,
      title: 'Web Scraping & Analytics',
      description: 'Automated web scraping pipeline with data cleaning and visualization in Power BI',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      github: 'https://github.com/blue-jays/web-scraping-analytics',
      demo: null,
      tags: ['Web Scraping', 'Python', 'Power BI']
    },
    {
      id: 3,
      title: 'Customer Behavior Analysis',
      description: 'Deep dive into customer behavior patterns using statistical analysis and visualization',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
      github: 'https://github.com/blue-jays/customer-analysis',
      demo: null,
      tags: ['Data Analysis', 'Statistics', 'Power BI']
    }
  ];

  return (
    <section id="data-analysis" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="section-title gradient-text opacity-0 translate-y-10 transition-all duration-700"
        >
          DATA ANALYSIS PROJECTS
        </h2>
        
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Transforming raw data into actionable insights through CSV analysis, web scraping, 
          and interactive Power BI dashboards
        </p>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dataProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card card opacity-0 translate-y-10 transition-all duration-700"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-accent to-secondary text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:gradient-text flex items-center transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:gradient-text flex items-center transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataAnalysis;
