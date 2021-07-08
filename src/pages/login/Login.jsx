import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../network/Firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducers/Reducer";

import logo from "../../assets/images/logo.png";

function Login() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src={logo} alt="" />
        <div>
          <Button variant="contained" type="submit" onClick={signIn}>
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
