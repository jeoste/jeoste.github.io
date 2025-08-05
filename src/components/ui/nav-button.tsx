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
        "px-4 py-2 font-medium hover:text-accent focus-outline",
        isActive && "active-nav",
        className
      )}
      style={{
        boxShadow: "0 2px 8px 0 var(--header-shadow-color)",
        borderRadius: "0.5rem"
      }}
    >
      <a href={href}>
        {children}
      </a>
    </Button>
  )
}