import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export const ScreenHeader = ({ className, setMainScreen, selectedDay, toggle }) => {
  const renderDetailHeaderContent = () => {
    return (
      <div className="header-content">
        <div className="header-title">{selectedDay && selectedDay.date.dayName}</div>
        <div className="header-subtitle">{selectedDay && selectedDay.date.LLFormat}</div>
      </div>
    );
  };

  return (
    <div className="screen-header">
      <SwitchTransition>
        <CSSTransition key={className === 'welcome'} timeout={{ enter: 200, exit: 200 }} classNames={'flip-header'}>
          {className === 'welcome' ? (
            <div className="welcome-content">
              <div className="header-title">Welcome!</div>
              <div className="header-subtitle">Overview of your activity</div>
            </div>
          ) : (
            <div className="detail-content">
              <span onClick={setMainScreen}>
                <i className="material-icons">chevron_left</i>
              </span>
              <SwitchTransition>
                <CSSTransition key={!toggle} timeout={{ enter: 200, exit: 200 }} classNames={'flip-header-content'}>
                  {!toggle ? renderDetailHeaderContent() : renderDetailHeaderContent()}
                </CSSTransition>
              </SwitchTransition>
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
