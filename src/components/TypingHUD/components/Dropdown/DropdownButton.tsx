import React, { useEffect, useRef, useState } from "react"
import { DropdownMenu } from "./DropdownMenu"
import type { DropdownItemProp } from "../../../../types/dropdown"

type DropdownButtonProps<T> = {
  items: DropdownItemProp<T>[]
  settingLabel?: string
  defaultLabel: string
  localStorageKey: string
  buttonIcon: string
  selectedSetting: React.Dispatch<React.SetStateAction<T>>
}

export function DropdownButton<T>({
  items,
  settingLabel,
  selectedSetting,
  defaultLabel,
  localStorageKey,
  buttonIcon
}: DropdownButtonProps<T>) {

  const stored = localStorage.getItem(localStorageKey)
  const [open, setOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState<string>(
    stored || defaultLabel
  )

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e?.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [])

  return (
    <div ref={wrapperRef} className="relative flex items-center gap-2">
      {settingLabel &&
        <span
          className="text-(--neutral-400) leading-[120%] -tracking-(0.3rem) pl-1.5"
        >
          {settingLabel}:
        </span>
      }
      <div className="relative">
        <button
          className={`
          flex 
          gap-2.5 py-1.5 px-2.5
          border border-(--neutral-500) hover:border-(--blue-400)
          rounded-lg
          text-white leading-[120%] -tracking-(0.3rem)
          cursor-pointer
          transition-all duration-150 
        `}
          onClick={() => {
            setOpen(prev => !prev);
          }}
        >
          {buttonLabel}
          <img
            src={buttonIcon}
            alt="dropdown icon"
          />
        </button>
        <DropdownMenu
          items={items}
          isOpen={open}
          setOpen={setOpen}
          selectedSetting={selectedSetting}
          setButtonLabel={setButtonLabel}
          localStorageKey={localStorageKey}
        />
      </div>
    </div>
  )
}