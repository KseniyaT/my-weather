import formater from '../../../../scripts/components/results/helpers/formater';

const { getFormatedDate, getFormatedTemperature } = formater;

describe('result helpers', () => {

  it('getFormatedDate should return formated date or empty string', () => {
    expect(getFormatedDate()).toEqual('');
    expect(getFormatedDate(null)).toEqual('');
    expect(getFormatedDate(1562015256)).toEqual('01.07.2019');
  });

  it('getFormatedTemperature should return value in Celsius or 0', () => {
    expect(getFormatedTemperature()).toEqual(0);
    expect(getFormatedTemperature(null)).toEqual(0);
    expect(getFormatedTemperature('string')).toEqual(0);
    expect(getFormatedTemperature(275.56788)).toEqual(2.6);
  });

});