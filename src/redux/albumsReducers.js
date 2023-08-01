const initialState = {
  albums: [],
  loading: false,
};

export const albumsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "albums/load/start":
      return {
        ...state,
        loading: true,
      };
    case "albums/load/success":
      return {
        ...state,
        loading: false,
        albums: action.payload,
      };

    default:
      return state;
  }
};
