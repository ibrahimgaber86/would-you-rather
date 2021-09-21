import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { useDispatch } from "react-redux";
import Login from "./components/login-form";
import NotFound from "./components/notFound";
import Home from "./components/home";

import { ToastContainer } from "react-toastify";
import { intializeData } from "./actions/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intializeData());
  }, [dispatch]);
  return (
    <div className="App container">
      <ToastContainer limit={1} />
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/add">
            <Home />
          </Route>
          <Route path="/leader-board">
            <Home />
          </Route>
          <Route>
            <Home path="/product/:id" />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
