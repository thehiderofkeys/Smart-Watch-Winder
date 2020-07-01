/**
 *  Helper module to create combined thunk object to reduce boilerplate code.
 *
 * Written by Dr. Andrew Meads.
 * Source: https://gitlab.com/cs732-course-projects-2020s1/cs732-examples
 */

/**
 * A helper function that creates a combined thunk function for each API method in a module.
 *
 * @param {Module} Api The module that export async function calling the APIs
 *
 * @return {Object} The Object of thunks created for each exported function in the module
 */
export function createApiThunks(Api) {
  const thunks = {};
  for (const name in Api) {
    if ({}.hasOwnProperty.call(Api, name)) {
      thunks[`${name}Thunk`] = createApiThunk(name, Api[name]);
    }
  }
  return thunks;
}

/**
 * A helper function that creates the action types, redux actions, and thunk function for a thunk which performs some
 * API call and informs the Redux store on "loading", "success", and "error" states.
 *
 * @param {String} name the name of the thunk
 * @param {Function} apiCall the API function to call
 *
 * @return {Object} An object containing the action type, redux action and thunk function.
 */
export function createApiThunk(name, apiCall) {
  // Create the action types
  const actionTypes = {
    loading: `${name}_loading`,
    success: `${name}_success`,
    error: `${name}_error`,
  };

  // Create the Redux action functions
  const reduxActions = {};
  for (const actionType in actionTypes) {
    if ({}.hasOwnProperty.call(actionTypes, actionType)) {
      reduxActions[actionType] = function(payload) {
        return {type: actionTypes[actionType], payload};
      };
    }
  }

  // Create the thunk function, which itself will take the payload to the API call as an argument...
  const thunk = (payload) => (dispatch) => {
    // Dispatch the "loading" action with the payload that will be supplied to the API call
    dispatch(reduxActions.loading(payload));

    // Then call the API function with the given payload
    apiCall(payload)

    // On success, dispatch the "success" action with the response from the server
        .then((response) => dispatch(reduxActions.success(response)))

    // On failure, dispatch the "error" action with the response from the server
        .catch((err) => dispatch(reduxActions.error(err.message || 'Unexpected error!')));
  };

  // Return an object containing all three parts of this.
  return {
    actionTypes,
    reduxActions,
    thunk,
  };
}
