import { GET_COUNTRIES } from "../actions/actions";
import countriesData from "../data/countries.json";

// app's initial state
const initialState = {
	countries: countriesData
};

// reducer
const countriesReducer = function(state = initialState, action) {
	switch (action.type) {
		case GET_COUNTRIES:
			return Object.assign({}, state, { countries: state.countries });
	}
	return state;
};

export default countriesReducer;
