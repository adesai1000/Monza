import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      colors: {
        brand: {
          25: "#FFECE8",  // Lightest red
          50: "#FFD9D0",  // Very light red
          100: "#FFC2B8", // Soft light red
          200: "#FF9D8F", // Soft red
          300: "#FF7464", // Vibrant light red
          400: "#FF463A", // Bright red
          500: "#FF2800", // Ferrari red
          600: "#DB2200", // Slightly darker Ferrari red
          700: "#B71C00", // Deep red
          800: "#931500", // Darker deep red
          900: "#730F00", // Darkest red
          950: "#520A00", // Nearly black-red
        },
        altbrand:{
          "25": "#F8F9FD",
          "50": "#F0F4FA",
          "100": "#E1E9F6",
          "200": "#C3D3ED",
          "300": "#A5BDE4",
          "400": "#87A7DB",
          "500": "#6991D2",
          "600": "#4B76C9",
          "700": "#3659B1",
          "800": "#284189",
          "900": "#1B2A61",
          "950": "#111A3E",
        },
      "discord-gray": "#36393f",
      "discord-text": "#dcddde",
      "discord-timestamp": "#72767d",
      },
    },
  },
  plugins: [],
}
export default config
