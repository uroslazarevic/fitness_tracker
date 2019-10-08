import BigNumber from 'bignumber.js';

export const calculateActivities = steps => {
  const STEP_DISTANCE_IN_METERS = 0.762;
  const BURNED_CALORIES_ON_STEP = 0.05;
  const STEP_TIME_DURATION_IN_SEC = 0.5;
  const HOUR_IN_SECONDS = 3600;

  const BNSteps = new BigNumber(steps);
  const duration = Number(
    BNSteps.times(STEP_TIME_DURATION_IN_SEC)
      .dividedBy(HOUR_IN_SECONDS)
      .toString()
  );
  const durationHours = Math.trunc(duration);
  const durationMin = Math.floor(new BigNumber(duration % 1).times(60).toString());

  return {
    distance: Math.floor(Number(BNSteps.times(STEP_DISTANCE_IN_METERS).toString())),
    calories: Math.floor(Number(BNSteps.times(BURNED_CALORIES_ON_STEP).toString())),
    duration: `${durationHours}:${durationMin}`,
  };
};
