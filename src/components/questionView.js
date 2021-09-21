import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { handleAddAnswer } from "../actions/questions";
import QuestionResult from "./questionResult";
import NotFound from "./notFound";

function QuestionView() {
  const [answer, setAnswer] = useState("");

  const authedUser = useSelector((state) => state.authedUser);
  const { question_id: qid } = useParams();

  const question = useSelector((state) => state.questions[qid]);
  let author, optionOne, optionTwo, IsAnswered;
  if (question) {
    author = question.author;
    optionOne = question.optionOne;
    optionTwo = question.optionTwo;
    IsAnswered =
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser);
  }

  const questionAuthor = useSelector((state) =>
    author ? state.users[author] : ""
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(qid, answer, authedUser));
    toast.clearWaitingQueue();
    toast.success("Your Answer Have Been Submitted ");
  };

  if (!question) return <NotFound />;

  if (!IsAnswered)
    return (
      <div className="question border border-3 shadow-lg rounded p-5  mt-5 mb-5 bg-light d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <div>
          <img
            className="avatar"
            src={questionAuthor.avatarURL}
            alt={`${questionAuthor.name}-img`}
          />
          <p className="text-center">{questionAuthor.name} </p>
        </div>

        <div className="w-75 d-flex flex-column align-items-center px-4">
          <h3 className="text-muted text-start">Would You Rather?</h3>
          <div className="border-bottom align-self-start w-100">
            <div className="form-check mb-4">
              <input
                onChange={() => setAnswer("optionOne")}
                className="form-check-input"
                type="radio"
                name={qid}
                id={`${qid}-optionOne`}
                defaultChecked={answer === "optionOne"}
              />
              <label className="form-check-label" htmlFor={`${qid}-optionOne`}>
                {optionOne.text}
              </label>
            </div>
            <div className="form-check  mb-4">
              <input
                onChange={() => setAnswer("optionTwo")}
                className="form-check-input"
                type="radio"
                name={qid}
                id={`${qid}-optionTwo`}
                defaultChecked={answer === "optionTwo"}
              />
              <label className="form-check-label" htmlFor={`${qid}-optionTwo`}>
                {optionTwo.text}
              </label>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            disabled={answer === ""}
            className="btn btn-outline-primary w-100 text-uppercase my-3 "
          >
            submit
          </button>
        </div>
      </div>
    );

  return <QuestionResult question={question} />;
}

export default QuestionView;
