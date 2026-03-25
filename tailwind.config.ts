import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],

  theme: {

    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {

      /* =========================
         COLORS (HSL TOKENS)
      ========================= */

      colors: {

        background: "hsl(var(--background) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        surfaceSoft: "hsl(var(--surface-soft) / <alpha-value>)",

        text: "hsl(var(--text) / <alpha-value>)",
        muted: "hsl(var(--text-muted) / <alpha-value>)",

        border: "hsl(var(--border) / <alpha-value>)",

        accent: "hsl(var(--accent) / <alpha-value>)",
        accentSoft: "hsl(var(--accent-soft) / <alpha-value>)",

        focus: "hsl(var(--focus-ring) / <alpha-value>)",
      },

      /* =========================
         RADIUS
      ========================= */

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      /* =========================
         SHADOWS
      ========================= */

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },

      /* =========================
         TYPOGRAPHY
      ========================= */

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },

      /* =========================
         TRANSITIONS
      ========================= */

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        250: "250ms",
        400: "400ms",
      },

    },

  },

  plugins: [],
}

export default config