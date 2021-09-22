import React from "react";
import { motion } from "framer-motion";
import * as animation from "../animationHelper";

function QuestionResult({ question: { optionOne, optionTwo } }) {
  const optionOneVotes = optionOne.votes.length;
  const optionTwoVotes = optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercent = Math.round((optionOneVotes / totalVotes) * 100);
  const optionTwoPercent = Math.round((optionTwoVotes / totalVotes) * 100);

  return (
    <motion.div
      {...animation}
      className="question border border-3 shadow-lg rounded p-5  mt-5 mb-5 bg-light d-flex flex-column  justify-content-between"
    >
      <h3>Question Results</h3>
      <hr className="mb-5 bg-red" />
      <h5>{`${optionOne.text} (${optionOneVotes} votes from ${totalVotes})`}</h5>
      <div className="progress  mb-5">
        <div className="progress-bar" style={{ width: `${optionOnePercent}%` }}>
          {optionOnePercent}
        </div>
      </div>
      <h5>{`${optionTwo.text} (${optionTwoVotes} votes from ${totalVotes})`}</h5>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${optionTwoPercent}%` }}>
          {optionTwoPercent}
        </div>
      </div>
    </motion.div>
  );
}

export default QuestionResult;
