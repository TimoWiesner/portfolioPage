import { useState } from "react";

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
            <li><a href="/" className="hover:text-gray-400">Über mich</a></li>
            <li><a href="/projects" className="hover:text-gray-400">Projekte</a></li>
            <li><a href="/CV" className="hover:text-gray-400">Lebenslauf</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Kontakt</a></li>
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
            <li><a href="/" className="block py-2" onClick={() => setIsOpen(false)}>Über mich</a></li>
            <li><a href="/projects" className="block py-2" onClick={() => setIsOpen(false)}>Projekte</a></li>
            <li><a href="/CV" className="block py-2" onClick={() => setIsOpen(false)}>Lebenslauf</a></li>
            <li><a href="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Kontakt</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
