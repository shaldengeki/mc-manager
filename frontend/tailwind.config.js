module.exports = {
  prefix: "",
  purge: {
    // enabled: process.env.NODE_ENV === "production",
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};