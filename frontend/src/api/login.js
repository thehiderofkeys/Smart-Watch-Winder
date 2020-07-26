/**
 * Login to the service
 *
 * @param {Function} onSuccess The handler for successful login url retrieval
 * @return {Object} The thunk payload containing the success handler and responce
 */
export async function login(onSuccess) {
  const res = await fetch('/api/login');
  return {respose: res, success: onSuccess};
}

/**
 * Logout of the service
 *
 * @param {Function} onSuccess The handler for successful logout url retrieval
 * @return {Object} The thunk payload containing the success handler and responce
 */
export async function logout(onSuccess) {
  const res = await fetch('/api/logout');
  return {respose: res, success: onSuccess};
}
