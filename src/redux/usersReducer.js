const initialState = {
  users: [],
  loading: false,
};

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "users/load/start":
      return {
        ...state,
        loading: true,
      };
    case "users/load/success":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    default:
      return state;
  }
};
