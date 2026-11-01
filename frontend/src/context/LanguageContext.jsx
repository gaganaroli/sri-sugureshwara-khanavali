import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact",

    welcome: "WELCOME TO OUR KHANAVALI",
    hotelName: "Sri Sugureshwara Khanavali",

    description:
      "Enjoy delicious traditional Karnataka food. Quality food, affordable prices and warm hospitality.",

    exploreMenu: "Explore Menu",
    callNow: "Call Now",

    welcomeTitle: "Welcome to Sri Sugureshwara Khanavali",
    popularMenu: "Our Popular Menu",
    viewMenu: "View Full Menu",

    address: "Near Sadappa Hotel",
    findLocation: "Find Our Location",
    whatsapp: "Chat on WhatsApp",
    directions: "Get Directions"
  },

  kn: {
    home: "ಮುಖಪುಟ",
    menu: "ಆಹಾರ ಪಟ್ಟಿ",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    contact: "ಸಂಪರ್ಕಿಸಿ",

    welcome: "ನಮ್ಮ ಖಾನಾವಳಿಗೆ ಸ್ವಾಗತ",
    hotelName: "ಶ್ರೀ ಸುಗುರೇಶ್ವರ ಖಾನಾವಳಿ",

    description:
      "ರುಚಿಕರವಾದ ಸಾಂಪ್ರದಾಯಿಕ ಕರ್ನಾಟಕ ಆಹಾರವನ್ನು ಸವಿಯಿರಿ. ಗುಣಮಟ್ಟದ ಆಹಾರ, ಕೈಗೆಟುಕುವ ಬೆಲೆಗಳು ಮತ್ತು ಆತ್ಮೀಯ ಆತಿಥ್ಯ.",

    exploreMenu: "ಆಹಾರ ಪಟ್ಟಿ ನೋಡಿ",
    callNow: "ಈಗ ಕರೆ ಮಾಡಿ",

    welcomeTitle: "ಶ್ರೀ ಸುಗುರೇಶ್ವರ ಖಾನಾವಳಿಗೆ ಸ್ವಾಗತ",
    popularMenu: "ನಮ್ಮ ಜನಪ್ರಿಯ ಆಹಾರಗಳು",
    viewMenu: "ಪೂರ್ಣ ಆಹಾರ ಪಟ್ಟಿ ನೋಡಿ",

    address: "ಸದಪ್ಪ ಹೋಟೆಲ್ ಹತ್ತಿರ",
    findLocation: "ನಮ್ಮ ಸ್ಥಳವನ್ನು ಹುಡುಕಿ",
    whatsapp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ",
    directions: "ದಾರಿ ಕಂಡುಕೊಳ್ಳಿ"
  }
};

export function LanguageProvider({ children }) {

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "kn" : "en";

    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}