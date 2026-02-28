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
  const imageList = useMemo(() => {
    if (Array.isArray(images) && images.length) return images;
    if (image) return [image];
    return [];
  }, [images, image]);

  const [activeIndex, setActiveIndex] = useState(0);

  const hasVideo = Boolean(video);
  const hasMultiple = imageList.length > 1;
  const safeIndex = imageList.length ? Math.min(activeIndex, imageList.length - 1) : 0;
  const activeImage = imageList[safeIndex];

  const handleClose = useCallback(() => {
    setActiveIndex(0);
    onClose();
  }, [onClose]);

  const goPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + imageList.length) % imageList.length);
  }, [imageList.length]);

  const goNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % imageList.length);
  }, [imageList.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
      if (!hasVideo && hasMultiple && event.key === "ArrowLeft") {
        goPrevious();
      }
      if (!hasVideo && hasMultiple && event.key === "ArrowRight") {
        goNext();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [goNext, goPrevious, handleClose, hasMultiple, hasVideo, isOpen]);

  if (!isOpen || (!activeImage && !hasVideo)) return null;

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
          {hasVideo ? (
            <iframe
              className="lightbox-video"
              src={video}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={activeImage} alt={title} className="lightbox-image" />
          )}
          {!hasVideo && hasMultiple && (
            <button className="lightbox-nav lightbox-nav-left" onClick={goPrevious} aria-label="Previous image">
              ‹
            </button>
          )}
          {!hasVideo && hasMultiple && (
            <button className="lightbox-nav lightbox-nav-right" onClick={goNext} aria-label="Next image">
              ›
            </button>
          )}
        </div>
        <div className="lightbox-caption">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          {footer && <p className="lightbox-footer">{footer}</p>}
          {!hasVideo && hasMultiple && <p className="lightbox-counter">Image {safeIndex + 1} / {imageList.length}</p>}
        </div>
      </div>
    </div>
  );
}