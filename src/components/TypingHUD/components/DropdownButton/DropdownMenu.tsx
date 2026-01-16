import type { DropdownItemProp } from "../../../../types/dropdown"
import { DropdownItem } from "./DropdownItem"

type DropdownMenuProps<T> = {
  items: DropdownItemProp<T>[]
  isOpen: boolean
  selected: T
  localStorageKey: string
  langStyle: string | undefined

  setButtonLabel: React.Dispatch<React.SetStateAction<string>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedSetting: React.Dispatch<React.SetStateAction<T>>

  handleRestart: () => void

}

export function DropdownMenu<T>({
  items,
  isOpen,
  setOpen,
  selected,
  langStyle,
  setButtonLabel,
  selectedSetting,
  localStorageKey,
  handleRestart
}: DropdownMenuProps<T>) {
  return (
    <ul
      className={`
        absolute 
        top-10 
        bg-(--neutral-800) 
        z-10
        rounded-lg
        flex flex-col gap-2 py-2.5
        transition-[max-height, opacity] duration-300 ease-in-out
        ${langStyle
          ? 'overflow-none sm:w-full w-fit right-0 '
          : 'overflow-hidden sm:w-full w-fit left-0'
        }
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
          selected={selected}
          langStyle={langStyle}
          setButtonLabel={setButtonLabel}
          selectedSetting={selectedSetting}
          localStorageKey={localStorageKey}
          handleRestart={handleRestart}
        />
      )}
    </ul>
  )
}
