/**
 * @description Grabs the value of a cookie based on a provided key.
 * @param {string} key - A key for a cookie.
 * @return {string} - The value of a cookie as a string.
 */
export function getCookie(key: string): string {
  const cookie = document.cookie.split('; ').find(
    (item: string) => item.startsWith(key))?.split('=')[1];
  return cookie || '';
}

/**
 * @description Converts a number to a shorthand string.
 * Additionally rounds to cuts decimal places to two. Ex. 200M
 * @param {number} num - A number to convert.
 * @return {string} A converted string thats shorthand for a large number
 * or just the number if smaller than one million.
 */
export function convertToNumberWithSuffix(num: number): string {
  const million = 1000000;
  const billion = 1000000000;
  const trillion = 1000000000000;
  if (num < million && num > (million * -1)) {
    return new Intl.NumberFormat().format(num);
  } else if ((num >= million && num < billion) ||
      (num <= (million * -1) && num > (billion * -1))) {
    const roundedNum = num/million;
    return `${roundedNum.toFixed(2)}M`;
  } else if ((num >= billion && num < trillion) ||
      (num <= (billion * -1) && num > (trillion * -1))) {
    const roundedNum = num/billion;
    return `${roundedNum.toFixed(2)}B`;
  } else {
    const roundedNum = num/trillion;
    return `${roundedNum.toFixed(2)}T`;
  }
}

/**
 * @description Converts a string representing a number to a shorthand
 * number string. If the string cannot be converted to a number, return
 * the string. Additionally rounds to cuts decimal places to two. Ex. 200M
 * @param {number} num - A string to convert.
 * @return {string} A converted string thats shorthand for a large number,
 *  just the number if smaller than one million, or the original string.
 */
export function handleStringToNumberWithSuffix(num: string): string {
  const number = parseInt(num);
  if (!number) {
    return num;
  }
  return convertToNumberWithSuffix(number);
}

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const CHART_COLORS = [
  '#24A3A1',
  '#12adb4',
  '#2e7cc5',
  '#f15815',
  '#07a073',
  '#15f158',
  '#7307a0',
];

export const NO_DRAG = 'no-drag';
export const DECIMAL_PLACES = 2;

/**
 * @description Calculates the diffirence in time in days or hours
 *    from a provided time against the current time.
 * @param time - The time to compare against the current time.
 * @return The diffirence with an appropriate suffix. Ex. '1D' or '2H'.
 */
export function calculateRecentTime(time: number): string {
  const diffirence = new Date().getTime() - new Date(time).getTime();
  const numDays = Math.round(diffirence / (1000 * 60 * 60 * 24));
  const numHours = Math.round(diffirence / (1000 * 60 * 60));
  return (numDays > 0) ? `${numDays}D` : `${numHours}H`;
}
