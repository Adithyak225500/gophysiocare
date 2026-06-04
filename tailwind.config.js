/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",        // luxury gold
        goldSoft: "#E6C76A",    // highlight gold
        silver: "#C0C0C0",      // soft silver borders
        soft: "#F8F8F8",        // background sections
        premium: "#111827",     // dark text (optional use)
      },
    },
  },

  plugins: [],
};