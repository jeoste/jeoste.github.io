"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HrProps {
  noPadding?: boolean
  ariaHidden?: boolean
  className?: string
}

export function Hr({ noPadding = false, ariaHidden = true, className }: HrProps) {
  return (
    <div className={cn(
      "max-w-5xl mx-auto",
      noPadding ? "px-0" : "px-4 sm:px-8",
      className
    )}>
      <hr className="border-border" aria-hidden={ariaHidden} />
    </div>
  )
}