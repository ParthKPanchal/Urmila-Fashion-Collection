import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white/90 backdrop-blur-md inset-shadow-sm inset-shadow-gray-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <p>© 2026 Jagruti Tiffin Services</p>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Home
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
          </div>
        </div>
      </div>
    </footer>
  );
  //   <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
  //     <span className="text-sm text-body sm:text-center">
  //       © 2023{" "}
  //       <a href="https://flowbite.com/" className="hover:underline">
  //         Jagruti Tiffin Services
  //       </a>
  //       . All Rights Reserved.
  //     </span>
  //     <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
  //       <li>
  //         <a href="#" className="hover:underline me-4 md:me-6">
  //           About
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" className="hover:underline me-4 md:me-6">
  //           Privacy Policy
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" className="hover:underline me-4 md:me-6">
  //           Licensing
  //         </a>
  //       </li>
  //       <li>
  //         <a href="#" className="hover:underline">
  //           Contact
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // </footer>;
}
