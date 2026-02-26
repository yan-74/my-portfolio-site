import '../styles/gallery.css';
import ArtList from './ArtList';

export default function ArtLanding() {
  return (
    <div className="art-landing">
      <section id="home">
        <h1>Artworks</h1>
        <p>
          Welcome! Here's a collection of my digital and traditional artwork as an artist and illustrator. I'm currently busy learning 3D modeling and animation, obsessing over graphic design, and looking to improve my art skills every day!
        </p>
      </section>

      <section className="gallery full-bleed">
        <section id="digital">
          <h2>Digital</h2>
          <ArtList category="digital" />
        </section>
        <section id="traditional">
          <h2>Traditional</h2>
          <ArtList category="traditional" />
        </section>
        <section id="3d">
          <h2>3D Modeling & Animation</h2>
          <ArtList category="3d" />
        </section>
      </section>
    </div>
  );
}
