import React from 'react';

// Components
import { ScreenHeader, DaysNavigation, MainScreen, DetailScreen } from 'components';

// Utilis
import { trackerAPI } from 'utils';

export class Tracker extends React.Component {
  state = { trackedHistory: [], selectedDay: '' };

  async componentDidMount() {
    const history = await trackerAPI.getTrackedHistory();
    this.setState({ trackedHistory: history });
  }

  handleDaySelect = selectedDay => () => this.setState({ selectedDay });

  render() {
    const { trackedHistory, selectedDay } = this.state;
    if (trackedHistory.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div className="tracker">
        <div className="screen">
          <ScreenHeader
            className={!selectedDay ? 'welcome' : 'detail'}
            selectedDay={selectedDay}
            setMainScreen={() => this.setState({ selectedDay: '' })}
          />
          <DaysNavigation
            handleDaySelect={this.handleDaySelect}
            selectedDay={selectedDay}
            trackedHistory={trackedHistory}
          />
          {!selectedDay ? <MainScreen trackedHistory={trackedHistory} /> : <DetailScreen selectedDay={selectedDay} />}
        </div>
      </div>
    );
  }
}
