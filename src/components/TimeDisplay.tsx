import { TimeDisplayClient } from "./TimeDisplayClient";

const TimeDisplay = ({
  timeZone,
  locale = "bg-BG",
}: {
  timeZone: string;
  locale?: string;
}) => {
  // Server-side initial time
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const initialTime = new Intl.DateTimeFormat(locale, options).format(now);

  return <TimeDisplayClient timeZone={timeZone} locale={locale} initialTime={initialTime} />;
};

export default TimeDisplay;
