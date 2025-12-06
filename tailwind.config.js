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
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        'border-hover': 'var(--border-hover)',
        'fill-subtle': 'var(--fill-subtle)',
      },
      spacing: {
        '8': 'var(--spacing-8)',
        '12': 'var(--spacing-12)',
        '16': 'var(--spacing-16)',
        '24': 'var(--spacing-24)',
        '32': 'var(--spacing-32)',
        '48': 'var(--spacing-48)',
        '64': 'var(--spacing-64)',
        '96': 'var(--spacing-96)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      fontSize: {
        'h1-mobile': ['48px', { lineHeight: '1.1', fontFamily: 'Space Grotesk' }],
        'h1-tablet': ['60px', { lineHeight: '1.1', fontFamily: 'Space Grotesk' }],
        'h1-desktop': ['72px', { lineHeight: '1.1', fontFamily: 'Space Grotesk' }],
        'h2-mobile': ['40px', { lineHeight: '1.2', fontFamily: 'Space Grotesk' }],
        'h2-desktop': ['44px', { lineHeight: '1.2', fontFamily: 'Space Grotesk' }],
        'h3': ['32px', { lineHeight: '1.3', fontFamily: 'Space Grotesk' }],
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'content': 'var(--max-line-width)',
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