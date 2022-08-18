import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

const Home = (props) => {
  const [signOutMsg, setSignOutMsg] = useState("");
  const handleClick = () => {
    signOut(auth).then((res) => {
      setSignOutMsg("Signed Out SuccessFully");
    });
  };

  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />

        <h1>
          <Link to="/SignUp">SignUp</Link>
        </h1>
      </div>

      <br />

      <button onClick={handleClick}>SignOut</button>

      <br />
      <br />
      <br />

      <b>{signOutMsg}</b>
      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please...."}</h2>
    </div>
  );
};

export default Home;
