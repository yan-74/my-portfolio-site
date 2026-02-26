import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const showCSAnchors = /(^|\/)cs(\/|$)/.test(pathname);
  const showArtAnchors = /(^|\/)art(\/|$)/.test(pathname);

  return (
    <nav>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cs">Computer Science</Link>
        <Link to="/art">Art</Link>
        {showCSAnchors && (
          <>
            <p>|</p>
            <a href="#projects">Projects</a>
            <a href="#tech">Tech</a>
            <a href="#contact">Contact</a>
          </>
        )}
        {showArtAnchors && (
          <>
            <p>|</p>
            <a href="#digital">Digital</a>
            <a href="#traditional">Traditional</a>
            <a href="#3d">3D Modeling & Animation</a>
          </>
        )}
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/"><img src="assets/socials/insta.png"></img></a>
        <a href="https://www.twitter.com/"><img src="assets/socials/twitter.png"></img></a>
        <a href="mailto:ngyanchi11@gmail.com" target="_blank"><img src="assets/socials/email.png"></img></a>
      </div>
    </nav>
  );
}