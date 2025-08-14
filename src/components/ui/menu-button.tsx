"use client"

import * as React from "react"
import { X, Menu } from "lucide-react"

interface MenuButtonProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export function MenuButton({ isOpen, onToggle, className }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`self-end p-2 sm:hidden ${className || ""}`}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
      aria-expanded={isOpen}
      aria-controls="menu-items"
    >
      <X className={isOpen ? "" : "hidden"} />
      <Menu className={isOpen ? "hidden" : ""} />
    </button>
  )
}