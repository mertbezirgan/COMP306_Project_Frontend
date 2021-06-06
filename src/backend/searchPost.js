
import { routes } from "./index";

export const search = async (obj) => {
    let response = await fetch(routes.searchAdress, {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "query": obj.name,
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
