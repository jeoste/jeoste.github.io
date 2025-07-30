import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"
import type { ToasterProps } from "sonner"

// Exposer les toasts globalement pour l'utilisation dans les scripts inline
if (typeof window !== "undefined") {
  (window as any).toast = toast;
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  // define the colors according to the theme
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
      // Mode clair
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
      {...props}
    />
  )
}

export { Toaster, toast }
