import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2F8',
          100: '#D5DFEE',
          200: '#AABFDC',
          300: '#809FCB',
          400: '#557FB9',
          500: '#2B5FA8',
          600: '#1D4A8D',
          700: '#153672',
          800: '#0D2257',
          900: '#07123C',
        },
        gold: {
          50: '#FDF8EE',
          100: '#FAEFCE',
          200: '#F5DF9D',
          300: '#F0CF6C',
          400: '#EABF3B',
          500: '#C9A640',
          600: '#A07E28',
          700: '#7A5B14',
          800: '#543800',
          900: '#2F1500',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
