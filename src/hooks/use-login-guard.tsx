import { useAuthContext } from "../app/auth-provider/auth.provider";
import { RouteGuard } from "../components/route.component";

export const useLoginGuard: RouteGuard = (): boolean => {
  const { authState } = useAuthContext();

  if (authState.status === "in" || authState.status === "loading") {
    return true;
  } else {
    return false;
  }
};
