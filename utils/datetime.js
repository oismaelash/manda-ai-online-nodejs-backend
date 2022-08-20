exports.datetimeLocaleCurrent = () => {
  var dateNow = new Date()
    .toLocaleDateString()
    .replace(/\//g, "-")
    .split("-")
    .reverse()
    .join()
    .replace(/,/g, "-");
  var timeNow = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  var datetimeLocaleCurrent = new Date(`${dateNow}, ${timeNow}`)
    .getTime()
    .toString();
  return datetimeLocaleCurrent;
};
