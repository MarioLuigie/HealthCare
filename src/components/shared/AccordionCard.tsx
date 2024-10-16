// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type SidebarMenuItemProps = {
  name?: string
  icon?: string
}

export default function AccordionCard({ name, icon }: SidebarMenuItemProps) {
  return (
    <div className="grow max-w-[300px]">
      <Accordion
        type="single"
        collapsible
        className="bg-input rounded-xl border border-border shadow-lg"
      >
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="hover:no-underline p-2 hover:bg-hover transition duration-300 ease-in-out rounded-md">
            <div className={`flex items-center gap-2`}>
              <p className="text-start">Test</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 p-4 max-h-[130px]">
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
