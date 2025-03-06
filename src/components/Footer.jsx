import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (!isHomePage) {
      // If not on home page, navigate to home with hash
      navigate(`/#${sectionId}`);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-white p-1">
                <img src="/img/logo.png" alt="Maa Karma Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-bold text-white">Maa Karmaa Global Engineering LLP</span>
            </Link>
            <p className="mt-4 text-sm">
              Leading the way in industrial construction and infrastructure development with expertise in silos, chimneys, and bridge piers.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/maakarma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/maakarma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleSectionClick(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSectionClick(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/Company Profile Maa Karmaa 21-02-2025.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Company Profile</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Expertise</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Industrial Silos
              </li>
              <li className="text-gray-300">
                Chimney Construction
              </li>
              <li className="text-gray-300">
                Bridge Piers
              </li>
              <li className="text-gray-300">
                Water Management
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-white" />
                <a 
                  href="https://maps.app.goo.gl/AMbmFBaoS3fVLmVb7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  C/B/1, Malhar Sankul Apt., Agra Road, Kalyan (w) 421301, Dist. Thane, Maharashtra, India
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-white" />
                <div>
                  <a href="tel:+917909028914" className="hover:text-white transition-colors">
                    +91 7909028914
                  </a><br />
                  <a href="tel:+919967173303" className="hover:text-white transition-colors">
                    +91 9967173303
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-white" />
                <a 
                  href="mailto:info@slipformsystems.in" 
                  className="hover:text-white transition-colors"
                >
                  info@slipformsystems.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Maa Karma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 