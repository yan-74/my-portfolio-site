import ProjectList from "./ProjectList";
import Contact from "./Contact";

export default function CSLanding() {
  return (
    <div className="cs-landing">
      <section id="home">
        <h1>Computer Science Portfolio</h1>
        <p>
          I’m a <strong>Computer Science student and front-end developer </strong>
          interested in building clean, user-focused web applications. I am familiar with
          tools like <strong>React, Node.js, JavaScript, and Python</strong>. I am dedicated
          and flexible, <strong>excelling in team environments</strong>, and communication is one of my strengths.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ProjectList />
      </section>

      <section id="tech">
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Languages:</strong> Python, C#, HTML/CSS, JavaScript, Java, Kotlin, SQL</li>
          <li><strong>Frameworks:</strong> Node.js, React, Flask, .NET</li>
          <li><strong>Tools:</strong> Git, Docker, Linux</li>
        </ul>
      </section>

      <Contact />
    </div>
  );
}