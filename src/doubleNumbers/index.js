/* eslint-disable-next-line */
export const doubleNum = num => {
  const strNum = num + '';

  const reverseNum = strNum.split('').reverse().join('');
  return reverseNum.length > 1 && reverseNum === strNum ? num : num * 2;
};
