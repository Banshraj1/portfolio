import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function ScrollToSection() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

export default ScrollToSection;
