type DropdownItemCompProps<T> = {
  label: string;
  value: T;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setButtonLabel: React.Dispatch<React.SetStateAction<string>>
  selectedSetting: React.Dispatch<React.SetStateAction<T>>
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  localStorageKey: string;
}

export function DropdownItem<T>({
  label,
  value,
  setOpen,
  setButtonLabel,
  setIsStarted,
  localStorageKey,
  selectedSetting
}: DropdownItemCompProps<T>) {

  return (
    <li>
      <button
        onClick={() => {
          setButtonLabel(label);
          selectedSetting(value)
          setOpen(false);
          setIsStarted(false);
          localStorage.setItem(localStorageKey, String(label));
        }}
      >
        {label}
      </button>
    </li>
  )
}