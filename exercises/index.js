const constants = ["a", "b", "h", "a", "i", "j", "m"];

const verify = (string) => {
  var errors = 0;
  for (let i = 0; i < string.length; i++) {
    errors += constants.includes(string.charAt(i)) ? 0 : 1;
  }
  return errors;
};

const printerError = (output) => {
  var result = "";
  var numerator = 0;
  numerator = output.length ? verify(output) : "empty output";
  result =
    numerator === "empty output" ? numerator : `${numerator}.${output.length}`;
  return result;
};

module.exports = printerError;
