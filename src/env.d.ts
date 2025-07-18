/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly RECAPTCHA_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
