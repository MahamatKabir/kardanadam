
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-8 items-center">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-teal-400" />
            <span>+90 543 304 4164</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-teal-400" />
            <span>mahamatkabir1@gmail.com</span>
          </div>
        </div>
        
        {/* Language Selection */}
        <div>
          <select className="bg-gray-700 text-white p-2 rounded-md">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
