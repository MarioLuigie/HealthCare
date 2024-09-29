export default function Copyright({ children }: { children?: React.ReactNode }) {
	return (
		<div className="flex justify-between text-14-regular">
			<p className="justify-items-end text-dark-600 xl:text-left text-xs pb-4">
				© 2024 HealthCare by ARWcode
			</p>
      {children}
		</div>
	)
}
