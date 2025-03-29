export default function Div() {
    return (
      <div className="flex flex-col items-center justify-center bg-neutral-50 px-5 py-16 md:px-10">
        {/* Heading Section */}
        <div className="text-center max-w-2xl">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111] leading-[36px] md:leading-[44px]">
            WHAT YOU GET WITH <br className="hidden md:block" /> DIRECT PALLET
            RACKING
          </h2>
          <p className="text-base md:text-lg text-[#111] mt-4 leading-[24px] md:leading-[26px]">
            When you partner with us, you’re not just getting a product—you’re
            getting a full-service solution designed to elevate your warehouse
            operations. Here’s what you can expect:
          </p>
        </div>
  
        {/* Grid Section */}
        <div className="mt-12 w-full max-w-[1280px]">
          {/* First Row - 4 Columns on Desktop, 2 Columns on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {data.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-5 md:p-6 flex flex-col justify-start items-start min-h-[180px]"
              >
                <h3 className="text-base md:text-lg font-bold text-[#111]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#111] mt-2 leading-[22px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
  
          {/* Second Row - 3 Columns on Desktop, 2 Columns on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6 mx-auto max-w-[960px]">
            {data.slice(4, 7).map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-5 md:p-6 flex flex-col justify-start items-start min-h-[180px]"
              >
                <h3 className="text-base md:text-lg font-bold text-[#111]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#111] mt-2 leading-[22px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  // Data for the grid
  const data = [
    {
      title: "FAST QUOTES IN 24 HOURS",
      description:
        "No waiting weeks for a quote. Get your customized quote fast so you can start planning immediately.",
    },
    {
      title: "DETAILED DRAWINGS IN 24 HOURS",
      description:
        "Visualize your system with precise CAD drawings, delivered within a day.",
    },
    {
      title: "INSTALLATION IN A WEEK",
      description:
        "We’ll have your system installed and fully operational faster than anyone else in the industry.",
    },
    {
      title: "ALWAYS IN-STOCK PRODUCTS",
      description:
        "No more waiting on backorders. Our racking systems are always available and ready to go.",
    },
    {
      title: "CUSTOM SOLUTIONS FOR YOUR NEEDS",
      description:
        "Whether it’s pallet racks, cantilever, or dynamic systems, we tailor everything to fit your specific storage challenges.",
    },
    {
      title: "TOP-NOTCH SAFETY AND DURABILITY",
      description:
        "Our racking systems are built tough to withstand heavy loads and long-term use, ensuring maximum safety & performance.",
    },
    {
      title: "EXPERT GUIDANCE FROM START TO FINISH",
      description:
        "From consultation to installation, our team handles every detail with expertise and efficiency.",
    },
  ];
  