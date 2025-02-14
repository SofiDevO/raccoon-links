import { useState, useEffect } from 'react';
import "./clock.css"
const Clock = () => {
  const getCurrentTime = () => {
    const currentDate = new Date();
    return {
      hours: currentDate.getHours() % 12 || 12,
      minutes: currentDate.getMinutes().toString().padStart(2, '0'),
      seconds: currentDate.getSeconds().toString().padStart(2, '0'),
      meridiem: currentDate.getHours() >= 12 ? 'PM' : 'AM'
    };
  };

  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <time
      className="flex items-center justify-center bg-gradient-to-b from-[rgba(106,0,255,0.14)] to-[rgba(255,255,255,0.14)] p-2 rounded-sm h-full max-h-[105px] gap-[.5px]"
    >
      <span className="dateTime hour">{time.hours}</span>
      <span  className="dateTime colon">:</span>
      <span className="dateTime minute">{time.minutes}</span>
      <span className="dateTime meridiem">{time.meridiem}</span>
      <span className="dateTime secconds absolute hidden">{time.seconds}</span>
    </time>
  );
};

export default Clock;