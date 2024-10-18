export default function Copyright({
	children,
}: {
	children?: React.ReactNode
}) {
	return (
		<div className="flex justify-between items-start text-14-regular">
			<div className="flex flex-col">
				<small className="text-textSecondary text-xs text-left">
					&copy; 2024 HealthCare Medical Clinic.
				</small>
				<small className="text-textSecondary text-xs text-left">&copy; ARWcode v1.0.0.</small>
			</div>
			{children}
		</div>
	)
}
