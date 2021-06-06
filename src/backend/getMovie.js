import { routes } from "./index";

export const getMovieById = async (id) => {
	try {
		let response = await fetch(`${routes.getMovieById}/${id}`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		let responseJson = await response.json();
		return responseJson;
	} catch (error) {
        return null;
    }
};
