import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#navbar-menu") && !event.target.closest("#menu-toggle")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="w-full p-6 bg-neutral-900 flex justify-between items-center font-['Inter'] relative">
      {/* Phone Number */}
      <div className="text-white text-lg font-bold">888-979-9824</div>

      {/* Toggle Icon for Mobile */}
      <div
        id="menu-toggle"
        className="lg:hidden text-white text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>

      {/* Navigation Menu */}
      <div
        id="navbar-menu"
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static top-0 left-0 w-[75%] sm:w-[60%] md:w-[50%] lg:w-auto h-full lg:h-auto bg-neutral-900 lg:bg-transparent p-6 lg:p-0 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-5 transition-transform duration-300 ease-in-out z-50 shadow-lg lg:shadow-none`}
      >
        {["Solutions", "Products", "Services", "Resources"].map((item) => (
          <div
            key={item}
            className="text-white text-lg font-normal leading-snug cursor-pointer hover:text-sky-400 transition-colors"
          >
            {item}
          </div>
        ))}

        {/* Button for Mobile */}
        <button className="mt-5 px-6 py-2 bg-sky-500 rounded-full text-white text-lg font-semibold transition-colors lg:hidden hover:bg-sky-600 active:bg-sky-700 visited:bg-sky-500">
          Get a Quote
        </button>
      </div>

      {/* Button for Desktop */}
      <button className="hidden lg:block px-6 py-2 bg-sky-500 rounded-full text-white text-lg font-semibold transition-colors hover:bg-sky-600 active:bg-sky-700 visited:bg-sky-500">
        Get a Quote
      </button>
    </div>
  );
}
