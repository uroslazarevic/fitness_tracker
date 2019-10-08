import React from 'react';

export const ScreenHeader = ({ className, backToMain, date }) => {
  // welcome and details
  return (
    <div className={`screen-header ${className}`}>
      {className === 'welcome' ? (
        <div className={`${className}-content`}>
          <div className="header-title">Welcome!</div>
          <div className="header-subtitle">Overview of your activity</div>
        </div>
      ) : (
        <div className={`${className}-content`}>
          <span>
            <i className="material-icons">chevron_left</i>
          </span>
          <div className="header-title">aaa</div>
          <div className="header-subtitle">bbb</div>
        </div>
      )}
    </div>
  );
};
