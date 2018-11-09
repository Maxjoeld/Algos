function findMaxProfits(prices) {
  let minValue = prices[0];
  let maxValue = prices[1] - minValue;

  for (let i = 1; i < prices.length; i++) {
    let currentVal = prices[i];
    maxValue = Math.max(currentVal - minValue, maxValue);
    minValue = Math.min(currentVal, minValue);
  }
  return maxValue;
}