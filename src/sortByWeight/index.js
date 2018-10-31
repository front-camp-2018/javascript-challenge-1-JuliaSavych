/* eslint-disable-next-line */
const addNumbers = arr => {
  let mySum = 0;

  for (const value of arr) {
    mySum += Number(value);
  }
  return mySum;
};

export const sortByWeight = arr => arr.sort((a,b) => addNumbers(a) - addNumbers(b));
