import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const showCSAnchors = /(^|\/)cs(\/|$)/.test(pathname);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cs">Computer Science</Link>
      {showCSAnchors && (
        <>
          <a href="#projects">Projects</a>
          <a href="#tech">Tech</a>
          <a href="#contact">Contact</a>
        </>
      )}
      <Link to="/art">Art</Link>
    </nav>
  );
}