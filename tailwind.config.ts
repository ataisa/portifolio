import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        "100": "#E76885",
        "50": "#ED92A3",
        "25": "#FCC7D7",
      },
      secondary: {
        "100": "#B0E7E4",
        "50": "#BFE9E5",
        "25": "#DBFBFA",
      },
      dark: {
        "100": "#0C0507",
        "75": "#170A0D",
        "50": "#231014",
        "25": "#2E151B",
      },
      "white-pink": {
        "100": "#FEF7F9",
        "75": "#FDF0F3",
        "50": "#FCE9ED",
        "25": "#FAE1E7",
      },
      white: {
        default: "#FAF7FC",
        ice: "#EFE9F5",
      },
      gray: {
        100: "#AEA7B5",
      },
    },
    extend: {
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "white-linear": "linear-gradient(90deg, #FAF7FC 0%, #EFE9F5 100%)",
        "primary-linear": "linear-gradient(90deg, #E76885 0%, #FCC7D7 100%)",
        "projects-bg":
          "url('/projects-bg.svg'), linear-gradient(90deg, #E76885 0%, #FCC7D7 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
