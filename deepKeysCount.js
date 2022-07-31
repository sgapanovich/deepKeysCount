function deepParametersCount(object, paramName = "responseBody") {
  let params = Object.keys(object);
  let counter = 0;

  for (let i = 0; i < params.length; i++) {
    if (
      typeof object[params[i]] === "object" &&
      object[params[i]] !== null &&
      !Array.isArray(object[params[i]])
    ) {
      counter++;
      deepParametersCount(object[params[i]], paramName + "." + params[i]);
    } else if (
      Array.isArray(object[params[i]]) &&
      object[params[i]].length > 0 &&
      typeof object[params[i]][0] === "object"
    ) {
      counter++;
      deepParametersCount(object[params[i]], paramName + "." + params[i]);
    } else {
      counter++;
    }
  }
  console.log(counter + " parameter(s) in '" + paramName + "' object");
}
