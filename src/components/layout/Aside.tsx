// modules
import clsx from 'clsx'
// components
import { Sidebar } from '@/components/content/dashboards/patient/menus/sidebar/Sidebar'

export default function Aside({ className }: { className?: string }) {
	return (
		<aside className={clsx('px-4 py-8 flex flex-col gap-2', className)}>
			<Sidebar />
		</aside>
	)
}
