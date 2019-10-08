import React from 'react';

import { ActivityRectangle } from 'components';

import { calculateActivities } from 'utils';

export const MainScreen = ({ trackedHistory }) => {
  const totalActivity = () => {
    const totalSteps = trackedHistory.reduce((acc, x) => {
      acc += x.steps;
      return acc;
    }, 0);
    const { calories, duration } = calculateActivities(totalSteps);
    const [hours, minutes] = duration.split(':').map(x => Number(x));
    return {
      averageDuration: `${hours / trackedHistory.length}h:${minutes / trackedHistory.length}min`,
      calories,
      totalSteps,
    };
  };

  return (
    <div className="main-activities">
      <ActivityRectangle
        className="average-duration"
        activityTitle={'Activity'}
        activitySubtitle={'Average'}
        activityResult={totalActivity().averageDuration}
        iconName={'access_alarm'}
      />
      <ActivityRectangle
        className="total-steps"
        activityTitle={'Steps'}
        activitySubtitle={'Total'}
        activityResult={totalActivity().totalSteps}
        iconName={'directions_run'}
      />
      <ActivityRectangle
        className="calories-burned"
        activityTitle={'Calories'}
        activitySubtitle={'Total Burned'}
        activityResult={totalActivity().calories}
        iconName={'whatshot'}
      />
    </div>
  );
};
