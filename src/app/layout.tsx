import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import '@/app/globals.css'

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
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={cn(
					'min-h-screen font-sans antialiased scroll-m-4',
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
