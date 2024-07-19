import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightPink: "hsl(275, 100%, 97%)",
        grayPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
        purple: "#ad28eb",
      },
    },
  },
  plugins: [],
};
export default config;
