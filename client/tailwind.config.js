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
        saffron: "#DEB992",
        blue: "#166095",
        grey: "#646464",
      },
      maxHeight: {
        128: "32rem",
      },
      backgroundImage: {
        "split-bg": "linear-gradient(to right, #166095 50%, #DEB992 50%)",
        gh: "url(/images/greenhills.jpg)",
      },
      keyframes: {
        logo: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(359deg)" },
          "100%": { transform: "rotate(359deg)" },
        },
        cLogo: {
          "0%, 20%": { transform: "translate(0px, 0px)" },
          "40%": { transform: "translate(-40px, 25.5px) scale(2,2)" },
          "100%": { transform: "translate(-40px, 25.5px) scale(2,2)" },
        },
        oLogo: {
          "0%, 30%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-64px, 76px) scale(2,2)" },
          "100%": { transform: "translate(-64px, 76px) scale(2,2)" },
        },
        dLogo: {
          "0%, 40%": { transform: "translate(0px, 0px)" },
          "60%": { transform: "translate(-87px, 24px) scale(2,2)" },
          "100%": { transform: "translate(-87px, 24px) scale(2,2)" },
        },
        eLogo: {
          "0%, 50%": { transform: "translate(0px, 0px)" },
          "70%": { transform: "translate(5px, -28px) scale(2,2)" },
          "100%": { transform: "translate(5px, -28px) scale(2,2)" },
        },
        xLogoBlue: {
          "0%, 60%": { transform: "translate(0px, 0px)" },
          "80%": {
            transform: "translate(107px, 81px) scale(0.45,0.45) rotate(10deg)",
          },
          "100%": {
            transform: "translate(107px, 81px) scale(0.45,0.45) rotate(10deg)",
          },
        },
        xLogoSaffron: {
          "0%, 60%": { transform: "translate(0px, 0px)" },
          "80%": {
            transform: "translate(100px, 87px) scale(0.45,0.45) rotate(-10deg)",
          },
          "100%": {
            transform: "translate(100px, 87px) scale(0.45,0.45) rotate(-10deg)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(3deg)" },
          "40%": { transform: "rotate(-3deg)" },
          "60%": { transform: "rotate(3deg)" },
          "80%": { transform: "rotate(-3deg)" },
        },
        popout: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(1.1, 1.1)" },
          "50%": { transform: "scale(1.2, 1.2)" },
          "75%": { transform: "scale(1.1, 1.1)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fade2: {
          "0%, 100%": { opacity: "0" },
          "30%, 70%": { opacity: "1" },
        },
      },
      animation: {
        logo: "logo 1.5s ease-in 1",
        wiggle: "wiggle 0.5s linear 1",
        popout: "popout 0.4s linear 1",
        cLogo: "cLogo 2s ease-in infinite alternate",
        oLogo: "oLogo 2s ease-in infinite alternate",
        dLogo: "dLogo 2s ease-in infinite alternate",
        eLogo: "eLogo 2s ease-in infinite alternate",
        xLogoBlue: "xLogoBlue 2s ease-in infinite alternate",
        xLogoSaffron: "xLogoSaffron 2s ease-in infinite alternate",
        fade: "fade 0.5s ease-in 1",
        fade2: "fade2 1.5s linear 1",
      },
    },
  },
  plugins: [],
};
