const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-secondary border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Md Nazmun Hasan Nafees. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
