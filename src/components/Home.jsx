import { Link } from 'react-router-dom';
import projects from '../data/projects';
import artworks from '../data/artworks';

export default function Home() {
  const projectItems = projects.map((project) => project.title);
  const artworkItems = artworks.map((artwork) => artwork.title);

  return (
    <div className="home-landing">
      <section id="home">
        <h1>Hi, I'm Yan Chi.</h1>
        <p>I'm a front-end developer passionate about combining my two interests: Computer Science and Art. Click on either portfolio below to explore what I've done!</p>
        <nav className="home-links">
          <Link to="/cs"><strong>Computer Science Works</strong></Link>
          <span> · </span>
          <Link to="/art"><strong>Artworks</strong></Link>
        </nav>
      </section>

      <section>
        <section className="about">
          <h3 className="about-title">About Me</h3>
          <div className="about-body">
            <img src='assets/pfp.png' alt="Profile Picture" id="pfp"/>
            <div className="about-text">
              <p className="name"><strong>Yan Chi Ng</strong></p>
              <p className="cnName"><strong>伍恩賜</strong><span></span>
                <img className="flag flag--hk" src='assets/hk.png' alt="HK flag" />
              </p>
              <p className="bio">Hi! I'm a developer and artist currently studying Computer Science Technology at Dawson College. I...</p>
              <ul>
                <li>have a strong interest in front-end development and UI/UX design,</li>
                <li>enjoy creating projects that combine my technical skills with my artistic creativity,</li>
                <li>and thrive in collaborative team environments where I can learn and adapt new technologies quickly!</li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section className="portfolio-index" id="portfolio-items">
        <h3 className="portfolio-index-title">Portfolio Items</h3>
        <p className="portfolio-index-intro">An index of work shown on this site:</p>

        <div className="portfolio-index-grid">
          <div className="portfolio-index-card">
            <h4>Portfolio Site</h4>
            <ul>
              <li>
                <Link to="/">Personal Portfolio Website (this site)</Link>
              </li>
            </ul>
          </div>

          <div className="portfolio-index-card">
            <h4>Computer Science Projects</h4>
            <ul>
              {projectItems.map((item) => (
                <li key={item}>
                  <Link to="/cs">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="portfolio-index-card">
            <h4>Artworks</h4>
            <ul>
              {artworkItems.map((item) => (
                <li key={item}>
                  <Link to="/art">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
