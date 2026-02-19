import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // usamos clase .dark en el <html>

  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],

  theme: {
    extend: {
      /*
        🎨 Design tokens base.
        No usamos colores hardcodeados en componentes.
        Creamos una base escalable tipo design system.
      */
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      /*
        🧱 Border radius consistente
      */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      /*
        ✨ Animaciones suaves (para después usar con Framer o transiciones)
      */
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
}

export default config