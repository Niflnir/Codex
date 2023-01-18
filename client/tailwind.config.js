/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mg: ["MG"],
      sc: ["SC"],
    },
    extend: {
      colors: {
        pri: "#313131",
        sec: "#758F8B",
        black: "#282828",
        saf: "#deb992",
        blue: "#166095",
        grey: "#646464",
      },
      spacing: {
        "5/6": "83.333333%",
        "1/5": "20%",
        "1/6": "16.666666%",
        "1/7": "14.285714%",
        "1/8": "12.5%",
        "1/10": "10%",
        "1/13": "7.5%",
        "9/10": "90%",
        "19/20": "95%",
        "1/20": "5%",
      },
      maxHeight: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      backgroundImage: {
        "split-bg": "linear-gradient(to right, #166095 50%, #DEB992 50%)",
        gh: "url(/images/greenhills.jpg)",
      },
    },
  },
  plugins: [],
};
