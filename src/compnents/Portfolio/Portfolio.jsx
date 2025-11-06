import React, { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    category: "Packaging",
    image: "https://preview.colorlib.com/theme/orbit/images/work_7.jpg",
  },
  {
    id: 2,
    category: "Typography",
    image: "https://preview.colorlib.com/theme/orbit/images/work_4.jpg",
    title: "House Design",
  },
  {
    id: 3,
    category: "Mockup",
    image: "https://preview.colorlib.com/theme/orbit/images/work_6.jpg",
  },
  {
    id: 4,
    category: "Photography",
    image: "https://preview.colorlib.com/theme/orbit/images/work_1.jpg",
  },
  {
    id: 5,
    category: "Packaging",
    image: "https://preview.colorlib.com/theme/orbit/images/work_5.jpg",
  },
  {
    id: 6,
    category: "Mockup",
    image: "https://preview.colorlib.com/theme/orbit/images/work_2.jpg",
  },
];

const categories = ["All", "Packaging", "Mockup", "Typography", "Photography"];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filteredItems =  active === "All"  ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="py-16 px-4 max-w-6xl mx-auto ">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center mb-6">
        My <span className="text-green-600">Portfolio</span>
      </h1>

      {/* Categories */}
      <div className="flex justify-center space-x-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm md:text-base ${
              active === cat
                ? "text-green-600 font-semibold"
                : "text-gray-500 hover:text-green-500"
            } transition-all`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-md shadow-sm"
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay hover effect */}
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white">
              <h3 className="text-lg font-semibold">
                {item.title || item.category}
              </h3>
              <p className="text-sm mt-1">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
