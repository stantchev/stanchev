export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `преди ${yearsAgo} г.`;
  } else if (monthsAgo > 0) {
    formattedDate = `преди ${monthsAgo} мес.`;
  } else if (daysAgo > 0) {
    formattedDate = `преди ${daysAgo} дни`;
  } else {
    formattedDate = "Днес";
  }

  const fullDate = targetDate.toLocaleString("bg-BG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
