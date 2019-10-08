import React, { useState, useEffect } from 'react';

import { ScreenHeader, DaysNavigation, MainScreen } from 'components';

// Utilis
import { trackerAPI } from 'utils';

export const Tracker = () => {
  const [trackedHistory, setTrackedHistory] = useState([]);

  useEffect(async () => {
    const history = await trackerAPI.getTrackedHistory();
    setTrackedHistory(history);

    console.log(history);
  }, []);

  if (trackedHistory.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tracker">
      <div className="screen">
        <ScreenHeader className="welcome" />
        <DaysNavigation trackedHistory={trackedHistory} />
        <MainScreen trackedHistory={trackedHistory} />
      </div>
    </div>
  );
};
