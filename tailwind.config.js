
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513', // dark burnt orange
          dark: '#654321',
          light: '#A0522D'
        },
        secondary: {
          DEFAULT: '#FFFFFF', // bright white
          dark: '#F5F5F5',
          light: '#FFFFFF'
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          lighter: '#2a2a2a'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slideIn': 'slideIn 0.5s ease-out forwards',
        'slideInUp': 'slideInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 5.5rem)',
      },
      fontWeight: {
        'black': '900',
      }
    },
  },
  plugins: [],
};
