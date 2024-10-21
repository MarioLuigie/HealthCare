'use client'
// modules
import { useState } from 'react'
// components
import NotificationCard from '@/components/content/NotificationCard'
import AccordionCard from '@/components/shared/cards/AccordionCard'
import GeneralPatientData from '@/components/content/dashboards/patient/GeneralPatientData'

export default function Topbar({ user, patient }: { user: any; patient: any }) {
	const [isHide, setIsHide] = useState<boolean>(true)

	return (
		<div onClick={() => setIsHide((prefState) => !prefState)}>
			<AccordionCard
				title="Medical Notifications Cards"
				trigger={isHide ? 'Show Cards' : 'Hide Cards'}
			>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] w-full">
					<NotificationCard extitle="General Patient Data">
						<GeneralPatientData user={user} patient={patient} />
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
			</AccordionCard>
		</div>
	)
}
