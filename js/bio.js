// bio.js

// --- 1. CONFIGURAÇÃO DO TAILWIND ---
// Deve ser carregada antes do script CDN do Tailwind.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a413ec",
        secondary: "#3c2348",
        "background-light": "#f7f6f8",
        "background-dark": "#0f0f12",
        "surface-dark": "#1c1122",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      backgroundImage: {
        cosmic: "radial-gradient(circle at 50% 0%, #2a1b3d 0%, #0f0f12 70%)",
        "cosmic-accent": "linear-gradient(to right, #1e3a8a, #a413ec)",
      },
    },
  },
};

// --- 2. LÓGICA DO MENU MOBILE ---
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-menu-btn");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
  };

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", toggleMenu);
  }

  // Fecha o menu se clicar em algum link dentro dele
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});
