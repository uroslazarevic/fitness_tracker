import React from 'react';

export const ActivityRectangle = ({ activityTitle, activitySubtitle, activityResult, iconName, className }) => {
  return (
    <div className={`activity-day ${className}`}>
      <div className="activity-description">
        <span className="activity-icon">
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
