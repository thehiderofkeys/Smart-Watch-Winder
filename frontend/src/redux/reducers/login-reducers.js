import {loginThunk, logoutThunk} from '../actions';

const INIT_STATE={
  loadingLogin: false,
  loadingLogout: false,
};
/**
 * Reducers for login functionality
 *
 * @param {Object} state The current authentication state
 * @param {Object} action The action to apply to the store
 *
 * @return {Object} The updated state
 */
export default function(state = INIT_STATE, action) {
  switch (action.type) {
    // Login url request
    case loginThunk.actionTypes.loading:
    case loginThunk.actionTypes.success:
    case loginThunk.actionTypes.error:
      return requestUrlReducer(state, action, loginThunk.actionTypes);
    // Logout url request
    case logoutThunk.actionTypes.loading:
    case logoutThunk.actionTypes.success:
    case logoutThunk.actionTypes.error:
      return requestUrlReducer(state, action, logoutThunk.actionTypes);
    default:
      return state;
  }
}

/**
 * Reducers for url request
 * @param {Object} state The current state
 * @param {Object} action The url request action to apply
 * @param {Object} actionTypes The actionTypes for the url request
 *
 * @return {Object} Shallow copy of the new state
 */
function requestUrlReducer(state, action, actionTypes) {
  if (action.type === actionTypes.success) {
    action.payload.text().then(url=>{
      window.location.href = url;
    })
  }
  return Object.assign({}, state, {loadingLogin: action.type === actionTypes.loading});
}
