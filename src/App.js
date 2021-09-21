import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Login from "./components/login-form";
import NotFound from "./components/notFound";
import Home from "./components/home";

import { ToastContainer } from "react-toastify";
import { intializeData } from "./actions/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import QuestionsDashBoard from "./components/questions-dashBoard";
import LeaderBoard from "./components/leaderBoard";
import QuestionView from "./components/questionView";
import AddQuestion from "./components/addQuestion";
import Loading from "./components/loading";

function App() {
  const authedUser = useSelector((state) => state.authedUser);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeData());
  }, [dispatch]);
  if (!authedUser)
    return (
      <>
        <ToastContainer limit={1} />
        <Login />
      </>
    );
  return (
    <Router>
      <ToastContainer limit={1} />
      <Home />
      {(loading && <Loading />) || (
        <Switch>
          <Route exact path="/" component={QuestionsDashBoard} />
          <Route exact path="/404" component={NotFound} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/questions/:question_id" component={QuestionView} />
          <Route path="/add" component={AddQuestion} />
          <Redirect to="/404" />
        </Switch>
      )}
    </Router>
  );
}

export default App;
