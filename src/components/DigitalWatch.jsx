import React, { useEffect, useState } from "react";
import "./DigitalWatch.css"; // Import CSS file for styling

const DigitalWatch = () => {
 const [showDate, setShowDate] = useState("");

 const handleShowTime = () => {
  const newDate = new Date();
  const currentDate = newDate.toLocaleDateString();
  const currentTime = newDate.toLocaleTimeString();
  setShowDate(`${currentTime} | ${currentDate}`);
 };

 useEffect(() => {
  const interval = setInterval(() => {
   handleShowTime();
  }, 1000); // Update every second
  return () => clearInterval(interval);
 }, []);

 return (
  <div className="digital-watch-container">
   <div className="digital-watch">
    <h2>{showDate}</h2>
   </div>
  </div>
 );
};

export default DigitalWatch;
