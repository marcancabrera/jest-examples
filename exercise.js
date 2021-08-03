const sortString = (input) => {
  var result = "";
  var saveOrder = {};
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (input) {
    var words = input.split(" ");
    words.forEach((word) => {
      numbers.forEach((number) => {
        if (word.includes(number)) {
          saveOrder[`${number}`] = word;
        }
      });
    });
  }
  Object.values(saveOrder).forEach((item) => {
    result += item + ' ';
  });
  return result.slice(0,-1);
};

module.exports = sortString;
