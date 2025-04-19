import actionTypes from "../actionTypes";

const initialState = {
  users: [],
  isAdmin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.create:
      return state;

    case actionTypes.delete:
      return state;

    default:
      return state;
  }
};

export default userReducer;
