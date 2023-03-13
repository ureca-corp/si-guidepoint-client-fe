export enum AuthRouterPath {
  Home = "/",

  // auth
  SignUp = "/member-signup",
  Login = "/login",
  PasswordRequest = "passwird-request",
}

export enum UserRouterPath {
  // user
  Profile = "/profile",
}

export const PublicRoutes = [AuthRouterPath.Login];
