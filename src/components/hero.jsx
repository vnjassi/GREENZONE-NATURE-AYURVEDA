import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-[#f4fbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Side: Product Image */}
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <div className="relative">
              {/* Green Decorative Circle behind image */}
              <div className="absolute -inset-4 bg-green-200 rounded-full blur-2xl opacity-40"></div>
              <img 
                src="https://greenzonenatureayurveda.com/cdn/shop/files/dr_hair_mantra_capsule_800x.png" 
                alt="Dr. Hair Mantra" 
                className="relative z-10 w-64 md:w-80 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Dr. <span className="text-[#005a42]">Hair Mantra</span> 
              <br />
              <span className="text-3xl italic font-normal text-gray-500">Capsules</span>
            </h1>

            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <span className="bg-white shadow-md text-[#005a42] font-bold h-8 w-8 rounded-full flex items-center justify-center border border-green-100">1</span>
                <p className="text-lg text-gray-700 font-medium">Repair Hair Follicles</p>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <span className="bg-white shadow-md text-[#005a42] font-bold h-8 w-8 rounded-full flex items-center justify-center border border-green-100">2</span>
                <p className="text-lg text-gray-700 font-medium">Promote Hair Nourishment</p>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <span className="bg-white shadow-md text-[#005a42] font-bold h-8 w-8 rounded-full flex items-center justify-center border border-green-100">3</span>
                <p className="text-lg text-gray-700 font-medium">Prevent Hairfall</p>
              </li>
            </ul>

            <div className="pt-6">
              <button className="bg-[#005a42] text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition duration-300 shadow-lg">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Graphic Element */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-green-100 to-transparent opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
