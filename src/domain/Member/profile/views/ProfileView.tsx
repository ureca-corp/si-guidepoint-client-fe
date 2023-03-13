import { Profile } from ".";
import { useProfileView } from "./useProfileView";

export const ProfileView = () => {
  const {} = useProfileView();
  return <Profile />;
};
