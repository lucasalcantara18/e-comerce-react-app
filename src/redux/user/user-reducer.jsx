const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (previusState = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...previusState,
        currentUser: action.payload
      }

    default:
      return previusState;
  }

}

export default userReducer;