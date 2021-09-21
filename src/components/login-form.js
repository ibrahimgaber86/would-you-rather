import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { setAuthedUser } from "../actions/authedUser";

const Login = () => {
  const [selected, setSelected] = useState(0);

  const users = useSelector((state) => state.users);
  const usersIds = [0, ...Object.keys(users)];
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const handleSelection = ({ target }) => {
    setSelected(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected !== 0) {
      dispatch(setAuthedUser(selected));
    } else {
      toast.clearWaitingQueue();
      toast.warning("Please Choose User");
    }
  };

  return (
    loading || (
      <form className="border border-3 shadow-lg rounded p-5 mt-5 bg-light text-center">
        <h1 className="display-sm-5 display-md-4 display-lg-3 mb-5  text-primary">
          <span className="text-muted">Would You Rather</span>
          <br />
          sign in
        </h1>
        <div className="input-group mb-3">
          <span className="input-group-text bg-primary text-light">User</span>
          <select
            defaultValue={selected}
            className="form-select"
            onChange={handleSelection}
          >
            {usersIds.map((id) => (
              <option key={id} disabled={id === 0 ? true : false} value={id}>
                {id === 0 ? "Please Select User" : users[id].name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-outline-primary px-5 text-uppercase my-3"
        >
          sign in
        </button>
      </form>
    )
  );
};

export default Login;
