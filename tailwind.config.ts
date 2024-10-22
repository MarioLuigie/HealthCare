import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const { fontFamily } = require('tailwindcss/defaultTheme')

const headerHeight = '75px'
const asideTitleHeight = '65px'
const asideWitdh = '320px'
const bsideWitdh = '320px'
const footerHeight = '60px'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			screens: {
				xs: { min: '500px' },
			},
			colors: {
				green: {
					'400': '#2EBF8A',
					'500': '#24AE7C',
					'600': '#0D2A1F',
				},
				blue: {
					'500': '#79B5EC',
					'600': '#152432',
				},
				red: {
					'400': '#F36B61',
					'500': '#F37877',
					'600': '#3E1716',
					'700': '#F24E43',
				},
				light: {
					'200': '#E8E9E9',
				},
				dark: {
					'200': '#0D0F10',
					'300': '#131619',
					'400': '#1A1D21',
					'500': '#363A3D',
					'600': '#76828D',
					'700': '#ABB8C4',
				},
				background: 'hsl(var(--background))',
				backgroundTransparent: 'hsl(var(--backgroundTransparent))',
				backgroundActive: 'hsl(var(--background-active))',
				backgroundDisactive: 'hsl(var(--background-disactive))',
				foreground: 'hsl(var(--foreground))',
				badge: 'hsl(var(--badge))',
				hover: 'hsl(var(--hover))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
				textPrimary: 'hsl(var(--text-primary))',
				textSecondary: 'hsl(var(--text-secondary))',
				textAccent: 'hsl(var(--text-accent))',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
			},
			backgroundImage: {
				scheduled: "url('/assets/images/bg-scheduled.png')",
				pending: "url('/assets/images/bg-pending.png')",
				cancelled: "url('/assets/images/bg-cancelled.png')",
				finished: "url('/assets/images/bg-finished.png')",
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				'caret-blink': {
					'0%,70%,100%': {
						opacity: '1',
					},
					'20%,50%': {
						opacity: '0',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
			},
			width: {
				'rwd' : '500px',
				'widgetsWidth': bsideWitdh,
				'widgetsWidthZero': '0px',
				'sidebarWidth': asideWitdh,
			},
			maxWidth: {
				'globalSearch' : '500px',
				'widgetsMaxWidth': bsideWitdh,
				'sidebarMaxWidth': asideWitdh,
			},
			minWidth: {
				'widgetsMinWidth': bsideWitdh,
				'sidebarMinWidth': asideWitdh,
			},
			height: {
				'footerHeight' : footerHeight,
				'asideTitleHeight' : asideTitleHeight,
			},
			minHeight: {
				'minFooterHeight' : footerHeight,
				'minHeaderHeight' : headerHeight,
				'widgetsMinHeight': footerHeight,
				'minAsideTitleHeight' : asideTitleHeight,
			},
			maxHeight: {
				'maxFooterHeight' : footerHeight,
				'maxAsideTitleHeight' : asideTitleHeight,
				'maxHeaderHeight' : headerHeight,
				'cardsMaxHeight': `calc(100vh - ${asideTitleHeight} - ${headerHeight} - 80px)`,
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			translate: {
				'widgetsWidth' : '320px'
			}
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-start': {
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				},
				'.flex-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				},
				'.flex-between': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				},
				'.flex-end': {
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
				},
				'.grid-auto-300': {
					gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr));',
				},
			})
		}),
	],
} satisfies Config

export default config
