export enum AppRoutes {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  HOME = "HOME",
  NOT_FOUND = "NOT_FOUND",
}

// ----- Get Routes -----
export const getRouteSignIn = () => "/sign-in";
export const getRouteSignUp = () => "/sign-up";
export const getRouteHome = () => "/";
export const getRouteNotFound = () => "/*";

// ----- -----
export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteSignIn()]: AppRoutes.SIGN_IN,
  [getRouteSignUp()]: AppRoutes.SIGN_UP,
  [getRouteHome()]: AppRoutes.HOME,
  [getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
