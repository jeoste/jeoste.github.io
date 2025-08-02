/**
 * Calcule le temps de lecture estimé d'un texte
 * @param content - Le contenu du texte
 * @param wordsPerMinute - Nombre de mots par minute (défaut: 200)
 * @returns Le temps de lecture en minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
  // Compter les mots (séparés par des espaces)
  const words = content.trim().split(/\s+/).length;
  
  // Calculer le temps de lecture en minutes
  const readingTime = Math.ceil(words / wordsPerMinute);
  
  return readingTime;
}

/**
 * Formate le temps de lecture pour l'affichage
 * @param minutes - Le temps de lecture en minutes
 * @returns Le texte formaté (ex: "5 min read", "1 min read")
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return "1 min read";
  }
  return `${minutes} min read`;
} 