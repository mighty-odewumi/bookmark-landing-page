/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "410px",
      },
      colors: {
        softblue: {
          100: "hsl(231, 69%, 60%)",
        },

        softred: {
          100: "hsl(0, 94%, 66%)",
        },

        grayishblue: {
          100: "hsl(229, 8%, 60%)",
        },

        darkblue: {
          100: "hsl(229, 31%, 21%)",
          200: "hsla(229, 31%, 21%, .9) ",
        }
      }
    },
  },
  plugins: [],
}
