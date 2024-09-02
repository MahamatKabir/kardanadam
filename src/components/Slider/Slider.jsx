import  { useState,useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, imageUrl: 'https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg',title:"Bienvenu a l'organisation IDA" },
    { id: 2, imageUrl: 'https://cdn.sefkateli.org.tr/upload/images/bagis/bagis-icerik/su-kuyusu-bagis-afrika-icerik.jpg', title:"Ensemle aidons nos fréres"},
    
  ];

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
// Changement automatique des images toutes les 1 seconde
useEffect(() => {
     const interval = setInterval(() => {
       nextSlide();
     }, 2000); // 1000ms = 1 seconde
 
     return () => clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté
   }, );

  return (
    <div className="relative w-full my-1 h-[700px] mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
        {slides[currentIndex].title}

        </h1>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full">
            <img
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              className="w-full h-100 object-cover transition-transform duration-700 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* Bouton gauche */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 p-2 bg-black bg-opacity-50 rounded-full 
        hover:scale-110 hover:-translate-x-1 transition duration-300 ease-in-out hover:blur-sm hover:rotate-3 
        hover:skew-x-6 hover:skew-y-3 active:rotate-y-180 animate-pulse"
      >
        <FaArrowAltCircleLeft className="text-blue-500" size={40} />
      </button>

      {/* Bouton droit */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 p-2 bg-black bg-opacity-50 rounded-full 
        hover:scale-110 hover:translate-x-1 transition duration-300 ease-in-out hover:blur-sm hover:rotate-3 
        hover:skew-x-6 hover:skew-y-3 active:rotate-y-180 animate-pulse"
      >
        <FaArrowAltCircleRight className="text-blue-500" size={40} />
      </button>
    </div>
  );
}
