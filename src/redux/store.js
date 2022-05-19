import { createStore } from "redux";
import shortid from "shortid";
import initialState from "./initialState";
import strContains from "../utils/strContains";

//selectors
export const getListById = ({ lists }, listId) =>
	lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns, listId }) =>
	columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getFilteredCards = ({ cards, searchString }, columnId) =>
	cards.filter(
		card => card.columnId === columnId && strContains(card.title, searchString)
	);

//action creators
export const addColumn = payload => ({ type: "ADD_COLUMN", payload });
export const addCard = payload => ({ type: "ADD-CARD", payload });
export const updateSearchString = payload => ({
	type: "UPADATE_SEARCH",
	payload,
});
export const addList = payload => ({ type: "ADD_LIST", payload });

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_COLUMN":
			return {
				...state,
				columns: [...state.columns, { ...action.payload, id: shortid() }],
			};
		case "ADD_CARD":
			return {
				...state,
				cards: [...state.cards, { ...action.payload, id: shortid() }],
			};
		case "UPDATE_SEARCHSTRING":
			return { ...state, searchString: action.payload };
		case "ADD_LIST":
			return {
				...action,
				lists: [...state.lists, { ...action.payload, id: shortid() }],
			};

		default:
			return state;
	}
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
