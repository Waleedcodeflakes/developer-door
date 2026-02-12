import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Home Page | Developer Door Stylist",
  "/features": "Features | Developer Door Stylist",
  "/faqs": "FAQs | Developer Door Stylist",
  "/privacy-policy": "Privacy Policy | Developer Door Stylist",
};

export function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "Developer Door";
  }, [location.pathname]);

  return null; // invisible component to chnage title of the page
}