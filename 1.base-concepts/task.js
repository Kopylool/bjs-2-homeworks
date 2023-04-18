"use strict"
function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let arr = [];
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr;
}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent === 'string') {
    percent = Number(percent);
  }
  if (typeof contribution === 'string') {
    contribution = Number(contribution);
  }
  if (typeof amount === 'string') {
    amount = Number(amount);
  }
  if (typeof countMonths === 'string') {
    countMonths = Number(countMonths);
  }

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  percent = percent / 100 / 12;
  let body = amount - contribution;
  let monthlyPayment =
    body *
    (percent + percent / (Math.pow(1 + percent, countMonths) - 1));
  let totalAmount = monthlyPayment * countMonths;

  return parseFloat(totalAmount.toFixed(2));
}