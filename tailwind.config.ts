import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        'custom-blue': '#26335A',
        'custom-white' : '#F8F5F2',
      },

      fontFamily: {
        'Poppins' : ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
