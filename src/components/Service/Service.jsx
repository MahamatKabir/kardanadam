import bardak from "../../assets/bardak.jpg";
import kucuk from "../../assets/kucuk.jpg";
import kg from "../../assets/kg.jpg";

const ServicesData = [
  {
    id: 1,
    img: kg,
    name: "4 kg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: kucuk,
    name: "Küçük 650g",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: bardak,
    name: "Bardak",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-500">
        <div className="container py-10">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-teal-400 hover:text-white relative shadow-lg transition duration-500 transform group max-w-[300px] overflow-hidden"
              >
                <div className="h-[350px] w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-2xl font-semibold">{service.name}</h1>
                  <p className="text-gray-600 group-hover:text-white transition duration-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
