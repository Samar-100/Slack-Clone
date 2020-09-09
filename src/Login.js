import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <h1>Sign in to Samar Kausari HQ</h1>
        <p>samarkausari.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
