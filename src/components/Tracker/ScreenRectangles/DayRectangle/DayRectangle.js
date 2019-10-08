import React from 'react';

export const DayRectangle = ({ date }) => {
  return (
    <div className="rectangle-day">
      <div className="day-name">{date.dayName.substring(0, 3)}</div>
      <div className="day-in-month">{date.dayInMonth}</div>
    </div>
  );
};
