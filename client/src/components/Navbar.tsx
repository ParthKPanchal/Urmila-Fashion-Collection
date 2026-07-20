import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNabar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold text-green-700">
            <img
              src={Logo}
              alt="Jagruti Tiffin Service"
              className="h-20 w-20 object-cover"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 transition"
            >
              About
            </Link>

            <Link
              to="/products"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Product
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Login
            </Link>
          </div>

          <button className="md:hidden" onClick={toogleNabar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-5 py-6">
            <Link to="/" onClick={toogleNabar}>
              Home
            </Link>

            <Link to="/about" onClick={toogleNabar}>
              About us
            </Link>

            <Link to="/products" onClick={toogleNabar}>
              Product
            </Link>

            <Link to="/contact" onClick={toogleNabar}>
              Contact
            </Link>

            <Link to="/login" onClick={toogleNabar}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
