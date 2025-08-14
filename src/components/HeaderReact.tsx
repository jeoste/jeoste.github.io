"use client"

import * as React from "react"
import { SITE } from "@/config"
import { NavButton } from "@/components/ui/nav-button"
import { MenuButton } from "@/components/ui/menu-button"
import { Hr } from "@/components/ui/hr"
import { ThemeToggle } from "@/components/ThemeToggle"

interface HeaderProps {
  currentPath: string
}

export function HeaderReact({ currentPath }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const isActive = (path: string) => {
    // Remove trailing slash from the provided path
    path = path.replace(/\/$/, '')
    
    // For home page
    if (path === "/" && currentPath === "") return true
    
    // For other pages - only match exact paths
    return currentPath === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }



  const navItems = [
    { href: "/", label: "home" },
    { href: "/portfolio", label: "portfolio" },
    { href: "/articles", label: "articles" },
    { href: "/vault", label: "vault" },
    { href: "/contact", label: "contact" },
    { href: "/achievements", label: "achievements" }
  ]

  return (
    <header style={{ background: "transparent" }}>
      <a
        id="skip-to-content"
        href="#main-content"
        className="absolute -top-full left-16 z-50 bg-background px-3 py-2 text-accent backdrop-blur-lg transition-all focus:top-4"
      >
        Skip to content
      </a>
      <div
        id="nav-container"
        className="mx-auto flex max-w-5xl flex-col items-center justify-between sm:flex-row sm:items-center w-full p-4 sm:py-6 sm:px-8"
      >
        <a
          href="/"
          className="text-2xl leading-7 font-semibold whitespace-nowrap flex flex-col items-end"
        >
          <span>{SITE.title}</span>
          <span className="text-xs opacity-70 italic">v1.2.0</span>
        </a>
        
        <div className="flex items-center gap-4">
          <nav
            id="nav-menu"
            className="flex w-full flex-col items-center sm:ml-8 sm:flex-row sm:justify-end sm:space-x-6 sm:py-0"
          >
            <MenuButton 
              isOpen={isMenuOpen} 
              onToggle={toggleMenu} 
            />
            <ul
              id="menu-items"
              className={`
                mt-4 grid w-60 grid-cols-2 place-content-center gap-3
                ${isMenuOpen ? "" : "hidden"}
                sm:mt-0 sm:ml-0 sm:flex sm:w-auto sm:gap-x-6 sm:gap-y-0 sm:items-center
              `}
            >
              {navItems.map((item) => (
                <li key={item.href} className="col-span-2">
                  <NavButton 
                    href={item.href} 
                    isActive={isActive(item.href)}
                    className="block px-4 py-3 text-center font-medium sm:px-4 sm:py-2"
                  >
                    {item.label}
                  </NavButton>
                </li>
              ))}
            </ul>
          </nav>
          
          {SITE.lightAndDarkMode && <ThemeToggle />}
        </div>
      </div>
      <Hr />
    </header>
  )
}