"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavButtonProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  className?: string
}

export function NavButton({ href, children, isActive = false, className }: NavButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "px-4 py-2 font-medium focus-outline rounded-md",
        isActive && "active-nav",
        className
      )}
    >
      <a href={href} aria-current={isActive ? "page" : undefined}>
        {children}
      </a>
    </Button>
  )
}