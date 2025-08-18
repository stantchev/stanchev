"use client";

import { useEffect, useState } from "react";

interface TimeDisplayClientProps {
  timeZone: string;
  locale?: string;
  initialTime: string;
}

export const TimeDisplayClient = ({ timeZone, locale = "bg-BG", initialTime }: TimeDisplayClientProps) => {
  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
}; 