import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const slides = [
  { id: 1, imageUrl: 'https://via.placeholder.com/800x400?text=Slide+1', title: 'Slide 1' },
  { id: 2, imageUrl: 'https://via.placeholder.com/800x400?text=Slide+2', title: 'Slide 2' },
  { id: 3, imageUrl: 'https://via.placeholder.com/800x400?text=Slide+3', title: 'Slide 3' },
  { id: 4, imageUrl: 'https://via.placeholder.com/800x400?text=Slide+4', title: 'Slide 4' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-8">
      {/* Slider Container */}
      <div className="flex overflow-hidden relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-transform duration-500 ease-in-out w-full flex-shrink-0 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex justify-center items-center h-80 bg-white shadow-lg rounded-lg overflow-hidden mx-4">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                {slide.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-black hover:bg-opacity-70 transition duration-300"
      >
        <FaArrowAltCircleLeft size={40} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-black hover:bg-opacity-70 transition duration-300"
      >
        <FaArrowAltCircleRight size={40} />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
