import React from 'react';

// Components
import { ActivityRectangle } from 'components';

// Utils
import { calculateActivities } from 'utils';

export const MainScreen = ({ trackedHistory }) => {
  const totalActivity = () => {
    const totalSteps = trackedHistory.reduce((acc, x) => {
      acc += x.steps;
      return acc;
    }, 0);
    const { calories, duration } = calculateActivities(totalSteps);
    return {
      averageDuration: `${duration.hours.value / trackedHistory.length}${duration.hours.unit.substring(0, 1)} ${duration
        .minutes.value / trackedHistory.length}${duration.minutes.unit}`,
      calories: calories.value,
      totalSteps,
    };
  };

  const activity = totalActivity();
  return (
    <div className="main-activities">
      <ActivityRectangle
        className="average-duration"
        activityTitle={'Activity'}
        activitySubtitle={'Average'}
        activityResult={activity.averageDuration}
        iconName={'access_alarm'}
      />
      <ActivityRectangle
        className="total-steps"
        activityTitle={'Steps'}
        activitySubtitle={'Total'}
        activityResult={activity.totalSteps.toLocaleString()}
        iconName={'directions_run'}
      />
      <ActivityRectangle
        className="calories-burned"
        activityTitle={'Calories'}
        activitySubtitle={'Total Burned'}
        activityResult={activity.calories}
        iconName={'whatshot'}
      />
    </div>
  );
};
