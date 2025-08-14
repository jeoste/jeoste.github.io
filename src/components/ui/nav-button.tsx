"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NavButtonProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  className?: string
}

export function NavButton({ href, children, isActive = false, className }: NavButtonProps) {
  return (
    <a
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "px-4 py-2 font-medium",
        isActive ? "text-accent underline" : "text-inherit",
        "focus:outline-none focus-visible:underline",
        className
      )}
    >
      {children}
    </a>
  )
}