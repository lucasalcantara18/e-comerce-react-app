import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (previusState = INITIAL_STATE, action) => {

  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...previusState,
        currentUser: action.payload
      }

    default:
      return previusState;
  }

}

export default userReducer;