const icons = {
  /**
   * It compares the condition code with the list of presented codes to find the icon corresponding to the code
   * @param conditionId {Number} - code of condition
   * @returns {Object}
   * iconName {String} - condition icon name if condition is present in the list of codes, otherwise 'sunny'
   * text {String} - condition text if condition is present in the list of codes, otherwise 'sunny'
   */
  getIconInfo(conditionId) {
    let iconName = '';
    switch (conditionId) {
      case 800: // clear sky
        iconName = 'clear-sky';
        break;
      case 801: // few clouds
        iconName = 'few-clouds';
        break;
      case 802: // scattered clouds
        iconName = 'scattered-clouds';
        break;
      case 803: // broken clouds
        iconName = 'broken-clouds';
        break;
      case 500: // light rain
        iconName = 'light-rain';
        break;
      case 521: // shower rain
        iconName = 'shower-rain';
        break;
      case 200: // thunderstorm with light rain
        iconName = 'thunderstorm-with-light-rain';
        break;
      case 201: // thunderstorm with rain
        iconName = 'thunderstorm-with-rain';
        break;
      case 202: // thunderstorm with heavy rain
        iconName = 'thunderstorm-with-heavy-rain';
        break;
      case 601: // rain and snow
        iconName = 'rain-and-snow';
        break;
      case 616: // snow
        iconName = 'snow';
        break;
      case 701: // mist
        iconName = 'mist';
        break;
      case 781: // tornado
        iconName = 'tornado';
        break;
      default:
        iconName = 'sunny';
    }
    return iconName;
  },
};

export default icons;
