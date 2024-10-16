export default function Copyright({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="flex justify-between text-14-regular">
      <small className="text-green-500 text-xs text-center">
        &copy; 2024 HealthCare Medical Clinic by &copy; ARWcode v1.0.0.
      </small>
      {children}
    </div>
  )
}
