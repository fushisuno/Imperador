/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_PHONE_NUMBER: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_GOOGLE_FORMS_URL: string
  readonly VITE_GOOGLE_SCRIPT_URL: string
  readonly VITE_DRIVE_FOLDER_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}