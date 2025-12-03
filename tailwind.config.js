/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        "wave-pulse": "wave-pulse 4s ease-in-out infinite"
      },
      keyframes: {
        "wave-pulse": {
          "0%,100%": { opacity: .4 },
          "50%": { opacity: .7 }
        }
      }
    },
  },
  plugins: [],
}