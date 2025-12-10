// login.js

// --- CONFIGURAÇÃO TAILWIND PADRONIZADA ---
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Cores Padronizadas (Mais puxado para o roxo da Registration/Bio)
        primary: "#a413ec", // Padrão Roxo Forte
        "accent-blue": "#3b82f6", // Padrão Azul Forte

        "background-dark": "#1d1023", // Padrão Fundo Escuro
        "surface-dark": "#2b1834", // Fundo do Card (Roxo Escuro, como na Registration)

        // NOVAS CORES Mapeadas para Formulário (Mantendo o Roxo)
        "input-bg": "#150a1a", // Fundo do Input
        "input-border": "#563168", // Borda do Input
        "text-suttle": "#b792c9", // Texto Sutil/Placeholder/Rodapé
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"], // Títulos
        body: ["Noto Sans", "sans-serif"], // Corpo do texto/Formulário
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
          "radial-gradient(circle at 50% 0%, #3c2249 0%, #1d1023 60%, #0f0812 100%)",
        "accent-gradient": "linear-gradient(90deg, #3b82f6 0%, #a413ec 100%)", // Mude aqui
      },
    },
  },
};

// --- LÓGICA DO MENU TOGGLE (Mantida) ---
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
});
