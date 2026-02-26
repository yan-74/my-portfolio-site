import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (anchor navigation) let the browser/scroll-margin handle it
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''));
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
      return;
    }

    // For normal route changes (Links) scroll to top to avoid carrying over offsets
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
