import { useState } from "react";

export default function ServiceTab() {
  const tabs = [
    "Selective Pallet Racking",
    "Cantilever Racking",
    "Dynamic Racking",
    "Industrial Shelving",
    "Expert Installations",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="w-full bg-neutral-50">
      <div className="flex flex-col w-full items-center gap-16 pt-16 pb-20 px-6 lg:px-16">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] text-center">
          PRODUCTS & SERVICES
        </h2>

        {/* Tabs */}
        <div className="relative w-full max-w-[1290px]">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:justify-between mb-4">
            {tabs.map((text, index) => (
              <div
                key={index}
                className={`relative w-fit cursor-pointer text-sm sm:text-base md:text-lg tracking-[0] leading-[27px] whitespace-nowrap transition-all ${
                  activeIndex === index ? "text-[#1493f5]" : "text-[#111111] opacity-50"
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setActiveIndex(index)}
              >
                {text}
              </div>
            ))}
          </div>

          {/* Blue Line */}
          <div className="absolute bottom-0 w-full h-[3px]">
            <div className="w-full h-0.5 bg-[#d9d9d9]" />
            <div
              className="h-[3px] bg-[#1493f5] absolute transition-all duration-300"
              style={{
                width: `calc(100% / ${tabs.length})`,
                left: `calc(${(hoverIndex !== null ? hoverIndex : activeIndex)} * 100% / ${tabs.length})`,
              }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[100px] w-full max-w-[1290px]">
          {/* Text Content */}
          <div className="flex flex-col w-full lg:w-1/2 items-start gap-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
              {tabs[activeIndex].toUpperCase()}
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Tired of waiting weeks just for a quote?
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              At Direct Pallet Racking, we turn quotes around{" "}
              <span className="font-semibold">in a single day</span> and crank out{" "}
              <span className="font-semibold">detailed drawings within 24 hours.</span> While others
              make you wait, you get your racking installed{" "}
              <span className="font-semibold">within the week.</span>
            </p>
            <button className="mt-4 px-6 py-3 bg-[#1493f5] text-white rounded-full hover:bg-sky-600 transition">
              Get a Quote Today
            </button>
          </div>

          {/* Image Section */}
          <img
            className="w-full lg:w-1/2 rounded-lg object-cover"
            alt="Service"
            src="https://c.animaapp.com/m8rd5drkdEZc31/img/image-10.png"
          />
        </div>
      </div>
    </div>
  );
}
