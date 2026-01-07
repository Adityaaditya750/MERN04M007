import React from "react";

const foods = [
  {
    id: 1,
    name: "Veg Burger",
    price: "₹99",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 2,
    name: "Pizza",
    price: "₹199",
    img: "https://images.unsplash.com/photo-1548365328-8b849e6c7b1f",
  },
  {
    id: 3,
    name: "Biryani",
    price: "₹249",
    img: "https://images.unsplash.com/photo-1600628422019-6c2d7c1c8c8e",
  },
  {
    id: 4,
    name: "Pasta",
    price: "₹179",
    img: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8f2d",
  },
  {
    id: 5,
    name: "Sandwich",
    price: "₹89",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980",
  },
  {
    id: 6,
    name: "French Fries",
    price: "₹79",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
  },
];

function Foods() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">
          Our <span className="text-red-500">Foods</span>
        </h1>
        <p className="text-gray-600 mt-3">
          Fresh, tasty & delicious food just for you 🍽️
        </p>
      </div>

      {/* Food Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={food.img}
              alt={food.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">{food.name}</h2>
              <p className="text-red-500 font-bold mt-2">{food.price}</p>

              <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foods;
