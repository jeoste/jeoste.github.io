// Fonction utilitaire pour concaténer des classes conditionnelles
export function cn(...inputs: Array<string | undefined | false | null | 0>): string {
  return inputs.filter(Boolean).join(' ');
} 