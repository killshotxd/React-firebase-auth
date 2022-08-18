import React from "react";
import styles from "./Signup.module.css";
import InputControl from "../InputControl/InputControl";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl label="Name" placeholder="Enter name" />
        <InputControl label="Email" placeholder="Enter email" />
        <InputControl label="Password" placeholder="Enter password" />

        <div className={styles.footer}>
          <button>SignUp</button>
          <p>
            Already Have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// 16:38m
