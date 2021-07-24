import { AUTH_TOKEN } from "assets/const/constants";
import { setAuthUser } from "redux_tk/features/auth/authSlice";

export const autoLoginMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "auth/autoLogin") {
      if (localStorage.getItem(AUTH_TOKEN)) {
        const token = localStorage.getItem(AUTH_TOKEN);
        // TO-DO check user validity by request
        dispatch(setAuthUser(token));
      }
    }
    next(action);
  };
