import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import * as animation from "../animationHelper";

function LeaderBoard() {
  const users = useSelector((state) =>
    Object.keys(state.users)
      .map((id) => {
        const user = state.users[id];
        return {
          ...user,
          totalScore: Object.keys(user.answers).length + user.questions.length,
        };
      })
      .sort((a, b) => b.totalScore - a.totalScore)
  );
  return (
    <motion.div
      {...animation}
      className="d-flex flex-column align-items-center"
    >
      <h1 className="display-5 text-center">Leader Board</h1>;
      {users.map((u) => (
        <div
          key={u.id}
          className="d-flex flex-column border border-2 shadow question p-4 m-3 w-100"
        >
          <img
            className="avatar align-self-center"
            src={u.avatarURL}
            alt={`${u.name}-img`}
          />
          <hr />
          <h3 className="display-6">{u.name}</h3>
          <h3 className="display-6">
            Toatal Answers: {Object.keys(u.answers).length}
          </h3>
          <h3 className="display-6">Toatal Questions: {u.questions.length}</h3>
          <hr />
          <h3 className="display-6">Toatal: {u.totalScore}</h3>
        </div>
      ))}
    </motion.div>
  );
}

export default LeaderBoard;
