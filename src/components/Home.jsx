import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-landing">
      <header>
        <h1>Welcome to my portfolio</h1>
        <p>Choose a side to explore:</p>
        <nav className="home-links">
          <Link to="/cs">Computer Science Portfolio</Link>
          <span> · </span>
          <Link to="/art">Art Portfolio</Link>
        </nav>
      </header>

      <section>
        <p>Short intro or featured item could go here.</p>
      </section>
    </div>
  );
}
