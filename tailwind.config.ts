import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#1B6F71",
        color2: "#113E5D",
        color3: "#406AB5", // blue
        color4: "#FA4238" // red
      },
      spacing: {
        '2.5': '10px', // Adding 10px as a custom spacing value
      },
      textUnderlineOffset: {
        '2.5': '10px', // Adding custom 10px gap for underline offset
      },
    },
  },
  plugins: [],
} satisfies Config;
