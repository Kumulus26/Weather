const {nextui} = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).{js,ts,jsx,tsx}",
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
  plugins: [nextui()],
}
}
