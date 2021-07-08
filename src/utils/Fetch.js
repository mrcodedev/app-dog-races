const myFetch = ({ endpoint, method = "GET", data = {} }) => {
  return fetch(`${endpoint}`, {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: method !== "GET" ? JSON.stringify(data) : null,
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch((error) => {
      console.error("[Fetch Status]: ", error);
    });
};

export default myFetch;
