export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  if (isNaN(targetDate.getTime())) {
    console.error(`Invalid date string provided to formatDate: ${date}`);
    return date;
  }

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedRelativeDate = "";

  if (yearsAgo > 0) {
    formattedRelativeDate = `Преди ${yearsAgo}г.`;
  } else if (monthsAgo > 0) {
    formattedRelativeDate = `Преди ${monthsAgo}м.`;
  } else if (daysAgo > 0) {
    formattedRelativeDate = `Преди ${daysAgo}д.`;
  } else {
    formattedRelativeDate = "Днес";
  }

  const fullDate = targetDate.toLocaleString("bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedRelativeDate})`;
}
