import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/lib/styles/globals.css'
import { Plus_Jakarta_Sans as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'

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
					'min-h-screen bg-dark-300 font-sans antialiased',
					fontSans.variable
				)}
			>
				{children}
			</body>
		</html>
	)
}
