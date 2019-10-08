import React from 'react';

// Components
import { DayRectangle } from 'components';

export const DaysNavigation = ({ trackedHistory, handleDaySelect, selectedDay }) => {
  const isActive = timePeriod => {
    return selectedDay && selectedDay.date.dayName === timePeriod.date.dayName ? true : false;
  };

  return (
    <div className="days-navigation">
      {trackedHistory.map(timePeriod => (
        <DayRectangle
          key={timePeriod.date.dayName}
          date={timePeriod.date}
          handleDaySelect={() => handleDaySelect(timePeriod)}
          isActive={isActive(timePeriod)}
        />
      ))}
    </div>
  );
};
