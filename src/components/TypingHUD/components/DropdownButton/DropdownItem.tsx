type DropdownItemCompProps<T> = {
  label: string;
  value: T;
  selected: T;
  langStyle: string | undefined
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setButtonLabel: React.Dispatch<React.SetStateAction<string>>
  selectedSetting: React.Dispatch<React.SetStateAction<T>>
  localStorageKey: string;
  handleRestart: () => void
}

export function DropdownItem<T>({
  label,
  value,
  setOpen,
  selected,
  langStyle,
  setButtonLabel,
  localStorageKey,
  selectedSetting,
  handleRestart
}: DropdownItemCompProps<T>) {

  const isSelected = value == selected;

  return (
    <li
      role="MenuItem"
      className={`
        group 
        flex items-center 
        w-full 
        border-b border-(--neutral-700) 
        hover:text-(--blue-400) 
        px-3 gap-2
        ${isSelected
          ? 'text-(--blue-400)'
          : 'text-white'
        }
      `}
    >
      <span
        className={`
          h-4 w-4 
           group-hover:border-4 
           group-hover:border-(--blue-400) 
          rounded-full
          ${isSelected
            ? 'border-4 border-(--blue-400)'
            : 'border-white border'
          }
        `}
      />
      <button
        className="w-full text-left cursor-pointer"
        onClick={() => {
          setButtonLabel(langStyle ? '' : label)
          selectedSetting(value)
          setOpen(false);
          handleRestart();
          localStorage.setItem(localStorageKey, String(value));
        }}
      >
        {label}
      </button>
    </li>
  )
}
