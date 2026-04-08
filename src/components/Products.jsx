import React from 'react';

const productList = [
  {
    id: 1,
    name: "GZ-VED RAS (20ml)",
    price: "Rs. 1,499.00",
    image: "https://greenzonenatureayurveda.com/cdn/shop/files/gz-ved-ras_400x.png",
    link: "https://greenzonenatureayurveda.com/products/gz-ved-ras-20ml"
  },
  {
    id: 2,
    name: "GZ- MUTRA VARDHAK CAP",
    price: "Rs. 1,499.00",
    image: "https://greenzonenatureayurveda.com/cdn/shop/files/gz-mutra-vardhak_400x.png",
    link: "https://greenzonenatureayurveda.com/products/gz-mutra-vardhak-cap"
  },
  {
    id: 3,
    name: "GZ-LX (Detox)",
    price: "Rs. 1,499.00",
    image: "https://greenzonenatureayurveda.com/cdn/shop/files/gz-lx_400x.png",
    link: "https://greenzonenatureayurveda.com/products/gz-lx-detox"
  },
  {
    id: 4,
    name: "GZ-VK KASHAYA",
    price: "Rs. 1,299.00",
    image: "https://greenzonenatureayurveda.com/cdn/shop/files/gz-vk_400x.png",
    link: "https://greenzonenatureayurveda.com/products/gz-vk-kashaya-varundi-kashaya"
  }
];

const Products = () => {
  return (
    <div className="py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Ayurvedic Products</h2>
          <p className="text-gray-500 mt-2">Carefully curated for your well-being</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productList.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center h-14 overflow-hidden">
                {product.name}
              </h3>
              <p className="text-[#005a42] font-bold text-xl mt-2">{product.price}</p>
              <button className="mt-6 w-full bg-white border-2 border-[#005a42] text-[#005a42] py-2 rounded-lg font-semibold hover:bg-[#005a42] hover:text-white transition duration-300">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
