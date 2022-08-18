import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import styles from "./Home.module.css";
const Home = (props) => {
  const [signOutMsg, setSignOutMsg] = useState("");
  const handleClick = () => {
    signOut(auth).then((res) => {
      setSignOutMsg("Signed Out SuccessFully");
    });
  };

  return (
    <div>
      <div className={styles.logger}>
        <div className={styles.msg}>
          <b>{signOutMsg}</b>

          <h2>{props.name ? `Welcome - ${props.name}` : "Login please...."}</h2>
        </div>

        <button>
          <Link to="/login">Login</Link>
        </button>
        <br />

        <button>
          <Link to="/SignUp">SignUp</Link>
        </button>

        <br />

        <button onClick={handleClick}>SignOut</button>
      </div>
    </div>
  );
};

export default Home;
