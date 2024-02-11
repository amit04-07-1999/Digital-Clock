import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  // State to store the current time
  const [time, setTime] = useState(new Date());

  // UseEffect to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="digital-clock">
      <h1>
        {time.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </h1>
    </div>
  );
};

export default DigitalClock;