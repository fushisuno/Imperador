interface Config {
  whatsapp: string;
  phone: string;
  instagram: string;
  googleScriptUrl: string;
  googleFormsUrl: string;
  driveFolderId: string;
  companyName: string;
}

export const config: Config = {
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '',
  phone: import.meta.env.VITE_PHONE_NUMBER || '',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || '',
  googleScriptUrl: import.meta.env.VITE_GOOGLE_SCRIPT_URL || '',
  googleFormsUrl: import.meta.env.VITE_GOOGLE_FORMS_URL || 'https://docs.google.com/forms/d/example/form',
  driveFolderId: import.meta.env.VITE_DRIVE_FOLDER_ID || '',
  companyName: 'Imperador do Chopp',
};
