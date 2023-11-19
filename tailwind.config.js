/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './containers/**/*.{js,jsx,ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bg: "#044863",
        space_cadet: {
          DEFAULT: "#2d3047",
          100: "#090a0e",
          200: "#12141d",
          300: "#1b1d2b",
          400: "#252739",
          500: "#2d3047",
          600: "#4c5177",
          700: "#6f75a3",
          800: "#9fa3c2",
          900: "#cfd1e0",
        },
        glaucous: {
          DEFAULT: "#7d8cc4",
          100: "#14192c",
          200: "#283259",
          300: "#3c4c85",
          400: "#5065b1",
          500: "#7d8cc4",
          600: "#97a3d0",
          700: "#b1badc",
          800: "#cbd1e8",
          900: "#e5e8f3",
        },
        light_orange: {
          DEFAULT: "#ffd8ad",
          100: "#562c00",
          200: "#ab5900",
          300: "#ff8502",
          400: "#ffae58",
          500: "#ffd8ad",
          600: "#ffdfbe",
          700: "#ffe7ce",
          800: "#ffefde",
          900: "#fff7ef",
        },
        sea_green: {
          DEFAULT: "#09d7c3",
          100: "#022b27",
          200: "#04564e",
          300: "#058175",
          400: "#07ac9c",
          500: "#09d7c3",
          600: "#24f6e1",
          700: "#5af8e8",
          800: "#91faf0",
          900: "#c8fdf7",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}