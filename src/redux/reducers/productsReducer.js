const initialState = {
    pending: false,
    error: "",
    products: [],
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PENDING':
        return {...state, pending: true, error: "", products: []};
      case 'FETCH_SUCCESS':
        return {...state, pending: false, error: "", products: action.payload};
      case 'FETCH_FAILURE':
        return {...state, pending: false, error: action.payload, products: []};  
      default:
        return state;
    }
  }
  
  export default productsReducer;