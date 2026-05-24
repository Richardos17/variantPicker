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
        data: "#22c55e",
        multimedia: "#ec4899",
        systems: "#f59e0b",
        tudelft: "#3B35C3",
      },
    },
  },
  plugins: [],
};

export default config;
