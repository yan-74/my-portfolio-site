import { useState } from "react";
import artworks from "../data/artworks";
import ImageLightbox from "./ImageLightbox";

export default function ArtList({ category }) {
  const list = artworks.filter((a) => a.type === category);
  const [selectedArt, setSelectedArt] = useState(null);

  if (!list.length) {
    return <div className="art-list empty">No artworks found.</div>;
  }

  return (
    <>
      <div className="art-list">
        {list.map((art, i) => (
          <div className="art-item" key={i}>
            {(art.image || (Array.isArray(art.images) && art.images.length > 0)) && (
              <button className="art-image art-image-button" onClick={() => setSelectedArt(art)}>
                <img src={Array.isArray(art.images) && art.images.length ? art.images[0] : art.image} alt={art.title} />
              </button>
            )}
            <h4>{art.title}</h4>
            {art.credit && (
              <div className="art-credit">
                <a href={art.credit} target="_blank" rel="noopener noreferrer">
                  Tutorial Credit
                </a>
              </div>
            )}
            <h4>Medium: {art.Medium}</h4>
          </div>
        ))}
      </div>

      <ImageLightbox
        isOpen={Boolean(selectedArt)}
        title={selectedArt?.title}
        image={selectedArt?.image}
        images={selectedArt?.images}
        description={selectedArt?.description}
        footer={selectedArt ? `Medium: ${selectedArt.Medium}` : ""}
        onClose={() => setSelectedArt(null)}
      />
    </>
  );
}
