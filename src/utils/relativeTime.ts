import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

// Fonction pour formater la date de manière relative en anglais
export function getRelativeTime(date: string | Date): string {
  const dayjsDate = dayjs(date);
  const now = dayjs();
  
  // Calculer les différences (positives si dans le futur, négatives si dans le passé)
  const diffInYears = now.diff(dayjsDate, "year");
  const diffInMonths = now.diff(dayjsDate, "month");
  const diffInWeeks = now.diff(dayjsDate, "week");
  const diffInDays = now.diff(dayjsDate, "day");
  const diffInHours = now.diff(dayjsDate, "hour");
  const diffInMinutes = now.diff(dayjsDate, "minute");
  
  // Déterminer si c'est dans le futur ou le passé
  const isFuture = diffInYears < 0 || diffInMonths < 0 || diffInWeeks < 0 || diffInDays < 0 || diffInHours < 0 || diffInMinutes < 0;
  
  // Utiliser les valeurs absolues pour les calculs
  const absYears = Math.abs(diffInYears);
  const absMonths = Math.abs(diffInMonths);
  const absWeeks = Math.abs(diffInWeeks);
  const absDays = Math.abs(diffInDays);
  const absHours = Math.abs(diffInHours);
  const absMinutes = Math.abs(diffInMinutes);
  
  // Logique pour choisir la bonne unité
  if (absYears >= 1) {
    const timeText = absYears === 1 ? "a year" : `${absYears} years`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else if (absMonths >= 1) {
    const timeText = absMonths === 1 ? "a month" : `${absMonths} months`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else if (absWeeks >= 1) {
    const timeText = absWeeks === 1 ? "a week" : `${absWeeks} weeks`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else if (absDays >= 1) {
    if (absDays === 1) {
      return isFuture ? "tomorrow" : "yesterday";
    } else {
      const timeText = `${absDays} days`;
      return isFuture ? `in ${timeText}` : `${timeText} ago`;
    }
  } else if (absHours >= 1) {
    const timeText = absHours === 1 ? "an hour" : `${absHours} hours`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else if (absMinutes >= 1) {
    const timeText = absMinutes === 1 ? "a minute" : `${absMinutes} minutes`;
    return isFuture ? `in ${timeText}` : `${timeText} ago`;
  } else {
    return isFuture ? "in a few seconds" : "a few seconds ago";
  }
}

// Message personnalisé pour les mises à jour
export function getUpdateMessage(date: string | Date): string {
  const relativeTime = getRelativeTime(date);
  return `Last update: ${relativeTime}`;
} 