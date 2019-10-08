/* eslint-disable no-undef */
import axios from 'axios';

import moment from 'moment';

const trackerAxios = axios.create({
  baseURL: process.env.REACT_APP_DATA_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getTrackedHistory = async () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const { data } = await trackerAxios.get();
  const history = data
    .map(i => {
      const LLFormat = moment(i.timestamp).format('LL');
      const day = moment(i.timestamp).day();
      const dayInMonth = moment(i.timestamp).date();
      return { steps: i.steps, date: { dayName: daysOfWeek[day], dayInMonth, LLFormat } };
    })
    .reduce((acc, x) => {
      const { steps, date } = x;
      const index = acc.findIndex(y => y.date.dayName === date.dayName);
      if (index !== -1) {
        acc[index] = { ...acc[index], steps: acc[index].steps + steps };
      } else {
        acc.push({ date, steps });
      }
      return acc;
    }, []);

  return history;
};

export { getTrackedHistory };
