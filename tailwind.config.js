/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For the new App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For the Pages Router (if used)
    "./components/**/*.{js,ts,jsx,tsx}", // For components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        anton: ["var(--font-anton)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
