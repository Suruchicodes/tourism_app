
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        earth: {
          50: '#f7f3ee',
          100: '#e9e1d5',
          200: '#d5c7b3',
          300: '#baa78a',
          400: '#a58c6c',
          500: '#8b7251', 
          600: '#715c45',
          700: '#5a4a38',
          800: '#44392d',
          900: '#322b23'
        },
        spice: {
          50: '#fdf6e9',
          100: '#f9e6c9',
          200: '#f3cf98',
          300: '#ebb25f',
          400: '#e59c35',
          500: '#db8319',
          600: '#c56712',
          700: '#a34e12',
          800: '#833e15',
          900: '#6c3416'
        },
        terracotta: {
          50: '#fbf4f2',
          100: '#f7e6e2',
          200: '#f1d1ca',
          300: '#e6b3a7',
          400: '#d98977',
          500: '#cd6a53',
          600: '#bc5342',
          700: '#9d4135',
          800: '#813730',
          900: '#6b302b'
        },
        indigo: {
          50: '#f1f2f9',
          100: '#e3e5f1',
          200: '#ccd0e5',
          300: '#aab2d3',
          400: '#808cbb',
          500: '#6670a6',
          600: '#525a8c',
          700: '#444a72',
          800: '#3c415f',
          900: '#353851'
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards'
			},
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.12)'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
