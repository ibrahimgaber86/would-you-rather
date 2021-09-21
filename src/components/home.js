import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect, NavLink } from "react-router-dom";
import QuestionsDashBoard from "./questions-dashBoard";
import {
  RiQuestionAnswerFill as Logo,
  RiLogoutBoxLine as LogOut,
} from "react-icons/ri";
import { reSetAuthedUser } from "../actions/authedUser";
import AddQuestion from "./addQuestion";
import LeaderBoard from "./leaderBoard";
import QuestionView from "./questionView";
import Loading from "./loading";

function Home() {
  const currentUser = useSelector((state) => state.users[state.authedUser]);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
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
          <NavLink className="nav-link" to="/leader-board">
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
            to="/login"
          >
            <LogOut style={{ color: "dodgerblue" }} />
          </NavLink>
        </div>
      </nav>
      {(loading && <Loading />) || (
        <>
          <Route exact path="/">
            <QuestionsDashBoard />
          </Route>
          <Route path="/add">
            <AddQuestion />
          </Route>
          <Route path="/leader-board">
            <LeaderBoard />
          </Route>
          <Route path="/question/:id">
            <QuestionView />
          </Route>
        </>
      )}
    </>
  );
}

export default Home;
