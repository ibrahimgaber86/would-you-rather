import { combineReducers } from "redux";
import { questionReducer } from "./questionsReducer";
import { userReducer } from "./userReducer";
import { authedUserReducer } from "./authedUserReducer";
import { loading } from "./loadingReducer";

export default combineReducers({
  users: userReducer,
  questions: questionReducer,
  authedUser: authedUserReducer,
  loading: loading,
});
