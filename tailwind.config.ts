import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2b2b2b",
        cream: "#ffffff",
        beige: "#f5f5f5",
        forest: "#2a4f65",
        brand: "#37647E",
        "brand-dark": "#2a4f65",
        "brand-light": "#4a7a94",
        gold: "#37647E",
        "gold-dark": "#2a4f65",
        slate: "#5f6368",
        taupe: "#beb5ad",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        hero: ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-mobile": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        display: ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-mobile": ["2rem", { lineHeight: "1.2" }],
        title: ["2.25rem", { lineHeight: "1.2" }],
        "title-mobile": ["1.75rem", { lineHeight: "1.25" }],
        subtitle: ["1.75rem", { lineHeight: "1.3" }],
        section: ["1.375rem", { lineHeight: "1.4" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        small: ["0.9375rem", { lineHeight: "1.6" }],
        tiny: ["0.8125rem", { lineHeight: "1.5" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        section: "7.5rem",
        "section-mobile": "3.75rem",
      },
      maxWidth: {
        container: "1400px",
        content: "1200px",
        narrow: "800px",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
