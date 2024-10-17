// components
import Widgets from '@/components/content/dashboards/widgets/Widgets'

export default function Bside() {
	return (
		<aside className="flex flex-col border-l border-border h-full">
			<div className="w-full min-h-[50px] max-h-[50px] flex items-end">
				<p className="pl-4 pb-[4px]">Widgets</p>
			</div>
			<Widgets />
		</aside>
	)
}
