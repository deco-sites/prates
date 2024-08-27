import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        typing: "typing 3s steps(19) infinite alternate,  .7s infinite",
        
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "70%":{
            width: "100%"
          },
          "100%": {
            width: "100%"
          }  
        },
      },
    },
  },
};
