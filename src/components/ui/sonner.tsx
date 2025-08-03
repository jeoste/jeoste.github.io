import { Toaster as Sonner, toast } from "sonner"
import type { ToasterProps } from "sonner"
import { useEffect, useState } from "react"

// Expose the toasts globally for use in inline scripts
if (typeof window !== "undefined") {
  (window as any).toast = toast;
  
  // Ensure that toast is available even if the component is not yet mounted
  (window as any).showToast = (type: string, message: string) => {
    if (toast && typeof toast[type as keyof typeof toast] === 'function') {
      (toast as any)[type](message);
    }
  };
}

const Toaster = ({ ...props }: ToasterProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Detect the current theme based on data-theme
  useEffect(() => {
    const updateTheme = () => {
      const dataTheme = document.documentElement.getAttribute("data-theme")
      setTheme(dataTheme === "dark" ? "dark" : "light")
    }

    // Check the initial theme
    updateTheme()

    // Observe the theme changes
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    })

    return () => observer.disconnect()
  }, [])

  // Define the colors according to the theme
  const getThemeColors = () => {
    if (theme === "dark") {
      return {
        "--normal-bg": "hsl(0, 0%, 15%)",
        "--normal-text": "hsl(0, 0%, 92%)",
        "--normal-border": "hsl(36, 94%, 52%, 0.3)",
        "--success-bg": "hsl(36, 94%, 52%, 0.15)",
        "--success-text": "hsl(36, 94%, 52%)",
        "--success-border": "hsl(36, 94%, 52%, 0.4)",
        "--error-bg": "hsl(0, 84%, 60%, 0.15)",
        "--error-text": "hsl(0, 84%, 60%)",
        "--error-border": "hsl(0, 84%, 60%, 0.4)",
      }
    } else {
        // Light mode
      return {
        "--normal-bg": "hsl(190, 60%, 96%)",
        "--normal-text": "hsl(222, 14%, 15%)",
        "--normal-border": "hsl(190, 100%, 38%, 0.3)",
        "--success-bg": "hsl(120, 84%, 60%, 0.1)",
        "--success-text": "hsl(120, 84%, 60%)",
        "--success-border": "hsl(120, 84%, 60%, 0.3)",
        "--error-bg": "hsl(0, 84%, 60%, 0.1)",
        "--error-text": "hsl(0, 84%, 60%)",
        "--error-border": "hsl(0, 84%, 60%, 0.3)",
      }
    }
  }

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={getThemeColors() as React.CSSProperties}
      position="top-right"
      richColors
      {...props}
    />
  )
}

export { Toaster, toast }
