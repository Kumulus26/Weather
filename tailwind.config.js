const {nextui} = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: ('flowbite/plugin'),
}
}
