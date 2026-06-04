import { useCallback, useEffect, useMemo, useState } from "react";

export default function ImageLightbox({
  isOpen,
  title,
  image,
  images,
  video,
  description,
  footer,
  onClose,
}) {
  const mediaList = useMemo(() => {
    const list = [];

    if (video) {
      list.push({ type: "video", src: video });
    }

    if (Array.isArray(images) && images.length) {
      list.push(...images.map((src) => ({ type: "image", src })));
    } else if (image) {
      list.push({ type: "image", src: image });
    }

    return list;
  }, [images, image, video]);

  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiple = mediaList.length > 1;
  const safeIndex = mediaList.length ? Math.min(activeIndex, mediaList.length - 1) : 0;
  const activeMedia = mediaList[safeIndex];

  const handleClose = useCallback(() => {
    setActiveIndex(0);
    onClose();
  }, [onClose]);

  const goPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + mediaList.length) % mediaList.length);
  }, [mediaList.length]);

  const goNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % mediaList.length);
  }, [mediaList.length]);

  useEffect(() => {
    if (!isOpen) return;

    setActiveIndex(0);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
      if (hasMultiple && event.key === "ArrowLeft") {
        goPrevious();
      }
      if (hasMultiple && event.key === "ArrowRight") {
        goNext();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [goNext, goPrevious, handleClose, hasMultiple, isOpen]);

  if (!isOpen || !activeMedia) return null;

  return (
    <div className="lightbox-overlay" onClick={handleClose} role="presentation">
      <div
        className="lightbox-window"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button className="lightbox-close" onClick={handleClose} aria-label="Close image view">
          ×
        </button>
        <div className="lightbox-image-wrap">
          {activeMedia.type === "video" ? (
            <iframe
              className="lightbox-video"
              src={activeMedia.src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={activeMedia.src} alt={title} className="lightbox-image" />
          )}
          {hasMultiple && (
            <button className="lightbox-nav lightbox-nav-left" onClick={goPrevious} aria-label="Previous image">
              ‹
            </button>
          )}
          {hasMultiple && (
            <button className="lightbox-nav lightbox-nav-right" onClick={goNext} aria-label="Next image">
              ›
            </button>
          )}
        </div>
        <div className="lightbox-caption">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          {footer && <p className="lightbox-footer">{footer}</p>}
          {hasMultiple && <p className="lightbox-counter">Item {safeIndex + 1} / {mediaList.length}</p>}
        </div>
      </div>
    </div>
  );
}