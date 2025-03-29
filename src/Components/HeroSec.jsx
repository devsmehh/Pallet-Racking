export default function HeroSec() {
    return (
      <div className="relative flex items-center justify-center h-[627px] w-full bg-cover bg-center px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(https://c.animaapp.com/m8rd5drkdEZc31/img/hero.png)`,
        }}
      >
        {/* Content Wrapper */}
        <div className="text-center max-w-[914px] flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-[46px] font-extrabold uppercase leading-tight tracking-tight">
            America’s Leading Warehouse <br className="hidden md:block" /> Storage Experts
          </h1>
  
          {/* Subheading */}
          <p className="text-white text-base md:text-lg mt-4 md:mt-6 font-normal leading-[22px]">
            Don’t Settle for Less. Get the Best Racking Solution Now
          </p>
  
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 md:mt-10">
            <button className="px-6 md:px-10 py-2.5 bg-[#1493f5] text-white text-sm md:text-base font-semibold rounded-full hover:bg-sky-600 transition">
              Contact Us
            </button>
  
            <button className="px-6 md:px-10 py-2.5 bg-white text-[#1493f5] text-sm md:text-base font-semibold border border-black rounded-full hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  