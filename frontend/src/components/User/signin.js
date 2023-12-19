import { useState } from "react";
import "./user.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { email, password };

  const SignInHelper = (e) => {
    e.preventDefault();

    const url = "http://localhost:3100/api/user/signin";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user.length !== 0) {
          alert("Login Successfull!");
          console.log(data);
        } else {
          alert("No user Found!");
        }
      })
      .catch((err) => {
        alert("Login Failed!");
        console.log(err);
      });
  };

  return (
    <div className="signin-div">
      <div className="formContainer">
        <h1>Sign In</h1>
        <form
          action="/signin"
          method="POST"
          onSubmit={SignInHelper}
          className="formStyle"
        >
          {/* <label for="email">Email</label> */}
          <br />
          <input
            type="text/email"
            className="inputbox"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          ></input>
          <br />
          {/* <label for="password">Password</label> */}
          <br />
          <input
            type="password"
            className="inputbox"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          ></input>
          <br />
          <br />
          <button type="submit" className="submitBtn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
