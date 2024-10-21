import NotificationCard from '@/components/content/NotificationCard'
import AccordionCard from '@/components/shared/cards/AccordionCard'
import Card from '@/components/shared/cards/Card'

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
