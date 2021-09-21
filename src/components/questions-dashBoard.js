import React, { useState } from "react";
import { useSelector } from "react-redux";
import Question from "./question";

function QuestionsDashBoard() {
  const [activeTab, setActiveTab] = useState("Q");

  const currentUser = useSelector((state) => state.users[state.authedUser]);
  const questions = useSelector((state) => state.questions);

  const userAnswers = currentUser
    ? Object.keys(currentUser.answers).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      )
    : [];
  const userQuestions = currentUser
    ? Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        .filter((q) => !Object.keys(currentUser.answers).includes(q))
    : [];

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ul className="nav nav-tabs nav-fill my-3">
        <li className="nav-item  " onClick={() => handleActiveTab("Q")}>
          <div
            className={`nav-link ${
              activeTab === "Q" ? "active bg-primary text-light" : ""
            }`}
          >
            Non Answered Question
            <span className="badge rounded-pill bg-secondary ms-2">
              {userQuestions.length}
            </span>
          </div>
        </li>
        <li className="nav-item" onClick={() => handleActiveTab("A")}>
          <div
            className={`nav-link ${
              activeTab === "A" ? "active bg-primary text-light" : ""
            }`}
          >
            Answered Question
            <span className="badge rounded-pill bg-secondary ms-2">
              {userAnswers.length}
            </span>
          </div>
        </li>
      </ul>

      {/* nav tab end  */}

      {userQuestions.length === 0 ? (
        <p>No Questions Available</p>
      ) : (
        activeTab === "Q" &&
        userQuestions.map((q) => <Question key={q} question={questions[q]} />)
      )}
      {userAnswers.length === 0 ? (
        <p>No Questions Available</p>
      ) : (
        activeTab === "A" &&
        userAnswers.map((q) => (
          <Question
            key={q}
            question={questions[q]}
            answered
            currentUser={currentUser}
          />
        ))
      )}
    </>
  );
}

export default QuestionsDashBoard;
