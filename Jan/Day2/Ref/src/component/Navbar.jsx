import { NavLink, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white">

        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Food<span className="text-red-500">Hotel</span>
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase">
          <li className="text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Pages</li>
          <li className="hover:text-red-500 cursor-pointer">Menu</li>
          <li className="hover:text-red-500 cursor-pointer">Reservation</li>
          <li className="hover:text-red-500 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <NavLink
          to="/foods"
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full text-sm"
        >
          Foods
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;
