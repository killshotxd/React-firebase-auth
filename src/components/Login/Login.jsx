import React, { useState } from "react";
import styles from "./Login.module.css";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase";
import { async } from "@firebase/util";

const Login = () => {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all the fields...");
      return;
    }
    setErrorMsg("");

    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisabled(false);

        Navigate("/");
      })
      .catch((err) => {
        setSubmitBtnDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          placeholder="Enter email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitBtnDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already Have an account?{" "}
            <span>
              <Link to="/SignUp">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// 16:38m
