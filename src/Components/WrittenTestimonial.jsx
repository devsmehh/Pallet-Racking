const testimonials = [
  {
    image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-15.png",
    text: "A customer here! Great service from Direct Pallet Racking. Fast and effective communication.",
    name: "Patrick, Operations Manager",
  },
  {
    image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-16.png",
    text: "Direct Pallet Racking delivered exactly what we needed—fast, efficient, and reliable. From quote to installation, their team exceeded our expectations and got our warehouse running smoothly in no time.",
    name: "Robbie, Branch Manager",
  },
  {
    image: "https://c.animaapp.com/m8rd5drkdEZc31/img/image-17.png",
    text: "Working with Direct Pallet Racking was a game changer for our warehouse. They provided a custom solution in record time, and their installation team had everything up and running within a week!",
    name: "Josh, Distribution Manager",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="px-4 py-12 sm:px-6 md:px-12 lg:px-24">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900">
        TESTIMONIALS
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 duration-300"
          >
            {/* Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-48 sm:h-56 object-cover"
            />

            {/* Content */}
            <div className="p-4 sm:p-6">
              {/* Star Ratings */}
              <div className="flex gap-1 text-yellow-500 mb-3">
                {Array(5)
                  .fill("⭐")
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Name */}
              <p className="mt-4 font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        className="mt-12 p-6 sm:p-8 md:p-10 text-center text-white rounded-2xl relative overflow-hidden"
        style={{
          backgroundImage: `url('https://c.animaapp.com/m8rd5drkdEZc31/img/image-14.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-xs sm:text-sm font-light tracking-wide">
            Need Assistance?
          </p>
          <h3 className="text-lg sm:text-2xl font-bold uppercase my-2 leading-snug tracking-wide">
            OUR WAREHOUSE SOLUTIONS <br /> SPECIALIST CAN HELP
          </h3>
          <button className="mt-4 w-full md:w-auto px-3 py-2 sm:px-6 sm:py-3  bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-md transition-all duration-300">
            Contact a Warehouse Solution Specialist
          </button>
          <p className="mt-3 text-blue-300 text-xs sm:text-sm">
            Or Call <span className="font-bold text-white">888-979-9824</span>
          </p>
        </div>
      </div>
    </div>
  );
}
