// Sample translations, replace with your actual translations
const translations = {
    en: {
      gymName: "Your Gym",
      home: "Home",
      classes: "Classes",
      schedule: "Schedule",
      contact: "Contact",
      joinUs: "Join Us Today!",
      motivationalText: "Transform your life with our fitness programs.",
      learnMore: "Learn More",
      featuredClasses: "Featured Classes",
      footerText: "© 2024 Your Gym. All rights reserved."
    },
    // Add translations for other languages here
    // Example:
    // es: {
    //   gymName: "Tu Gimnasio",
    //   home: "Inicio",
    //   ...
    // }
  };
  
  // Function to set language and apply translations
  function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }
  
  // Use this function to switch between languages
  // Example: setLanguage('es') for Spanish
  setLanguage('en');
  