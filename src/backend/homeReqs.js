
import { routes } from "./index";

export const search = async (obj) => {
  let response = await fetch(routes.searchAdress, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "name": obj.name,
      "sYear": obj.sYear,
      "eYear": obj.eYear,
      "sRank": obj.sRank,
      "eRank": obj.eRank,
      "startIndex": obj.startIndex,
      "length": obj.length
    })
  });

  let responseJson = await response.json();

  if (responseJson.success) {
    return responseJson;
  } else {
    return null;
  }
}

export const getRandomMovies = async () => {
  let response = await fetch(routes.getRandomMoviesAdress, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  let responseJson = await response.json();

  if (responseJson.success) {
    return responseJson;
  } else {
    return null;
  }
}