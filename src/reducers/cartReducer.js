import { ADD_ITEM, DELETE_ITEM } from "../actions/actionTypes";
const initialStates = {
  noOfItems: 0,
};

const cartReducer = (state = initialStates, actions) => {
  switch (actions.type) {
    case ADD_ITEM:
      return {
        ...state,
        noOfItems: state.noOfItems + 1,
      };
    case DELETE_ITEM:
      return {
        ...state,
        noOfItems: state.noOfItems - 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
