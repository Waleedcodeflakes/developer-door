import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Home Page | FitMe Stylist",
  "/features": "Features | FitMe Stylist",
  "/faqs": "FAQs | FitMe Stylist",
  "/privacy-policy": "Privacy Policy | FitMe Stylist",
};

export function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "FitMe";
  }, [location.pathname]);

  return null; // invisible component to chnage title of the page
}