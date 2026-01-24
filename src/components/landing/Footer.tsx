const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-cyan-900 via-cyan-950 to-black text-cyan-200 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <span className="text-3xl">🛡️</span>
            <span className="text-3xl">🏆</span>
            <span className="text-3xl">❤️</span>
          </div>

          {/* Copyright */}
          <p className="text-sm mb-2 text-cyan-100">
            © 2026 LearnWithLourdes.com — Empowering Faith-Driven Families to
          </p>
          <p className="text-sm mb-6 text-cyan-100">
            Travel Better, Earn More & Give Generously
          </p>
          
          <p className="text-xs text-cyan-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Results mentioned are not typical and individual results will vary. This is not a guarantee of income. Success requires consistent effort, dedication, and following the proven system.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="#"
              className="hover:text-gold-400 transition-colors duration-200 focus:ring-2 focus:ring-cyan-400 focus:outline-none rounded px-2 py-1"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <span className="text-cyan-600">•</span>
            <a
              href="#"
              className="hover:text-gold-400 transition-colors duration-200 focus:ring-2 focus:ring-cyan-400 focus:outline-none rounded px-2 py-1"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            <span className="text-cyan-600">•</span>
            <a
              href="#"
              className="hover:text-gold-400 transition-colors duration-200 focus:ring-2 focus:ring-cyan-400 focus:outline-none rounded px-2 py-1"
              rel="noopener noreferrer"
            >
              Income Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
