export const isValidDate = function (value) {
  return value instanceof Date && !isNaN(value.getTime());
};

export const formatDate = function (date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};