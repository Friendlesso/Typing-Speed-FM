import React, { useEffect, useRef, useState } from "react"
import { DropdownMenu } from "./DropdownMenu"
import type { DropdownItemProp } from "../../../../types/dropdown"

type DropdownButtonProps<T> = {
  buttonIcon?: string
  defaultLabel: string
  items: DropdownItemProp<T>[];
  selected: T
  settingLabel?: string
  localStorageKey: string
  langStyle?: string | undefined;

  selectedSetting: React.Dispatch<React.SetStateAction<T>>
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
}

export function DropdownButton<T>({
  buttonIcon,
  defaultLabel,
  items,
  selected,
  settingLabel,
  selectedSetting,
  setIsStarted,
  localStorageKey,
  langStyle
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
    <div ref={wrapperRef} className="relative flex items-center gap-2 w-full">
      {settingLabel &&
        <span
          className="text-(--neutral-400) leading-[120%] -tracking-(0.3rem) pl-1.5 sm:block hidden"
        >
          {settingLabel}:
        </span>
      }
      <div className="relative w-full">
        <button
          className={`
          flex 
          items-center
          justify-center
          ${langStyle 
            ? 'sm:w-fit w-full'
            : 'sm:w-40 w-[95%]'
          }
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
          {!langStyle && buttonLabel}
          <img
            src={buttonIcon}
          />
        </button>
        <DropdownMenu
          setButtonLabel={setButtonLabel}
          items={items}
          isOpen={open}
          setOpen={setOpen}
          selected={selected}
          selectedSetting={selectedSetting}
          setIsStarted={setIsStarted}
          localStorageKey={localStorageKey}
          langStyle={langStyle}
        />
      </div>
    </div>
  )
}