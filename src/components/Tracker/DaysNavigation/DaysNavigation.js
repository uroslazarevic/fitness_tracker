import React from 'react';

import { DayRectangle } from 'components';

export const DaysNavigation = ({ trackedHistory }) => {
  return (
    <div className="days-navigation">
      {trackedHistory.map(timePeriod => (
        <DayRectangle key={timePeriod.date.dayName} date={timePeriod.date} />
      ))}
    </div>
  );
};
