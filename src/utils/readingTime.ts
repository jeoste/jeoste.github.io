/**
 * Calculate the estimated reading time of a text
 * @param content - The content of the text
 * @param wordsPerMinute - Number of words per minute (default: 200)
 * @returns The reading time in minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
  // Count the words (separated by spaces)
  const words = content.trim().split(/\s+/).length;
  
  // Calculate the reading time in minutes
  const readingTime = Math.ceil(words / wordsPerMinute);
  
  return readingTime;
}

/**
 * Format the reading time for display
 * @param minutes - The reading time in minutes
 * @returns The formatted text (ex: "5 min read", "1 min read")
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return "1 min read time";
  }
  return `${minutes} min read time`;
} 