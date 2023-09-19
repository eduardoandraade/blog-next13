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
        primary: '#1D5B79',
        secondary: '#2EC0BB',
        heading: '#233036',
        body: '#667074',
        light: '#F6F6F6',
        yellowLight: '#FFF3D9',
        greenLight: '#CCF0EE',
        purpleLight: '#AEA3E1'
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
