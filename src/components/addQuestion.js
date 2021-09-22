import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsQuestionSquareFill as QMark } from "react-icons/bs";
import { handleAddQuestion } from "../actions/questions";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import * as animation from "../animationHelper";

function AddQuestion() {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const authedUser = useSelector((state) => state.authedUser);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
    history.push("/");
  };

  return (
    <motion.div
      {...animation}
      className="question border border-1 rounded-3 shadow d-flex flex-column  p-4 my-5"
    >
      <h3 className="p-3 text-center">
        Would You Rather &nbsp;
        <QMark style={{ color: "dodgerblue" }} />
      </h3>
      <div className="mb-3">
        <label htmlFor="option-one" className="form-label">
          Option One
        </label>
        <input
          value={optionOne}
          onChange={({ target }) => setOptionOne(target.value)}
          type="text"
          className="form-control"
          id="option-one"
          placeholder="Option One"
        />
      </div>
      <p className="text-center">Or</p>
      <div className="mb-3">
        <label htmlFor="option-two" className="form-label">
          Option Two
        </label>
        <input
          value={optionTwo}
          onChange={({ target }) => setOptionTwo(target.value)}
          type="text"
          className="form-control"
          id="option-two"
          placeholder=" Option Two"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="btn btn-outline-primary text-uppercase mt-5 mb-5"
        disabled={optionTwo === "" && optionTwo === ""}
      >
        Add question
      </button>
    </motion.div>
  );
}

export default AddQuestion;
