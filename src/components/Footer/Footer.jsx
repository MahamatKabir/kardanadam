import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">KardanAdam</h2>
            <p className="text-gray-200 text-lg">
              Fournisseur de glaces et boissons fraîches de qualité supérieure.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-3">Liens rapides</h3>
              <ul>
                <li><a href="#" className="hover:underline">Accueil</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">À propos</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Contactez-nous</h3>
              <ul>
                <li><a href="mailto:info@kardanadam.com" className="hover:underline">info@kardanadam.com</a></li>
                <li><a href="tel:+1234567890" className="hover:underline">+123 456 7890</a></li>
                <li><a href="#" className="hover:underline">123 Rue des Glaces, Paris</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} KardanAdam. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
