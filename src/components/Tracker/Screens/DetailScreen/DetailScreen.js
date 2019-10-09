import React from 'react';

// Utils
import { calculateActivities } from 'utils';

export const DetailScreen = ({ selectedDay }) => {
  const activity = calculateActivities(selectedDay.steps);
  const setActivityMark = () => {
    return selectedDay.steps > 2000 ? 'Excelent' : 'Very good';
  };

  return (
    <div className="activity-details">
      <div className="top-content">
        <span className="activity-icon">
          <i className="material-icons">directions_run</i>
        </span>
        <div className="activity-info-name">Steps</div>
        <div className="activity-result">{selectedDay && selectedDay.steps.toLocaleString()}</div>
      </div>
      <div className="middle-content">
        <div className="activity-mark">{setActivityMark()}</div>
        <div className="support-text">Keep going!</div>
      </div>
      <div className="bottom-content">
        {Object.keys(activity).map(key => {
          if (key === 'duration') {
            return (
              <div key={key} className={`column ${key}-column`}>
                <div className="unit">{activity[key].hours.unit}</div>
                <div className="result">
                  {(activity[key].hours.value + activity[key].minutes.value / 60).toFixed(2)}
                </div>
              </div>
            );
          }
          return (
            <div key={key} className={`column ${key}-column`}>
              <div className="unit">{activity[key].unit}</div>
              <div className="result">{activity[key].value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
