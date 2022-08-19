exports.datetimeLocaleCurrent = () => {
  var dateNow = new Date()
    .toLocaleDateString()
    .replaceAll("/", "-")
    .split("-")
    .reverse()
    .join()
    .replaceAll(",", "-");
  var timeNow = new Date().toLocaleString().split(", ")[1];
  var datetimeLocaleCurrent = new Date(`${dateNow}, ${timeNow}`).getTime().toString();

  return datetimeLocaleCurrent;
};
