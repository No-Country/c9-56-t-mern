/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      spacing: {
        "352px": "22rem",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        title: ["Poppins", "sans-serif"],
        subtitle: ["Lato", "sans-serif"],
        body: ["Lato", "sans-serif"],
        caption: ["Lato", "sans-serif"],
        button: ["Poppins", "sans-serif"],
        link: ["Poppins", "sans-serif"],
      },
      fontSize: {
        main: ["2rem", { fontWeight: 700, lineHeight: "2.5rem" }],
        title: ["1.5rem", { lineHeight: "2.25rem", fontWeight: 600 }],
        subtitle: ["1.25rem", { lineHeight: "1.5rem", fontWeight: 400 }],
        "subtitle-bold": ["1.25rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        body: ["1rem", { lineHeight: "1.1875rem", fontWeight: 400 }],
        "body-bold": ["1rem", { lineHeight: "1.1875rem", fontWeight: 600 }],
        caption: ["0.875rem", { lineHeight: "1.0625rem", fontWeight: 400 }],
        button: ["0.875rem", { lineHeight: "1.3125rem", fontWeight: 600 }],
        link: ["0.875rem", { lineHeight: "1.3125rem", fontWeight: 400 }],
      },
      colors: {
        "regal-blue": "#2684FF",
        "background": "#F8FAFC",
        "icon-filter": "#5B21B6",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              "@apply text-indigo-600 hover:text-blue-800 underline global-link":
                {},
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
