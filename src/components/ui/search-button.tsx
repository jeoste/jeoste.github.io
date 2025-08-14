"use client"

import * as React from "react"

export function SearchButton() {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const onClick = React.useCallback(async () => {
    // Lazy load Pagefind UI only on demand
    try {
      // @ts-ignore
      const pagefind = await import("@pagefind/default-ui")
      // Create container if missing
      let container = document.getElementById("search-container")
      if (!container) {
        container = document.createElement("div")
        container.id = "search-container"
        container.style.position = "fixed"
        container.style.inset = "0"
        container.style.background = "rgba(0,0,0,0.35)"
        container.style.backdropFilter = "blur(6px)"
        container.style.zIndex = "9999"
        container.style.display = "grid"
        container.style.placeItems = "start center"
        container.style.paddingTop = "10vh"
        document.body.appendChild(container)
        container.addEventListener("click", (e) => {
          if (e.target === container) container?.remove()
        })
      }
      const panel = document.createElement("div")
      panel.setAttribute("role", "dialog")
      panel.setAttribute("aria-modal", "true")
      panel.setAttribute("aria-label", "Site search")
      panel.style.width = "min(720px, 92vw)"
      panel.style.maxHeight = "70vh"
      panel.style.overflow = "auto"
      panel.style.background = "var(--background)"
      panel.style.color = "var(--foreground)"
      panel.style.border = "1px solid var(--border)"
      panel.style.borderRadius = "12px"
      panel.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)"
      panel.style.padding = "16px"
      container.appendChild(panel)

      const closeRow = document.createElement("div")
      closeRow.style.display = "flex"
      closeRow.style.justifyContent = "flex-end"
      const closeBtn = document.createElement("button")
      closeBtn.textContent = "Close"
      closeBtn.className = "px-2 py-1 text-sm border rounded"
      closeBtn.addEventListener("click", () => {
        container?.remove()
        // restore focus
        buttonRef.current?.focus()
      })
      closeRow.appendChild(closeBtn)
      panel.appendChild(closeRow)

      // @ts-ignore - PagefindUI constructor
      new pagefind.PagefindUI({
        element: panel,
        showImages: false,
        translations: { placeholder: "Search articles..." },
      })

      // Focus trap basic + ESC
      const onKey = (ev: KeyboardEvent) => {
        if (ev.key === "Escape") {
          container?.remove()
          buttonRef.current?.focus()
        }
      }
      document.addEventListener("keydown", onKey, { once: true })
    } catch {
      // silently ignore
    }
  }, [])

  return (
    <button
      type="button"
      className="relative w-10 h-10 p-2 ml-2"
      aria-label="Open search"
      title="Search"
      onClick={onClick}
      ref={buttonRef}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 104.168 12.047l3.768 3.767a.75.75 0 101.06-1.06l-3.767-3.768A6.75 6.75 0 0010.5 3.75zm-5.25 6.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z" clipRule="evenodd" />
      </svg>
    </button>
  )
}


