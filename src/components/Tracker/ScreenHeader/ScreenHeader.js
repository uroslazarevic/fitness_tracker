import React from 'react';

export const ScreenHeader = ({ className, setMainScreen, selectedDay }) => {
  return (
    <div className={`screen-header ${className}`}>
      {className === 'welcome' ? (
        <div className={`${className}-content`}>
          <div className="header-title">Welcome!</div>
          <div className="header-subtitle">Overview of your activity</div>
        </div>
      ) : (
        <div className={`${className}-content`}>
          <span onClick={setMainScreen}>
            <i className="material-icons">chevron_left</i>
          </span>
          <div className="header-content">
            <div className="header-title">{selectedDay && selectedDay.date.dayName}</div>
            <div className="header-subtitle">{selectedDay && selectedDay.date.LLFormat}</div>
          </div>
        </div>
      )}
    </div>
  );
};
