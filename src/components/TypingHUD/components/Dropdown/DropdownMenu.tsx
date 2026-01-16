import type { DropdownItemProp } from "../../../../types/dropdown"
import { DropdownItem } from "./DropdownItem"

type DropdownMenuProps<T> = {
  items: DropdownItemProp<T>[]
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setButtonLabel: React.Dispatch<React.SetStateAction<string>>
  selectedSetting: React.Dispatch<React.SetStateAction<T>>
  localStorageKey:string
}

export function DropdownMenu<T>({
  items,
  isOpen,
  setOpen,
  setButtonLabel,
  selectedSetting,
  localStorageKey,
}: DropdownMenuProps<T>) {
  return (
    <ul
      role="Menu"
      className={`
        absolute 
        top-10 left-0 
        bg-(--neutral-800) 
        w-full
        z-10
        rounded-lg
        transition-[max-height, opacity] duration-300 ease-in-out
        overflow-hidden
        ${isOpen 
          ? 'max-h-90 opacity-100  pointer-events-auto'
          : 'max-h-0 opacity-0 pointer-events-none'
        }
      `}
    >
      {items.map(item => 
        <DropdownItem 
          key={String(item.value)}
          label={item.label}
          value={item.value}
          setOpen={setOpen}
          setButtonLabel={setButtonLabel}
          selectedSetting={selectedSetting}
          localStorageKey={localStorageKey}
        />
      )}
    </ul>
  )
}