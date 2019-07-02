const filters = {
  /**
   * in the array of objects (5 days for several objects for each day)
   * we have a look for each new day and take its condition
   * @param list {Array} array of objects with information about condition
   * @param timeShift {Number} - shift in seconds from UTC
   * @returns {Array} list of conditions for each day
   */
  getFilteredList(list, timeShift) {
    if (!Array.isArray(list)) return [];
    const conditions = [];
    const timezone = typeof timeShift !== 'number' || Number.isNaN(timeShift) ? 0 : timeShift;
    list.forEach((el, index, arr) => {
      const currentDate = new Date((el.dt - timezone) * 1000);
      const currentDay = currentDate.getUTCDate();
      let prevDate;
      let prevDay = currentDay;
      const prevEl = arr[index - 1];
      if (prevEl) {
        prevDate = new Date((prevEl.dt - timezone) * 1000);
        prevDay = prevDate.getUTCDate();
      }
      if (
        currentDay !== prevDay
        && el.weather
        && typeof el.weather[0] === 'object' && el.weather[0] !== null
      ) {
        const obj = {
          dt: el.dt,
          temp: el.main.temp,
          tempMax: el.main.temp_max,
          tempMin: el.main.temp_min,
          id: el.weather[0].id,
          description: el.weather[0].description,
          main: el.weather[0].main,
        };
        conditions.push(obj); // set info of first condition
      }
    });
    return conditions;
  },
};

export default filters;
