const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-700 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-black">S</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">SAIT</span>
        </div>
        <p className="text-xs text-gray-400">
          © 2026 SAIT. All rights reserved for Zabdiel.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;