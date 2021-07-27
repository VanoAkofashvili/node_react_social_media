import { AUTH_TOKEN } from "utils/const/constants";
import { setAuthUser } from "redux_tk/features/auth2/authSlice";

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
