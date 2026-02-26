import artworks from "../data/artworks";

export default function ArtList({ category }) {
  const list = artworks.filter((a) => a.type === category);

  if (!list.length) {
    return <div className="art-list empty">No artworks found.</div>;
  }

  return (
    <div className="art-list">
      {list.map((art, i) => (
        <div className="art-item" key={i}>
          {art.image && (
            <div className="art-image">
              <img src={art.image} alt={art.title} />
            </div>
          )}
          <h4>{art.title}</h4>
          <h4>Medium: {art.Medium}</h4>
        </div>
      ))}
    </div>
  );
}
