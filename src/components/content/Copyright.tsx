export default function Copyright({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="flex-center text-14-regular">
      <small className="text-textSecondary text-xs text-center">
        &copy; 2024 HealthCare Medical Clinic by &copy; ARWcode v1.0.0.
      </small>
      {children}
    </div>
  )
}
