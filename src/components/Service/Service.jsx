import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import bardak from "../../assets/bardak.jpg";
import kucuk from "../../assets/kucuk.jpg";
import kg from "../../assets/kg.jpg";
import yeniUrun from "../../assets/kg.jpg"; // Nouvelle image

const ServicesData = [
  {
    id: 1,
    img: kg,
    name: "4 kg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: kucuk,
    name: "Küçük 650g",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: bardak,
    name: "Bardak",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: yeniUrun,
    name: "Yeni Ürün",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "700",
  },
];

const Services = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="container mx-auto px-20 ">
        <Slider {...settings}>
          {ServicesData.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="p-5 h-[500px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="h-60 w-full overflow-hidden rounded-t-lg">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl font-semibold mb-2">{service.name}</h1>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
