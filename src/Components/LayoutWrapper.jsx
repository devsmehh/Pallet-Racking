export default function LayoutWrapper() {
    return (
      <div className="bg-white flex flex-col items-center justify-center px-6 md:px-16 py-20 space-y-16 relative">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1172px] w-full mx-auto">
          {/* Image with hover effect */}
          <div className="group overflow-hidden rounded-2xl">
            <img
              className="w-[420.7px] h-[370.5px] object-cover rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
              alt="Warehouse"
              src="https://c.animaapp.com/m8rd5drkdEZc31/img/image.png"
            />
          </div>
  
          <div className="text-center md:text-left max-w-[600px]">
            <p className="text-[#1493f5] font-semibold text-lg">Speed</p>
            <h2 className="text-black text-[32px] md:text-[40px] font-bold leading-tight">
              NO DOWNTIME, JUST RESULTS!
            </h2>
            <p className="text-gray-700 text-lg leading-[25.2px] mt-4">
              With rapid design and installation, you’ll experience minimal downtime. 
              No delays, no stock issues—get your racking faster and avoid costly disruptions.
            </p>
          </div>
        </div>
  
        {/* Second Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-[1172px] w-full mx-auto">
          <div className="text-center md:text-left max-w-[600px]">
            <p className="text-[#1493f5] font-semibold text-lg">Experience</p>
            <h2 className="text-black text-[32px] md:text-[40px] font-bold leading-tight">
              OVER 1000 SUCCESSFUL PROJECTS
            </h2>
            <p className="text-gray-700 text-lg leading-[25.2px] mt-4">
              We’ve designed and installed storage solutions in over 1000 warehouses nationwide. 
              Proven expertise that delivers results, no matter the complexity of your project.
            </p>
          </div>
  
          {/* Image with hover effect */}
          <div className="group overflow-hidden rounded-2xl">
            <img
              className="w-[420.7px] h-[370.5px] object-cover rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
              alt="Aerial View"
              src="https://c.animaapp.com/m8rd5drkdEZc31/img/image-1.png"
            />
          </div>
        </div>
  
        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1172px] w-full mx-auto">
          {/* Image with hover effect */}
          <div className="group overflow-hidden rounded-2xl">
            <img
              className="w-[420.7px] h-[370.5px] object-cover rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
              alt="Project Planning"
              src="https://c.animaapp.com/m8rd5drkdEZc31/img/image-2.png"
            />
          </div>
  
          <div className="text-center md:text-left max-w-[600px]">
            <p className="text-[#1493f5] font-semibold text-lg">Expertise</p>
            <h2 className="text-black text-[32px] md:text-[40px] font-bold leading-tight">
              END TO END PROJECT MANAGEMENT
            </h2>
            <p className="text-gray-700 text-lg leading-[25.2px] mt-4">
              From concept to execution, we handle every step to ensure a seamless 
              project completion with no compliance issues or unnecessary complexity.
            </p>
          </div>
        </div>
      </div>
    );
  }
  