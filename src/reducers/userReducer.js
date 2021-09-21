import {
  FETCH_USERS,
  USER_ADD_QUESTION,
  USER_ANSWER_QUESTION,
} from "../actions/users";

export function userReducer(users = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...users,
        ...action.users,
      };
    case USER_ADD_QUESTION:
      const authedUser = action.payload.authedUser;
      const questionId = action.payload.qid;
      return {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: [...users[authedUser].questions, questionId],
        },
      };
    case USER_ANSWER_QUESTION:
      return {
        ...users,
        [action.payload.authedUser]: {
          ...users[action.payload.authedUser],
          answers: {
            ...users[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
    default:
      return users;
  }
}
