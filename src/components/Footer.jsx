const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 sm:py-6 z-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Samson Tejas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
