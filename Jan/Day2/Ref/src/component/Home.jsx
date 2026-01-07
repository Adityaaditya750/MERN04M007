import Navbar from "./Navbar";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full">

      {/* Background Image */}
      <img
        src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg"
        alt="Food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

        {/* Left Content */}
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-5xl font-bold">
            Welcome To <span className="text-red-500">FoodBazar</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Morbi sed porta diam. Sed pulvinar cursus lorem,
            consectetur iaculis dolor scelerisque non.
            Praesent bibendum mauris risus.
          </p>

          <button
            onClick={() => navigate("/foods")}
            className="flex items-center gap-3 bg-white text-black px-6 py-3 font-medium hover:bg-red-500 hover:text-white transition"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Reservation
          </button>
        </div>

        {/* Floating Food Card */}
        {/* <div className="hidden md:block absolute bottom-16 right-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Dish"
            className="w-72 h-48 object-cover"
          />
        </div> */}

      </div>
    </div>
  );
}

export default Home;
