import { useParams } from "react-router-dom";
import { useAuthContext } from "../app/auth-provider/auth.provider";

interface GetParamsAndStudentId {
  idFromParams: number;
  id: number;
}
export const useGetParamsAndStudentId = (): GetParamsAndStudentId => {
  const params = useParams();
  const idFromParams = Number(Object.values(params)[0]);

  const { getUserIdAndInfoFromStorage } = useAuthContext();

  const { id } = getUserIdAndInfoFromStorage();

  return { idFromParams, id };
};
