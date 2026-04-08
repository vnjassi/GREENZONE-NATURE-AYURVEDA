import React from 'react';

const categories = [
  {
    title: "Kidney",
    image: "https://greenzonenatureayurveda.com/cdn/shop/files/kidney_400x.png",
    link: "#"
  },
  {
    title: "Liver",
    image: "https://greenzonenatureayurveda.com/cdn/shop/files/liver_400x.png",
    link: "#"
  },
  {
    title: "Sugar",
    image: "https://greenzonenatureayurveda.com/cdn/shop/files/suger_400x.png",
    link: "#"
  }
];

const Categories = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Specialized <span className="text-[#005a42]">Treatments</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 text-center bg-white">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{cat.title}</h3>
                <a 
                  href={cat.link} 
                  className="inline-block bg-[#005a42] text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
