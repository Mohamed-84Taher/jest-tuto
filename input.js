const filterName = (name) => {
  if (!name) {
    return "Unknown";
  }
  if (name.trim().startsWith("_")) {
    name = name.substring(1);
  }
  if (name === "Hell") {
    throw new Error("This Name is not allowed");
  }
  return name.trim().substring(0, 10);
};

module.exports = filterName;
