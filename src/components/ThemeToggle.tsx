"use client"

import * as React from "react"
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
    
    // Mise à jour centralisée via le script early (évite doublons et FOUC)
    try {
      // @ts-ignore
      if (typeof window.setTheme === "function") {
        // @ts-ignore
        window.setTheme(newTheme)
        window.dispatchEvent(new Event("theme-change"))
      } else {
        localStorage.setItem("theme", newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    } catch (_) {
      localStorage.setItem("theme", newTheme)
      document.documentElement.setAttribute("data-theme", newTheme)
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme, mounted])

  if (!mounted) {
    return (
      <button
        type="button"
        className="relative w-10 h-10 p-2 ml-8"
        disabled
        aria-label="Toggle theme"
      >
        <Moon className="absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative w-10 h-10 p-2 ml-8"
      title="Light/Dark"
      aria-label="Toggle theme"
      aria-live="polite"
    >
      <Moon className="absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </button>
  )
}