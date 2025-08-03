"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RecaptchaTestProps {
  recaptchaSiteKey?: string
}

export default function RecaptchaTest({ recaptchaSiteKey }: RecaptchaTestProps) {
  const [recaptchaStatus, setRecaptchaStatus] = useState<string>("Chargement...")
  const [token, setToken] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const checkRecaptcha = () => {
      if (typeof window !== "undefined") {
        if (window.grecaptcha) {
          setRecaptchaStatus("✅ reCAPTCHA chargé")
        } else {
          setRecaptchaStatus("❌ reCAPTCHA non trouvé")
        }
      }
    }

    // Vérifier immédiatement
    checkRecaptcha()

    // Vérifier après un délai
    const timer = setTimeout(checkRecaptcha, 2000)
    return () => clearTimeout(timer)
  }, [])

  const testRecaptcha = async () => {
    if (!window.grecaptcha || !recaptchaSiteKey) {
      setRecaptchaStatus("❌ reCAPTCHA non disponible")
      return
    }

    setIsLoading(true)
    try {
      const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: "test" })
      setToken(token)
      setRecaptchaStatus("✅ Token obtenu: " + token.substring(0, 20) + "...")
    } catch (error) {
      setRecaptchaStatus("❌ Erreur: " + error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Test reCAPTCHA</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p><strong>Status:</strong> {recaptchaStatus}</p>
          <p><strong>Site Key:</strong> {recaptchaSiteKey || "Non défini"}</p>
          {token && <p><strong>Token:</strong> {token.substring(0, 50)}...</p>}
        </div>
        
        <Button 
          onClick={testRecaptcha} 
          disabled={isLoading || !window.grecaptcha}
        >
          {isLoading ? "Test en cours..." : "Tester reCAPTCHA"}
        </Button>
      </CardContent>
    </Card>
  )
} 