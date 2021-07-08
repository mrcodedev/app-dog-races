export const capitalizeFirstLetter = (data) => {
  return (
    data[0].toString().toUpperCase() + data.toString().toLowerCase().slice(1)
  );
};
