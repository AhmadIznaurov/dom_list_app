export const loadUsers = () => {
  return (dispatch) => {
    dispatch({ type: "users/load/start" });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "users/load/success",
          payload: data,
        });
      });
  };
};

export const loadAlbums = (id) => {
  return (dispatch) => {
    dispatch({ type: "albums/load/start" });

    fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "albums/load/success",
          payload: data,
        });
      });
  };
};
