import { useState } from "react";

export default function ServicesToggle() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-19.png",
      title: "ASRS",
    },
    {
      image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-20.png",
      title: "INNOVATIVE AUTOMATED SOLUTIONS",
      description:
        "Our suite of automated storage and retrieval systems (ASRS) and other cutting-edge technologies are designed to take your material handling to the next level.",
    },
    {
      image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-18.png",
      title: "MOBILE RACKING SYSTEMS",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#1493f5] py-20 px-6 md:px-16 lg:px-24">
      {/* Section Title */}
      <h2 className="text-white text-3xl md:text-4xl lg:text-[46px] font-bold text-center md:text-left">
        EXPLORE MORE SOLUTIONS
      </h2>

      {/* Cards Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-7">
        {/* Responsive Slider */}
        <div className="w-full md:hidden">
          <div
            className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%), url(${slides[currentSlide].image})`,
            }}
          >
            <p className="absolute bottom-6 left-6 text-white text-xl md:text-2xl lg:text-[40px] font-bold">
              {slides[currentSlide].title}
            </p>
            {slides[currentSlide].description && (
              <p className="absolute bottom-24 left-6 text-white text-sm md:text-base lg:text-lg">
                {slides[currentSlide].description}
              </p>
            )}
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-7">
          {/* Card 1 */}
          <div
            className="relative w-full md:w-[360px] lg:w-[454px] h-[500px] rounded-2xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%), url(${slides[0].image})`,
            }}
          >
            <p className="absolute bottom-6 left-6 text-white text-xl md:text-2xl lg:text-[40px] font-bold">
              {slides[0].title}
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-full md:w-[360px] lg:w-[454px] h-[500px] rounded-2xl overflow-hidden bg-cover bg-center flex flex-col justify-end p-6"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%), url(${slides[1].image})`,
            }}
          >
            <h3 className="text-white text-xl md:text-2xl lg:text-[30px] font-bold">
              {slides[1].title}
            </h3>
            <p className="text-white text-sm md:text-base lg:text-lg mt-2">
              {slides[1].description}
            </p>
            <button className="mt-4 bg-white text-black font-semibold text-lg px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>

          {/* Card 3 */}
          <div
            className="relative w-full md:w-[360px] lg:w-[454px] h-[500px] rounded-2xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%), url(${slides[2].image})`,
            }}
          >
            <p className="absolute bottom-6 left-6 text-white text-xl md:text-2xl lg:text-[40px] font-bold">
              {slides[2].title}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition"
        >
          <img
            src="https://c.animaapp.com/m8rd5drkdEZc31/img/arrow.svg"
            className="w-6 h-6 "
            alt="Previous"
          />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition"
        >
          <img
            src="https://c.animaapp.com/m8rd5drkdEZc31/img/arrow-1.svg"
            className="w-6 h-6"
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
}
