import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
      //Assign the process a const
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000)

      //return clean-up function
    return function cleanup(){
      clearInterval(timerID)
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
