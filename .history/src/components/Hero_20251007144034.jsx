import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const fullTexts = [
    'Hi, I am Md Nazmun Hasan Nafees',
    'DATA SCIENTIST & SWE'
  ];

  useEffect(() => {
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const buttons = buttonsRef.current;

    if (heading && description && buttons) {
      heading.style.opacity = '0';
      description.style.opacity = '0';
      buttons.style.opacity = '0';
      
      setTimeout(() => {
        heading.style.transition = 'opacity 1s ease, transform 1s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        description.style.transition = 'opacity 1s ease, transform 1s ease';
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
      }, 600);
      
      setTimeout(() => {
        buttons.style.transition = 'opacity 1s ease, transform 1s ease';
        buttons.style.opacity = '1';
        buttons.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % fullTexts.length;
      const fullText = fullTexts[i];

      // Adjust typing speed based on whether we're typing or deleting
      // Deleting is slower for a more visible effect
      setTypingSpeed(isDeleting ? 80 : 150);

      if (isDeleting) {
        // Deleting text one character at a time
        setText(fullText.substring(0, text.length - 1));
      } else {
        // Typing text one character at a time
        setText(fullText.substring(0, text.length + 1));
      }

      // If we've finished typing the full text
      if (!isDeleting && text === fullText) {
        // Wait for 4 seconds if it's the name, 15 seconds if it's the title
        const pauseTime = i === 0 ? 4000 : 15000;
        
        // After pause, start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } 
      // If we've deleted all the text
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Set up the typing interval
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, fullTexts]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4 relative overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          style={{
            filter: 'brightness(1.4) contrast(1.05)',
          }}
        >
          <source src="/bgm_video_lite.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Semi-transparent overlay - reduced opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 
          ref={headingRef} 
          className="text-4xl md:text-6xl font-bold mb-6 transform translate-y-10"
          style={{ lineHeight: '1.3' }}
        >
          <div className="h-24 flex items-center justify-center">
            <span className={`inline-block ${loopNum % fullTexts.length === 1 ? 'gradient-text' : ''}`}>
              {text}
              <span className="animate-blink">|</span>
            </span>
          </div>
        </h1>
        
        <p 
          ref={descriptionRef}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 transform translate-y-10"
        >
          I'm a Data Science and Software Engineering student passionate about leveraging data and building robust applications. I combine technical expertise in both fields to create innovative solutions that solve real-world problems and drive meaningful change.
        </p>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row justify-center gap-6 transform translate-y-10"
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-border bg-primary hover:bg-secondary px-8 py-3 rounded-lg text-white font-medium transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </span>
          </a>
          
          <a 
            href="https://github.com/blue-jays" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-border bg-primary hover:bg-secondary px-8 py-3 rounded-lg text-white font-medium transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
