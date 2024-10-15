// 'use client'
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { UserCardProps } from "../cards/UserCards";
// import { useState } from "react";


// interface SearchInputProps {
//   searchList: UserCardProps[];
// }

// export function FilterSearchInput({ searchList }: SearchInputProps) {
//   const [value, setValue] = useState('')
//   return (
//       <Command inputMode="text" className="bg-black w-[250px] rounded-lg  border-gray-400 text-txtWhite relative">
//           <CommandInput className="h-full" value={value} onValueChange={(e) => setValue(e)} placeholder="search..." />
//           {value && <CommandList className="border-none">
//               <CommandEmpty>No results found</CommandEmpty>
//               <CommandGroup heading="Users">
//                   {searchList.map(item => {
//                       return (<CommandItem key={item.id}>
//                           <span>{item.name}</span>
//                           <span>{item.id ?? ''}</span>
//                       </CommandItem>)
//                   })}
//               </CommandGroup>
//           </CommandList>}
//       </Command>
//   )
// }

'use client'
import { useState } from 'react'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@/components/ui/popover'
import {
	Command,
	CommandInput,
	CommandList,
	CommandItem,
} from '@/components/ui/command'

export default function CustomSearch() {
	// Przykładowe dane do filtrowania
	const items = [
		{ label: 'Dashboard', path: '/dashboard' },
		{ label: 'Results', path: '/results' },
		{ label: 'Appointments', path: '/appointments' },
		{ label: 'Health Alerts', path: '/alerts' },
	]

	const [inputValue, setInputValue] = useState('')
	const [filteredItems, setFilteredItems] = useState(items)

	// Filtrowanie wyników w zależności od wpisanego tekstu
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setInputValue(value)

		// Filtruj dane na podstawie wpisanego tekstu
		const filtered = items.filter((item) =>
			item.label.toLowerCase().includes(value.toLowerCase())
		)
		setFilteredItems(filtered)
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				{/* Input jako Trigger do otworzenia Popovera */}
				<input
					type="text"
					placeholder="Search..."
					value={inputValue}
					onChange={handleInputChange}
					className="w-full p-2 border rounded-md"
				/>
			</PopoverTrigger>
			<PopoverContent className="w-full p-2">
				<Command>
					<CommandInput
						value={inputValue}
						onValueChange={setInputValue} // Używamy onValueChange
						placeholder="Start typing to search..."
					/>
					<CommandList>
						{filteredItems.length > 0 ? (
							filteredItems.map((item) => (
								<CommandItem
									key={item.path}
									onSelect={() => console.log(item.path)}
								>
									{item.label}
								</CommandItem>
							))
						) : (
							<CommandItem disabled>No results found.</CommandItem>
						)}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
