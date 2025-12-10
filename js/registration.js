// registration.js

// --- 1. CONFIGURAÇÃO TAILWIND (Mapeando hardcodes) ---
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a413ec",
        "background-light": "#f7f6f8",
        "background-dark": "#1c1022",
        "accent-blue": "#3b82f6",

        // NOVAS CORES Mapeadas para Unificar o Design
        "form-bg": "#2b1933", // Substitui #2b1933 (Background dos inputs)
        "form-border": "#553267", // Substitui #553267 (Borda dos inputs)
        "surface-border": "#3c2348", // Substitui #3c2348 (Borda/Footer)
        "text-suttle": "#b792c9", // Substitui #b792c9 (Texto sutil/placeholders)
      },
      fontFamily: {
        display: ["Inter", "sans-serif"], // Fonte desta página
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      backgroundImage: {
        "cosmic-gradient":
          "radial-gradient(circle at 50% 0%, #2e1a47 0%, #1c1022 60%, #0d0612 100%)",
        "button-gradient": "linear-gradient(135deg, #3b82f6 0%, #a413ec 100%)",
      },
    },
  },
};

// --- 2. LÓGICA DO MENU TOGGLE (Padrão) ---
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-menu-btn");

  const toggleMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", toggleMenu);
  }

  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
