import { Header, Main, Footer } from '@/components/layout'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
