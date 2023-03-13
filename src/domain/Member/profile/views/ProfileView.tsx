import { Profile } from ".";
import { useProfileView } from "./useProfileView";

export const ProfileView = () => {
  useProfileView();
  return <Profile />;
};
