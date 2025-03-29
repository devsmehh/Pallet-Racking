export default function ContactForm() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#111111] p-10 md:p-[110px] text-white">
        {/* Left Section - Text & Form */}
        <div className="w-full md:w-[50%] flex flex-col gap-6 md:pr-10">
          {/* Heading */}
          <h1 className="text-[32px] md:text-[40px] font-extrabold leading-tight">
            DON’T WAIT – GET THE <br /> BEST SOLUTION NOW!
          </h1>
  
          {/* Description */}
          <p className="text-[16px] md:text-[18px] leading-[26px]">
            Why settle for mediocre when you can work with the{" "}
            <span className="font-semibold">#1 in Pallet Racks?</span> Time is
            money, and every day you wait is another day your warehouse isn’t
            operating at full capacity. Don’t waste weeks waiting on competitors
            when Direct Pallet Racking can design, quote, and install{" "}
            <span className="font-semibold">within a week.</span> Get your
            warehouse optimized with the fastest, most reliable solution on the
            market.
          </p>
  
          <p className="font-bold text-[16px]">
            Don’t Settle for Less, Get the Best Solution Now.
          </p>
  
          <p className="text-[16px]">
            Contact us today for <span className="font-bold">a free consultation</span>,
            and let’s start maximizing your warehouse efficiency right away. Your
            storage solutions are just one call away!
          </p>
  
          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="p-3 border border-white bg-transparent rounded-md"
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-3 border border-white bg-transparent rounded-md"
            />
            <input
              type="text"
              placeholder="Company"
              className="p-3 border border-white bg-transparent rounded-md"
            />
            <input
              type="text"
              placeholder="Job Title"
              className="p-3 border border-white bg-transparent rounded-md"
            />
            <input
              type="email"
              placeholder="Business Email"
              className="p-3 border border-white bg-transparent rounded-md col-span-1 md:col-span-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-white bg-transparent rounded-md col-span-1 md:col-span-2"
            />
          </div>
  
          {/* Checkbox */}
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="w-5 h-5 border border-white" />
            <p className="text-[16px]">
              I accept the{" "}
              <span className="underline cursor-pointer">Terms</span>
            </p>
          </div>
  
          {/* Submit Button */}
          <div className="mt-4 flex justify-start md:justify-center">
            <button className="bg-[#1493f5] text-white py-3 px-6 rounded-full text-[18px] font-semibold hover:bg-blue-600">
              Submit Request
            </button>
          </div>
        </div>
  
        {/* Right Section - Image (Hidden on Mobile & Tablet) */}
        <div className="hidden md:flex w-[50%] justify-center">
          <img
            src="https://c.animaapp.com/m8rd5drkdEZc31/img/image-21.png"
            alt="Warehouse"
            className="w-[372px] h-[830px] md:w-[90%] lg:w-[85%] xl:w-[80%] rounded-xl"
          />
        </div>
      </div>
    );
  }
  