export default (function helpers() {
  const unid = () => {
    return (
      Math.floor(Math.random() * Date.now())
        .toString(Math.floor(Math.random() * 30))
        .substring(1, 8) +
      "-" +
      Math.floor(Math.random() * Date.now())
        .toString(Math.floor(Math.random() * 24))
        .substring(1, 8)
    );
  };
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  return { unid, capitalize };
})();
