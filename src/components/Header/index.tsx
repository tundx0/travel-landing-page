const Header = () => {
  return (
    <header className="py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-bold">
          <a href="#">Ja.</a>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#destinations" className="hover:text-indigo-600">
            Destinations
          </a>
          <a href="#services" className="hover:text-indigo-600">
            Services
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contact Us
          </a>
          <a href="#testimonials" className="hover:text-indigo-600">
            Testimonials
          </a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-700 hover:text-indigo-600">Login</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
            Sign up
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
