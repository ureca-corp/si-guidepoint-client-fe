export enum AuthRouterPath {
  Home = "/",

  // auth
  SignUp = "/member-signup",
  Login = "/login",
  PasswordRequest = "passwird-request",
}

export enum UserRouterPath {
  Profile = "/profile",
  EditProfile = "/profile/edit",
}

export const PublicRoutes = [AuthRouterPath.Login];
