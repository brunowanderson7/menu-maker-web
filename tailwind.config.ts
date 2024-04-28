import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef1ed",
          100: "#fdd3c6",
          200: "#fcbeaa",
          300: "#faa083",
          400: "#f98d6b",
          500: "#f87146",
          600: "#e26740",
          700: "#b05032",
          800: "#883e27",
          900: "#682f1d"
        }
      },
    },
  },
  plugins: [],
};
export default config;
