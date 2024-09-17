import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll

const NavbarMenu = [
  { id: 1, title: "Home", link: "Home" },
  { id: 2, title: "Categories", link: "Products" },
  { id: 3, title: "Blog", link: "Blog" },
  { id: 4, title: "About", link: "About" },
  { id: 5, title: "Contact", link: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="text-white py-3 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <img src={Logo} alt="logo" className="max-w-[100px] invert" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase cursor-pointer"
                    spy={true}
                    offset={-70}
                  >
                    {item.title}
                  </ScrollLink>
                </UpdateFollower>
              </li>
            ))}

            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-14">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden z-50"> {/* Ensure z-index is high for the icon */}
          <MdMenu className="text-4xl cursor-pointer" onClick={toggleMobileMenu} />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-40 right-0 w-1/4 h-1/2 rounded-full bg-white z-40 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-end gap-6 py-4 px-6">
            {NavbarMenu.map((item) => (
              <li key={item.id} className="text-right">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "normal",
                  }}
                >
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="block w-full py-2 font-montserrat text-lg text-black hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  spy={true}
                  offset={-70}
                  onClick={() => setMobileMenuOpen(false)} // Close menu after click
                >
                  {item.title}
                </ScrollLink>
                </UpdateFollower>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
