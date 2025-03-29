export default function SampleNumber() {
    return (
      <div className="flex flex-col items-center w-full gap-12 px-6 md:px-16 py-20 bg-[#1493f5]">
        {/* Heading & Stats Section */}
        <div className="w-full max-w-[977px] flex flex-col items-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
            TRUSTED INTEGRATOR FOR LEADING MANUFACTURERS
          </h2>
  
          {/* Numbers Section */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-10">
            {[
              { value: "1,000+", label: "Details Drawings" },
              { value: "1,500+", label: "Projects Delivered" },
              { value: "48+", label: "States Covered" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center w-[130px] sm:w-[180px]">
                <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                  {item.value}
                </span>
                <p className="text-white text-sm sm:text-base text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Shop Online Section */}
        <div className="relative w-full max-w-[1158px] flex flex-col items-center rounded-2xl overflow-hidden p-8 md:p-16">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://c.animaapp.com/m8rd5drkdEZc31/img/image-11.png)",
            }}
          />
  
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
  
          {/* Content */}
          <div className="relative flex flex-col items-center gap-6 text-center">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              SHOP ONLINE WITH DIRECT PALLET RACKING
            </h3>
            <p className="text-white text-sm sm:text-base md:text-lg">
              Enjoy fast shipping on racking along with other parts and supplies
            </p>
  
            {/* Shop Now Button */}
            <button className="px-6 py-3 bg-[#1493f5] text-white rounded-full text-lg font-semibold hover:bg-sky-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  