import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import * as animation from "../animationHelper";

function Question({ question }) {
  const { author, id, optionOne, timestamp } = question;
  const history = useHistory();

  const questionAuthor = useSelector((state) => state.users[author]);

  function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString("en-US");
    return time.substr(0, 5) + time.slice(-2) + "  " + d.toLocaleDateString();
  }

  return (
    <motion.div
      {...animation}
      className="question border border-3 shadow-lg rounded p-5  bg-light d-flex flex-column flex-sm-row align-items-center justify-content-between"
    >
      <div>
        <img
          className="avatar"
          src={questionAuthor.avatarURL}
          alt={`${questionAuthor}-img`}
        />
        <p className="text-center">{questionAuthor.name} </p>
        <p className="text-center">{formatDate(timestamp)} </p>
      </div>

      <div className="w-75 d-flex flex-column align-items-center px-4">
        <h3 className="h3 text-muted text-start">Would You Rather?</h3>
        <div className="border-bottom align-self-start w-100 text-center ">
          <p className="h5">{optionOne.text} or ... 🤔</p>
        </div>

        <button
          onClick={() => {
            history.push(`/questions/${id}`);
          }}
          type="submit"
          className="btn btn-outline-primary w-100 text-uppercase my-3 "
        >
          View question
        </button>
      </div>
    </motion.div>
  );
}

export default Question;
