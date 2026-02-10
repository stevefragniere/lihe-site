/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        textmain: '#6FAF95',    // vert d'eau pour le texte principal
        primary: '#D4AF37',     // doré
        secondary: '#A8D8C5',   // vert pastel clair
        accent: '#7BBFA5',      // vert plus soutenu
      },
    },
  },
  plugins: [],
  safelist: [
    "hidden",
    "flex",
    "md:hidden",
    "py-2",
    "shadow-md"
  ],
};