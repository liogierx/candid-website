import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7B4DFF",
        secondary: "#00C2FF",
        softPurple: "#F4F0FF",
        borderPurple: "#E3D8FF",
      },
    },
  },
  plugins: [],
};

export default config;
