let citiesOnly = (arr) => {
  return arr.map((elem) => {
    return elem && elem.city ? elem.city : null;
  });
};

let upperCasingStates = (arr) => {
  return arr.map((elem) => {
    return elem
      ? elem
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")
      : null;
  });
};

let fahrenheitToCelsius = (arr) => {
  if (typeof arr === "string") {
    arr = arr.slice(0, -2);
    return Math.floor((arr - 32) * (5 / 9)) + "°C";
  }
  return arr.map((elem) => {
    elem = elem.slice(0, -2);
    return elem !== undefined && elem !== null
      ? Math.floor((elem - 32) * (5 / 9)) + "°C"
      : null;
  });
};

let fahrenheitToCelsiusSingle = (temp) => {
  temp = trim(temp);
  temp = temp.slice(0, -2);
  return Math.floor((temp - 32) * (5 / 9)) + "°C";
};

let trimTemp = (arr) => {
  return arr.map((elem) => {
    return elem && elem.temperature !== undefined
      ? {
          city: elem.city,
          state: elem.state,
          region: elem.region,
          temperature: trim(elem.temperature),
        }
      : null;
  });
};

let tempForecasts = (arr) => {
  return arr.map((elem) => {
    let temperature = fahrenheitToCelsiusSingle(elem.temperature);
    return (
      temperature +
      "elsius in " +
      elem.city
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ") +
      ", " +
      elem.state
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    );
  });
};

function trim(str) {
  let res = "";
  str.split("").forEach((elem) => {
    if (elem != " ") {
      res += elem;
    }
  });
  return res;
}


// console.log(fahrenheitToCelsiusSingle(' 21° F'));
