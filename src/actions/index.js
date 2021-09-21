import { _getUsers, _getQuestions } from "../data";
import { fetchUsers } from "./users";
import { fetchQuestions } from "./questions";
import { finishLoading, startLoading } from "./loading";

export function intializeData() {
  return (dispatch) => {
    Promise.all([_getQuestions(), _getUsers()])
      .then((res) => {
        dispatch(startLoading());
        dispatch(fetchQuestions(res[0]));
        dispatch(fetchUsers(res[1]));
        dispatch(finishLoading());
      })
      .catch((err) => alert(err.message));
  };
}
