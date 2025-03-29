export default function Footer() {
    return (
      <div className="flex flex-col items-center w-full px-6 md:px-16 py-10 md:py-20 bg-neutral-50">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row w-full max-w-[1312px] items-center justify-between gap-6">
          {/* Logo */}
          <img
            className="w-[180px] md:w-[226px] h-auto"
            alt="Company Logo"
            src="https://c.animaapp.com/m8rd5drkdEZc31/img/image-3-1.png"
          />
  
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 text-lg font-normal text-[#111111]">
            <a href="#" className="hover:underline">Solutions</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Resources</a>
          </div>
  
          {/* Contact Info */}
          <div className="text-lg font-bold text-[#111111]">
            888-979-9824
          </div>
        </div>
  
        {/* Divider */}
        <div className="w-full max-w-[1312px] h-px bg-[#111111] my-8"></div>
  
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row w-full max-w-[1312px] items-center justify-between text-sm text-[#111111] gap-4">
          {/* Copyright Text */}
          <p className="text-center md:text-left">
            © Company Name. All rights reserved.
          </p>
  
          {/* Policy Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    );
  }
  