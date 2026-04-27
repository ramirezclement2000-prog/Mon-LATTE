import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf7f2",
        green: "#496d45",
        gold: "#bf9665",
        text: "#1a1a18"
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-cormorant)", "ui-serif", "Georgia"]
      },
      boxShadow: {
        "soft-green": "0 28px 90px rgba(73, 109, 69, 0.08)",
        "stack-up": "0 -32px 90px rgba(26, 26, 24, 0.13)",
        "glass-line": "inset 0 1px 0 rgba(255, 255, 255, 0.55)"
      },
      backgroundImage: {
        "paper-grain":
          "linear-gradient(135deg, rgba(255,255,255,0.46) 0%, rgba(255,255,255,0) 48%, rgba(191,150,101,0.08) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
