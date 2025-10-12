/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D2C63', // Azul solicitado
          light: '#3766a6',   // Azul claro
          dark: '#101a2d'     // Azul oscuro
        },
        secondary: {
          DEFAULT: '#22a085', // Verde principal
          light: '#a3d98a',  // Verde claro
          dark: '#357a70'    // Verde oscuro (mantengo uno anterior para contraste)
        },
        accent: {
          DEFAULT: '#ffd44f', // Amarillo principal
          light: '#ffc107',  // Amarillo alternativo
          dark: '#d39e00'    // Amarillo oscuro
        },
        orange: {
          DEFAULT: '#f47c3c', // Naranja principal
        },
        greenlight: {
          DEFAULT: '#a3d98a', // Verde claro
        }
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'system-ui', 'sans-serif'],
        display: ['Kumbh Sans', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
