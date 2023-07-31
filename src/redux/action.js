export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: 'users/load/start'})


        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: 'users/load/success',
                     payload: data
                })
            })
    }
}