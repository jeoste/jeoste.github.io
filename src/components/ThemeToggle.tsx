"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<string | null>(null)
  const [mounted, setMounted] = React.useState(false)

  // Éviter l'hydratation mismatch
  React.useEffect(() => {
    setMounted(true)
    
    // Lire le thème initial
    const currentTheme = localStorage.getItem("theme") || 
                        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    setTheme(currentTheme)
  }, [])

  const toggleTheme = React.useCallback(() => {
    if (!mounted) return
    
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    
    // Mettre à jour localStorage
    localStorage.setItem("theme", newTheme)
    
    // Appliquer le thème immédiatement
    document.documentElement.setAttribute("data-theme", newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Mettre à jour la couleur du thème meta
    const body = document.body
    if (body) {
      const computedStyles = window.getComputedStyle(body)
      const bgColor = computedStyles.backgroundColor
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", bgColor)
    }
  }, [theme, mounted])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative size-10 p-2 hover:bg-muted/50 hover:text-accent ml-8 focus-outline"
        style={{
          boxShadow: "0 2px 8px 0 var(--header-shadow-color)",
          borderRadius: "0.5rem"
        }}
        disabled
        aria-label="Toggle theme"
      >
        <Moon className="absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all" />
      </Button>
    )
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="relative size-10 p-2 hover:bg-muted/50 hover:text-accent ml-8 focus-outline"
      style={{
        boxShadow: "0 2px 8px 0 var(--header-shadow-color)",
        borderRadius: "0.5rem"
      }}
      title="Light/Dark"
      aria-label="Toggle theme"
      aria-live="polite"
    >
      <Moon className="absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}