export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col overflow-auto remove-scrollbar grow h-full p-4 pt-0">
			{children}
		</main>
	)
}
