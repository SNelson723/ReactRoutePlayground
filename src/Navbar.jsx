import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-screen flex bg-slate-900 text-white">
      <div to="/home" className="site-title">Site Name</div>
      <ul>
        <NavLink to="/home">Home</NavLink>
        <NavLink to='/pricing'>Pricing</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to="/youtube">YouTube</NavLink>
      </ul>
    </nav>
  )
};

export default Navbar;