export const dateConverter = (date) => {
  const convertedDate = date.substring(0, 10).split('-').reverse().join('.');
  return convertedDate;
};
