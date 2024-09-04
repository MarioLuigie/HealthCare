import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Plus_Jakarta_Sans as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

const fontSans = FontSans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'HealthCare',
	description:
		'A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.',
	icons: {
		icon: '/assets/icons/logo-icon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-screen font-sans antialiased scroll-m-4',
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
