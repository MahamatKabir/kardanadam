import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHandsHelping, FaWater, FaHome, FaHospital, FaSchool } from 'react-icons/fa';

// Arrow Button Component with PropTypes
const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'}
    p-2 bg-black bg-opacity-50 rounded-full hover:scale-110 hover:translate-x-1 transition duration-300 ease-in-out 
    hover:blur-sm hover:rotate-3 hover:skew-x-6 hover:skew-y-3 active:rotate-y-180 animate-pulse`}
  >
    {direction === 'left' ? (
      <FaArrowAltCircleLeft className="text-blue-500" size={40} />
    ) : (
      <FaArrowAltCircleRight className="text-blue-500" size={40} />
    )}
  </button>
);

// Add prop-types validation for ArrowButton component
ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired, // Validates that direction is either 'left' or 'right'
  onClick: PropTypes.func.isRequired, // Validates that onClick is a function
};

// Slide Component
const Slide = ({ slide }) => (
  <div className="min-w-full">
    <img
      src={slide.imageUrl}
      alt={`Slide ${slide.id}`}
      className="w-full h-100 object-cover transition-transform duration-700 ease-in-out hover:scale-105"
    />
  </div>
);

// Add prop-types validation for Slide component
Slide.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// List Item Component
const ListItem = ({ icon: Icon, label, index, currentIndex, handleClick }) => (
  <li
    onClick={() => handleClick(index)}
    className={`cursor-pointer flex flex-col items-center space-x-2 p-2 rounded-lg ${
      currentIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'
    }`}
  >
    <Icon className="text-2xl" />
    <span className="font-normal text-center w-full  ">{label}</span>
  </li>
);

// Add prop-types validation for ListItem component
ListItem.propTypes = {
  icon: PropTypes.elementType.isRequired, // Validates that the icon is a component (like FaWater, etc.)
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    { id: 1, imageUrl: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg', title: "Bienvenu a l'organisation IDA" },
    { id: 2, imageUrl: 'https://cdn.sefkateli.org.tr/upload/images/bagis/bagis-icerik/su-kuyusu-bagis-afrika-icerik.jpg', title: "Ensemble aidons nos frères" },
    { id: 3, imageUrl: 'https://example.com/slide3.jpg', title: "Construire des maisons" },
    { id: 4, imageUrl: 'https://cdn.sefkateli.org.tr/upload/images/bagis/bagis-icerik/su-kuyusu-bagis-afrika-icerik.jpg', title: "Établir des hôpitaux" },
    { id: 5, imageUrl: 'https://example.com/slide5.jpg', title: "Soutenir les écoles" },
  ];

  const listItems = [
    { icon: FaHandsHelping, label: "Aidons Ensemble" },
    { icon: FaWater, label: "Forage deau" },
    { icon: FaHome, label: "Construire des maisons" },
    { icon: FaHospital, label: "Établir des hôpitaux" },
    { icon: FaSchool, label: "Soutenir les écoles" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const handleListItemClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <div className="relative w-full my-1 h-[600px] mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
          {slides[currentIndex].title}
        </h1>
      </div>

      {/* Slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </div>

      {/* Arrow Buttons */}
      <ArrowButton direction="left" onClick={prevSlide} />
      <ArrowButton direction="right" onClick={nextSlide} />

      {/* List Section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 p-4 rounded-lg shadow-lg">
        <ul className="flex space-x-8 items-center">
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              icon={item.icon}
              label={item.label}
              index={index}
              currentIndex={currentIndex}
              handleClick={handleListItemClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
