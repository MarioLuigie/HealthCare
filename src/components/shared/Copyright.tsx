export default function Copyright({ children }: { children?: React.ReactNode }) {
	return (
		<div className="flex justify-between text-14-regular mt-20">
			<p className="justify-items-end text-dark-600 xl:text-left text-xs">
				© 2024 HealthCare by ARWcode
			</p>
      {children}
		</div>
	)
}
