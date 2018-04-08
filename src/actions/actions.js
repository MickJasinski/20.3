export const GET_COUNTRIES = "GET_COUNTRIES";
export const DELETE_COUNTRY = "DELETE_COUNTRY";
export const GET_COUNTRY = "GET_COUNTRY";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const SET_CONTINENT = "SET_CONTINENT";


/* * * * * action creators * * * * */ 

// list of all available countries
export function getCountries() {
	return {
		type: GET_COUNTRIES
	};
}

// delete a country
export function deleteCountry(id) {
	return {
		type: DELETE_COUNTRY,
		id
	};
}

// single country info
export function getCountry(id) {
	return {
		type: GET_COUNTRY,
		id
	};
}

// search country by name
export function searchCountries(searchText) {
	return {
		type: SEARCH_COUNTRIES,
		searchText
	};
}

// list of available countries on specific continent
export function setContinent(name) {
	return {
		type: SET_CONTINENT,
		name
	};
}
