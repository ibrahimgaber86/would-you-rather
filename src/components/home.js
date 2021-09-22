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
      <nav
        className="container navbar navbar-light"
        style={{ backgroundColor: "#F0F0F0" }}
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Home"
            style={{ color: "dodgerblue", fontWeight: 300 }}
          >
            Would You Rather&nbsp;
            <Logo style={{ color: "dodgerblue" }} />
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
