import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Your Name</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="/" className="hover:text-gray-400">About</a></li>
            <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden bg-gray-800 text-center py-4">
            <li><a href="/" className="block py-2" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="/projects" className="block py-2" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
