export const fetchData = (url) => {
    return async dispatch => {
        dispatch({ type: 'FETCH_PENDING' });
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE', payload: error.message });
        }
    };
};