import { _saveQuestionAnswer, _saveQuestion } from "../data";
import { finishLoading, startLoading } from "./loading";
import { userAddQuestion, userAddAnswer } from "./users";

export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function fetchQuestions(questions) {
  return {
    type: FETCH_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    payload: { authedUser, qid, answer },
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(startLoading());
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => {
      dispatch(userAddQuestion({ authedUser: author, qid: question.id }));
      dispatch(addQuestion(question));
      dispatch(finishLoading());
    });
  };
}

export function handleAddAnswer(qid, answer, authedUser) {
  console.log("second step=>", authedUser, qid, answer);
  return (dispatch) => {
    dispatch(startLoading());
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(userAddAnswer({ authedUser, qid, answer }));
      dispatch(saveAnswer(authedUser, qid, answer));
      dispatch(finishLoading());
    });
  };
}
