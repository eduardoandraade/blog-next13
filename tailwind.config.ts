import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#2680A2',
        secondary: '#2EC0BB',
        heading: '#233036',
        body: '#667074',
        light: '#F6F6F6',
        yellowLight: '#FFF3D9',
        greenLight: '#CCF0EE',
        blueLight: '#1A4657',
        purpleLight: '#AEA3E1'
      },
      gradientColorStops: {
        'blueLight': '#1A4657', // Cor mais escura no gradiente
        'blueLight-light': '#2EC0BB', // Cor mais clara no gradiente
      },
      backgroundGradient: {
        'blueLight': 'linear-gradient(135deg, #1A4657 0%, #AEA3E1 100%)', // Gradiente personalizado
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
