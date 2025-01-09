const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Site Name</a>
      <ul>
        <li>
          <a href="/pricing" className="">Pricing</a>
        </li>
        <li>
          <a href="/about" className="">About</a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;