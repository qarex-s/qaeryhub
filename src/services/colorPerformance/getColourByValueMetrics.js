export const getColourByValueMetrics = (metricsItemValue) => {
  const value = metricsItemValue * 100;
  var red = 180 - value * 1.3;
  var green = 150 - red / 0.9;
  var blue = 50 + value / 5;

  var gradient = `linear-gradient(90deg, rgba(${red * 3.1}, ${green * 2.1}, ${
    blue * 1.5
  },0.8) 0%, rgba(${red * 2.5}, ${green * 2.3}, ${blue * 0.8},0.6) 70%)`;

  return gradient;
};
