export function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]} ${splitedTitle[4]}`;
  return newTitle;
};

export const descShorten = (desc) => {
  const maxstring = 240;

  const newDesk = desc.substr(0, maxstring);
  return newDesk;
};
