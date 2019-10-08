import React from 'react';

export const DayRectangle = ({ date, handleDaySelect, isActive }) => {
  return (
    <div onClick={handleDaySelect()} className={`rectangle-day ${isActive ? 'rectangle-active' : ''}`}>
      <div className="day-name">{date.dayName.substring(0, 3)}</div>
      <div className="day-in-month">{date.dayInMonth}</div>
    </div>
  );
};
