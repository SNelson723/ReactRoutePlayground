import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">Site Name</Link>
      <ul>
        <CustomLink to='/pricing'>Pricing</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
      </ul>
    </nav>
  )
};

const CustomLink = ({ to, children, ...props }) => {
  /**
   * useResolvedPath allows you to take a relative/absolute path
   * and combines it with the current path you're on and gives
   * you the actual full path you're accessing
   *
   */
  const resolvedPath = useResolvedPath(to);

  /**
   * useMatch just matches an input path with the path you're currently
   * on and determines what the window's location is
   */
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  return (
    <li className={isActive ? 'active': ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;