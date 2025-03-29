export default function DHome() {
  return (
    <div className="bg-[#1493f5] flex flex-col items-center justify-center py-8 min-h-[200px] w-full">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-[1172px] w-full gap-6 px-4">
        {/* Image Section */}
        <img
          className="w-[260px] md:w-[280px] h-auto object-contain transform transition-transform duration-300 hover:scale-105"
          alt="Delivery Truck"
          src="https://c.animaapp.com/m8rd5drkdEZc31/img/image-6.png"
        />

        {/* Text Section */}
        <p className="text-white text-[28px] md:text-[38px] font-bold leading-tight text-center md:text-left max-w-[480px]">
          NEXT DAY DELIVERY AT THE SPEED YOU NEED
        </p>
      </div>
    </div>
  );
}
