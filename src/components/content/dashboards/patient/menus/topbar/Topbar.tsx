import NotificationCard from '@/components/content/NotificationCard'

export default function Topbar() {
	return (
		<div className="flex flex-col gap-3 w-full">
			<NotificationCard extitle="General Patient Data">
				<p>Test</p>
			</NotificationCard>

			<NotificationCard extitle="Health Summary">
				<p>Test</p>
			</NotificationCard>

			<NotificationCard extitle="Health Alerts">
				<p>Test</p>
			</NotificationCard>

			<NotificationCard extitle="Current Appointments">
				<p>Test</p>
			</NotificationCard>
		</div>
	)
}
