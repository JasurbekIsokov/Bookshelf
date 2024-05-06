import { RouteProps } from "react-router-dom";

import {
  AppRoutes,
  getRouteHome,
  getRouteSignIn,
  getRouteSignUp,
  getRouteNotFound,
} from "../constants/router";

// ----- Pages -----
import { Home, NotFound, SignIn, SignUp } from "../pages";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.NOT_FOUND]: {
    path: getRouteHome(),
    element: <Home />,
  },
  [AppRoutes.SIGN_IN]: {
    path: getRouteSignIn(),
    element: <SignIn />,
  },
  [AppRoutes.SIGN_UP]: {
    path: getRouteSignUp(),
    element: <SignUp />,
  },
  [AppRoutes.HOME]: {
    path: getRouteNotFound(),
    element: <NotFound />,
  },
};
