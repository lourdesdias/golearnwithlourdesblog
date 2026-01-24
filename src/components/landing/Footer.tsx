import { Shield, Award, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-teal-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <Shield className="w-8 h-8" />
            <Award className="w-8 h-8" />
            <Heart className="w-8 h-8" />
          </div>

          {/* Copyright */}
          <p className="text-sm mb-4">
            © 2026 LearnWithLourdes.com. All rights reserved.
          </p>
          <p className="text-xs text-teal-300 mb-6 max-w-2xl mx-auto">
            Results mentioned are not typical and individual results will vary. This is not a guarantee of income. Success requires consistent effort, dedication, and following the proven system.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-teal-500">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span className="text-teal-500">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
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
