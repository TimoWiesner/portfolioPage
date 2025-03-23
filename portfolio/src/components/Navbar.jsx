import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Timo Wiesner</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-400">Über mich</Link></li>
          <li><Link to="/CV" className="hover:text-gray-400">Lebenslauf</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Kontakt</Link></li>
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
            <li><Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Über mich</Link></li>
            <li><Link to="/CV" className="block py-2" onClick={() => setIsOpen(false)}>Lebenslauf</Link></li>
            <li><Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Kontakt</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
