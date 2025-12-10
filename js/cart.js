// cart.js

// --- CONFIGURAÇÃO TAILWIND (Incluindo Novas Variáveis para Unificação) ---
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Cores Originais do Tema Apometria
        primary: "#660099",
        "accent-blue": "#3b82f6",
        "background-dark": "#0B0B15",
        "background-card": "#151520",

        // NOVAS CORES Mapeadas para Unificar o Design
        "border-dark": "#232f48", // Substitui o #232f48
        "surface-light": "#111722", // Substitui o #111722
        "surface-dark": "#161e2c", // Substitui o #161e2c
        "subtle-dark": "#3c475d", // Cor escura para texto/ícones sutis
      },
      fontFamily: {
        // Mantenho as definições dos outros arquivos
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
