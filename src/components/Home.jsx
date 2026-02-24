import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-landing">
      <section id="home">
        <h1>Hi, I'm Yan Chi.</h1>
        <p>I'm a front-end developer passionate about combining my two interests: Computer Science and Art. Click on either portfolio below to explore what I've done!</p>
        <nav className="home-links">
          <Link to="/cs"><strong>Computer Science Portfolio</strong></Link>
          <span> · </span>
          <Link to="/art"><strong>Art Portfolio</strong></Link>
        </nav>
      </section>

      <section>
        <h3>About Me:</h3>
        <section className="about">
          <img src="assets/pfp.png" alt="Profile Picture"></img>
            <div className="about-text">
              <p className="bio">I'm a passionate front-end developer with a strong interest in both Computer Science and Art. My journey in web development began with a curiosity about how to bring creative ideas to life on the web. I specialize in creating responsive, user-friendly websites and applications using modern technologies like React, JavaScript, and CSS.</p