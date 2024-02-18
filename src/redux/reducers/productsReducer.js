const initialState = {
    pending: false,
    error: "",
    count: 0,
    products: [],
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PENDING':
        return {...state, pending: true, error: "", products: [], count: 0};
      case 'FETCH_SUCCESS':
        return {...state, pending: false, error: "", products: action.payload.rows, count: action.payload.count};
      case 'FETCH_FAILURE':
        return {...state, pending: false, error: action.payload, products: [], count: 0};  
      default:
        return state;
    }
  }
  
  export default productsReducer;