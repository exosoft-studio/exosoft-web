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
        color1 : '#100f2a',
        color2 : '#062d6b',
        color3 : '#0C2958',
        color4 : '#18206e',
        color5 : '#d7e3fc',
        color6 : '#bcdeff',
      }
    },
  },
  plugins: [],
};
export default config;
