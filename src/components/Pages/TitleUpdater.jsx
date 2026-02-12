import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Home Page | Developer Door ",
  "/features": "Features | Developer Door ",
  "/faqs": "FAQs | Developer Door ",
  "/privacy-policy": "Privacy Policy | Developer Door ",
};

export function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "Developer Door";
  }, [location.pathname]);

  return null; // invisible component to chnage title of the page
}