import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  RiQuestionAnswerFill as Logo,
  RiLogoutBoxLine as LogOut,
} from "react-icons/ri";
import { reSetAuthedUser } from "../actions/authedUser";

function Home() {
  const currentUser = useSelector((state) => state.users[state.authedUser]);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <Logo style={{ color: "dodgerblue" }} />
          </NavLink>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/add">
            Add Question
          </NavLink>
          <NavLink className="nav-link" to="/leaderboard">
            Leader Board
          </NavLink>
          <NavLink to="/" className="text-decoration-none">
            <div className="d-flex align-items-center">
              <h6 className="px-2">{currentUser.name}</h6>
              <img
                style={{
                  width: 40,
                  borderRadius: "50%",
                }}
                src={currentUser.avatarURL}
                alt={`${currentUser.id}-img`}
              />
            </div>
          </NavLink>
          <NavLink
            onClick={() => dispatch(reSetAuthedUser())}
            className="nav-link"
            to="/"
          >
            <LogOut style={{ color: "dodgerblue" }} />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Home;
