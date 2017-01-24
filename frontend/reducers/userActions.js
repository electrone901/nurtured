
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (user) => ({
  type: LOGIN,
  user: user
})
//action creator that creates obj pass to reducer 

export const logout = () => ({
  type: LOGOUT
})