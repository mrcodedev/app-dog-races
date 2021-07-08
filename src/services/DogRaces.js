import myFetch from "../utils/Fetch";

export const getRaces = () => {
  return myFetch({
    endpoint: "/breeds/list/all",
    method: "GET",
  });
};

export const getSelectedRace = (selectedRace) => {
  return myFetch({
    endpoint: `/breed/${selectedRace}/images`,
    method: "GET",
  });
};
