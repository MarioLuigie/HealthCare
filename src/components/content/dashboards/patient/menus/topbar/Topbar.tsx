import GlobalSearch from '@/components/search/GlobalSearch'
import AccordionCard from '@/components/shared/AccordionCard'
import Card from '@/components/shared/Card'

export default function Topbar() {
	return (
		<div className="flex flex-col w-full">
			<GlobalSearch />
			<div className="relative mt-4 flex gap-4 w-full">
				<div className="absolute flex flex-wrap gap-4 w-full">

					<div className="grow min-w-[280px] w-full xs:w-auto">
						<AccordionCard>
							<div className="p-4">
								<div>Test</div>
								<div>Test</div>
								<div>Test</div>
							</div>
						</AccordionCard>
					</div>

					<div className="grow min-w-[280px] w-full xs:w-auto">
						<AccordionCard>
							<div className="p-4">
								<div>Test</div>
								<div>Test</div>
								<div>Test</div>
							</div>
						</AccordionCard>
					</div>

					<div className="grow min-w-[280px] w-full xs:w-auto">
						<AccordionCard>
							<div className="p-4">
								<div>Test</div>
								<div>Test</div>
								<div>Test</div>
							</div>
						</AccordionCard>
					</div>

          <div className="grow min-w-[280px] w-full xs:w-auto">
						<AccordionCard>
							<div className="p-4">
								<div>Test</div>
								<div>Test</div>
								<div>Test</div>
							</div>
						</AccordionCard>
					</div>

				</div>
			</div>
		</div>
	)
}
