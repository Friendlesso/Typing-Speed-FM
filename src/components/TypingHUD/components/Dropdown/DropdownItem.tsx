type DropdownItemCompProps<T> = {
  label: string;
  value: T;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setButtonLabel: React.Dispatch<React.SetStateAction<string>>
  localStorageKey: string;
  selectedSetting: React.Dispatch<React.SetStateAction<T>>
}

export function DropdownItem<T>({
  label,
  value,
  setOpen,
  setButtonLabel,
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
          localStorage.setItem(localStorageKey, String(label));
        }}
      >
        {label}
      </button>
    </li>
  )
}