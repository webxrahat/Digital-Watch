import React, { useEffect, useState } from "react";

const DigitalWatch = () => {
 const [showDate, setShowDate] = useState(0);

 const handleShowTime = () => {
  const newDate = new Date();

  const currentDate = newDate.toLocaleDateString();
  const currentTime = newDate.toLocaleTimeString();

  setShowDate(`${currentTime} ${currentDate}`);
 };

 useEffect(() => {
  const interval = setInterval(() => {
   handleShowTime();
  }, [1000]);
  return () => clearInterval(interval);
 }, []);

 //  console.log("hi");

 return (
  <div>
   <h2>{showDate}</h2>
  </div>
 );
};

export default DigitalWatch;
