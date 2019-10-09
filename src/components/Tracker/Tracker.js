import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

// Components
import { ScreenHeader, DaysNavigation, MainScreen, DetailScreen } from 'components';

// Utils
import { trackerAPI } from 'utils';

export class Tracker extends React.Component {
  state = { trackedHistory: [], selectedDay: '', toggle: false };

  async componentDidMount() {
    const history = await trackerAPI.getTrackedHistory();
    this.setState({ trackedHistory: history });
  }

  handleDaySelect = selectedDay => {
    this.setState(prevState => ({ selectedDay, toggle: !prevState.toggle, activateToggle: true }));
  };

  render() {
    const { trackedHistory, selectedDay, toggle } = this.state;
    if (!trackedHistory.length) {
      return <div>Loading...</div>;
    }

    return (
      <div className="tracker">
        <div className="screen">
          <ScreenHeader
            toggle={toggle}
            className={!selectedDay ? 'welcome' : 'detail'}
            selectedDay={selectedDay}
            setMainScreen={() => this.setState({ selectedDay: '', toggle: false })}
          />
          <DaysNavigation
            handleDaySelect={this.handleDaySelect}
            selectedDay={selectedDay}
            trackedHistory={trackedHistory}
          />

          <SwitchTransition>
            <CSSTransition key={!selectedDay} timeout={{ enter: 200, exit: 200 }} classNames={'slide-screen'}>
              {!selectedDay ? (
                <MainScreen trackedHistory={trackedHistory} />
              ) : (
                <SwitchTransition>
                  <CSSTransition key={!toggle} timeout={{ enter: 200, exit: 200 }} classNames={'slide-screen'}>
                    {!toggle ? <DetailScreen selectedDay={selectedDay} /> : <DetailScreen selectedDay={selectedDay} />}
                  </CSSTransition>
                </SwitchTransition>
              )}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    );
  }
}
