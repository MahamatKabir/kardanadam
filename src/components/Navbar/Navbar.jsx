import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "#" },
  { id: 3, title: "About Us", path: "#" },
  { id: 4, title: "Our Team", path: "/" },
  { id: 5, title: "Contact Us", path: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400 to-blue-500 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <BsSnow className="text-white text-3xl animate-pulse" />
          <h1 className="font-extrabold text-3xl text-white tracking-wider drop-shadow-lg">
            Frosty Treats
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          {NavbarMenu.map((menu) => (
            <a
              key={menu.id}
              href={menu.path}
              className="relative text-white text-lg font-semibold hover:text-teal-100 transition duration-300"
            >
              {menu.title}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue- scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
            </a>
          ))}
        </div>
        <div className="-mr-2 flex lg:hidden">
          <button
            onClick={toggleMenu}
            className="bg-white p-2 rounded-full text-blue-500 shadow-md focus:outline-none transition duration-300 hover:bg-teal-300 hover:text-white"
          >
            {isMenuOpen ? (
              <FaTimes className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-teal-500 to-blue-600">
            {NavbarMenu.map((menu) => (
              <a
                key={menu.id}
                href={menu.path}
                className="block text-white text-lg font-semibold hover:bg-teal-700 px-3 py-2 rounded-md transition duration-300"
              >
                {menu.title}
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
