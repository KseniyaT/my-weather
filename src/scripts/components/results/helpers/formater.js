const formater = {
  /**
   * It converts seconds to a string like 'dd.mm.yyyy'
   * @param sec {Number} - time of data in sec
   * @returns {String} corresponding line 'dd.mm.yyyy'
   */
  getFormatedDate(sec) {
    if (typeof sec !== 'number' || Number.isNaN(sec)) return '';
    const date = new Date(sec * 1000);
    const day = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();
    const month = (date.getUTCMonth() + 1) < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1;
    return `${day}.${month}.${date.getUTCFullYear()}`;
  },

  /**
   * It converts temperature in Kelvin to temperatures in Celsius
   * @param kelvin {Number} temperature in Kelvin
   * @returns {Number} corresponding value of temperatures in Celsius, rounded to one decimal
   */
  getFormatedTemperature(kelvin) {
    if (typeof kelvin !== 'number' || Number.isNaN(kelvin)) return 0;
    const diff = 273;
    return Math.round((kelvin - diff) * 10) / 10;
  },
};

export default formater;
