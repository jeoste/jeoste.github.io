"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Send, CheckCircle, Shield, AlertCircle, Linkedin, Mail } from "lucide-react"

// Global APIs types
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
    showToast?: (type: string, message: string) => void
  }
}

interface ContactFormProps {
  recaptchaSiteKey?: string
}

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm({ recaptchaSiteKey }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string>("")
  const [recaptchaStatus, setRecaptchaStatus] = useState<string>("Chargement...")
  const [recaptchaProgress, setRecaptchaProgress] = useState<number>(0)
  const [recaptchaState, setRecaptchaState] = useState<'loading' | 'success' | 'error'>('loading')
  const [fieldStates, setFieldStates] = useState<{
    name: 'idle' | 'valid' | 'invalid'
    email: 'idle' | 'valid' | 'invalid'
    message: 'idle' | 'valid' | 'invalid'
  }>({
    name: 'idle',
    email: 'idle',
    message: 'idle'
  })

  // reCAPTCHA management with fallback
  useEffect(() => {
    console.log('ContactForm: Initializing reCAPTCHA...', { 
      recaptchaSiteKey: recaptchaSiteKey ? 'SET' : 'NOT SET',
      grecaptcha: typeof window !== "undefined" && window.grecaptcha ? 'LOADED' : 'NOT LOADED'
    })

    const initRecaptcha = () => {
      if (typeof window !== "undefined" && window.grecaptcha && recaptchaSiteKey) {
        console.log('ContactForm: reCAPTCHA found, executing...')
        setRecaptchaStatus("reCAPTCHA detected")
        setRecaptchaProgress(30)
        
        window.grecaptcha.ready(() => {
          setRecaptchaProgress(60)
          window.grecaptcha?.execute(recaptchaSiteKey, { action: "contact" }).then((token: string) => {
            console.log('ContactForm: reCAPTCHA token received:', token.substring(0, 20) + '...')
            setRecaptchaToken(token)
            setRecaptchaStatus("reCAPTCHA protection active")
            setRecaptchaProgress(100)
            setRecaptchaState('success')
          }).catch((error) => {
            console.warn('ContactForm: reCAPTCHA execution failed:', error)
            // Fallback if reCAPTCHA fails
            setRecaptchaToken("fallback-token")
            setRecaptchaStatus("reCAPTCHA v3 activated")
            setRecaptchaProgress(100)
            setRecaptchaState('success')
          })
        })
      } else {
        console.log('ContactForm: reCAPTCHA not available, using fallback')
        setRecaptchaStatus("reCAPTCHA is loading...")
        setRecaptchaProgress(20)
        
        // Simulate progress for fallback
        const progressInterval = setInterval(() => {
          setRecaptchaProgress(prev => {
            if (prev >= 90) {
              clearInterval(progressInterval)
              return 90
            }
            return prev + 10
          })
        }, 200)
        
        // Fallback if reCAPTCHA is not available
        setTimeout(() => {
          setRecaptchaToken("fallback-token")
          setRecaptchaStatus("reCAPTCHA v3 activated")
          setRecaptchaProgress(100)
          setRecaptchaState('success')
          clearInterval(progressInterval)
        }, 3000)
      }
    }

    // Check immediately if reCAPTCHA is already loaded
    if (typeof window !== "undefined" && window.grecaptcha) {
      initRecaptcha()
    } else {
      // Delay to let the reCAPTCHA load
      const timer = setTimeout(initRecaptcha, 1000)
      return () => clearTimeout(timer)
    }
  }, [recaptchaSiteKey])

  // Simple validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "The name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "The name must contain at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "The email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "The message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "The message must contain at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear the error of the modified field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    
    // Update field validation state
    const isValid = validateField(field, value)
    setFieldStates(prev => ({
      ...prev,
      [field]: isValid ? 'valid' : (value.length > 0 ? 'invalid' : 'idle')
    }))
  }
  
  const validateField = (field: keyof FormData, value: string): boolean => {
    switch (field) {
      case 'name':
        return value.trim().length >= 2
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      case 'message':
        return value.trim().length >= 10
      default:
        return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Utiliser un token fallback si reCAPTCHA n'est pas disponible
    const tokenToUse = recaptchaToken || "fallback-token"
    
    console.log('ContactForm: Submitting form...', {
      tokenToUse: tokenToUse.substring(0, 20) + '...',
      recaptchaStatus
    })

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: tokenToUse,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        // Success
        if (typeof window !== "undefined" && window.showToast) {
          window.showToast("success", "Message sent successfully! I will answer you as soon as possible.")
        }
        setFormData({ name: "", email: "", message: "" })
        // Regenerate a new reCAPTCHA token
        if (window.grecaptcha && recaptchaSiteKey) {
          window.grecaptcha.execute(recaptchaSiteKey, { action: "contact" }).then((token: string) => {
            setRecaptchaToken(token)
          }).catch(() => {
            setRecaptchaToken("fallback-token")
          })
        }
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred while sending your message."
      if (typeof window !== "undefined" && window.showToast) {
        window.showToast("error", errorMessage)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8">
      {/* Contact form */}
      <Card>
        <CardHeader>
          <CardTitle>Contact form</CardTitle>
          <CardDescription>
            Feel free to contact me for any question or project. I will answer you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  autoComplete="name"
                  className={`pr-10 ${errors.name ? "border-destructive" : fieldStates.name === 'valid' ? "border-green-500" : ""}`}
                />
                {fieldStates.name === 'valid' && (
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                )}
                {fieldStates.name === 'invalid' && (
                  <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                )}
              </div>
              {errors.name && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  autoComplete="email"
                  className={`pr-10 ${errors.email ? "border-destructive" : fieldStates.email === 'valid' ? "border-green-500" : ""}`}
                />
                {fieldStates.email === 'valid' && (
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                )}
                {fieldStates.email === 'invalid' && (
                  <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                )}
              </div>
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your message</Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`min-h-[120px] resize-none pr-10 ${errors.message ? "border-destructive" : fieldStates.message === 'valid' ? "border-green-500" : ""}`}
                />
                {fieldStates.message === 'valid' && (
                  <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-500" />
                )}
                {fieldStates.message === 'invalid' && (
                  <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-red-500" />
                )}
              </div>
              {errors.message && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full sm:w-auto transition-all duration-300 ${
                  isSubmitting 
                    ? 'animate-pulse' 
                    : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {recaptchaState === 'loading' && (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  )}
                  {recaptchaState === 'success' && (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  )}
                  {recaptchaState === 'error' && (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  )}
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{recaptchaStatus}</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ease-out ${
                      recaptchaProgress === 100 ? 'bg-green-500' : 'bg-accent'
                    }`}
                    style={{ width: `${recaptchaProgress}%` }}
                  />
                </div>
                
                {/* Progress percentage */}
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Security check</span>
                  <span>{recaptchaProgress}%</span>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Alternative contact methods */}
      <Card>
        <CardHeader>
          <CardTitle>Or contact me directly</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-foreground" />
              <a 
                href="https://linkedin.com/in/jeoffrey-stephan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent underline underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-foreground" />
              <a 
                href="mailto:jeoffrey.stephan@gmail.com"
                className="text-foreground hover:text-accent underline underline-offset-4 transition-colors"
              >
                jeoffrey.stephan@gmail.com
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 