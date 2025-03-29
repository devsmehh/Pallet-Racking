export default function WarehouseSolutions() {
    return (
      <section className="bg-white py-20 px-6 md:px-16 flex flex-col items-center text-center">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            COMPREHENSIVE WAREHOUSE SOLUTIONS
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            With a broad level of expertise, DPR can serve as the single point of contact for your warehouse project.
          </p>
        </div>
  
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={service.image} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mt-2 text-center max-w-xs">{service.description}</p>
              <button className="mt-6 px-6 py-2.5 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  const services = [
    {
      title: "WAREHOUSE DESIGN",
      description: "Expert Space-Planning Consultation for your specific needs.",
      image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-3.png",
    },
    {
      title: "RACKING & STORAGE",
      description: "A Broad Selection of Products for a Customized Storage System.",
      image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-4.png",
    },
    {
      title: "INSTALLATION",
      description: "Installation Services for every size project and repairs.",
      image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-5.png",
    },
  ];
  