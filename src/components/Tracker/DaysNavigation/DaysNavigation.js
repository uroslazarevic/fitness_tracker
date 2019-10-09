import React from 'react';

// Components
import { DayRectangle } from 'components';

export const DaysNavigation = ({ trackedHistory, handleDaySelect, selectedDay }) => {
  const isActive = timePeriod => {
    return selectedDay && selectedDay.date.dayName === timePeriod.date.dayName ? true : false;
  };

  const onDaySelect = timePeriod => () => {
    // If same date is selected => return
    if (selectedDay && timePeriod.date.dayName === selectedDay.date.dayName) return;
    handleDaySelect(timePeriod);
  };

  return (
    <div className="days-navigation">
      {trackedHistory.map(timePeriod => (
        <DayRectangle
          key={timePeriod.date.dayName}
          date={timePeriod.date}
          handleDaySelect={() => onDaySelect(timePeriod)}
          isActive={isActive(timePeriod)}
        />
      ))}
    </div>
  );
};
