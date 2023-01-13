export const initialState = {
  token: null,
  authenticated:false,
  
};



const reducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'SET_TOKEN':
        return{
            ...state,
            token: 'i'
        }
  }
};
export default reducer;
