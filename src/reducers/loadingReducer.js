import { FINISH_LOADING, START_LOADING } from "../actions/loading";

export function loading(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case FINISH_LOADING:
      return false;
    default:
      return state;
  }
}
