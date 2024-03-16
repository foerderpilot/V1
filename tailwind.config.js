/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      'light', // This sets the light theme as the default
      // Add other themes here if needed
    ],
  },
  plugins: [
    require("daisyui"),
  ],
}
