import {
  FETCH_QUESTIONS,
  SAVE_ANSWER,
  ADD_QUESTION,
} from "../actions/questions";

export function questionReducer(questions = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...questions,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...questions,
        [action.question.id]: action.question,
      };
    case SAVE_ANSWER:
      console.log(">>>>>>", action);
      const { authedUser, qid, answer } = action.payload;
      return {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return questions;
  }
}
