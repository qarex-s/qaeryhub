export const getGradientByValue = (value, coef = 1) => {
  value *= 100;

  var green = 60 + value / 2;
  var red = 180 - value;
  var blue = 50 + value / 3;

  var gradient = `linear-gradient(90deg, rgb(${red}, ${green / coef}, ${
    blue / coef
  }) 0%, rgb(${red * 1.8}, ${green * 2.2 - coef}, ${blue * 1.3 - coef}) 100%)`;

  return gradient;
};

export const getColourByValue = (value) => {
  value *= 100;

  var green = 122;
  var red = 180 - value;
  var blue = 50 + value / 3;

  var colour = `rgb(${red}, ${green}, ${blue}) 100%`;

  return colour;
};
