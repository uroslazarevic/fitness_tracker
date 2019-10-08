import React from 'react';

export const ActivityRectangle = ({ activityTitle, activitySubtitle, activityResult, iconName, className }) => {
  return (
    <div className={`activity-day ${className}`}>
      <div className="activity-description">
        <span>
          <i className="material-icons">{iconName}</i>
        </span>
        <div className="header-content">
          <div className="title">{activityTitle}</div>
          <div className="subtitle">{activitySubtitle}</div>
        </div>
      </div>
      <div className="activity-result">{activityResult}</div>
    </div>
  );
};
