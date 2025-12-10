// script.js

// --- 1. CONFIGURAÇÃO DO TAILWIND ---
// Isso precisa rodar antes do script do Tailwind carregar as classes.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#660099",
        "accent-blue": "#3b82f6",
        "background-dark": "#0B0B15",
        "background-card": "#151520",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Sora", "sans-serif"],
        signature: ["cursive"],
      },
      backgroundImage: {
        "cosmic-gradient":
          "radial-gradient(circle at 50% 0%, #2a1b3d 0%, #0B0B15 60%)",
        "accent-gradient": "linear-gradient(135deg, #3b82f6 0%, #660099 100%)",
      },
    },
  },
};

// --- 2. LÓGICA DO MENU MOBILE ---
// Espera o DOM carregar para adicionar os eventos de clique
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-menu-btn");

  // Função para abrir o menu
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });
  }

  // Função para fechar o menu
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }

  // Fecha o menu se clicar em algum link dentro dele
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});
