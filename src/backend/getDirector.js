import { routes } from "./index";

export const getDirectorById = async (id) => {
	try {
		let response = await fetch(`${routes.getDirectorById}/${id}`, {
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
