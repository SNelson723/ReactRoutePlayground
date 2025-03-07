import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-screen flex bg-gradient-to-t from-slate-800 to-slate-400 text-white justify-center gap-12 py-2">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/youtube">YouTube</NavLink>
    </nav>
  );
};

export default Navbar;
