import { useState } from "react";
import "./user.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = { username, email, password };

  const SignUpHelper = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(`Password doesn't match!`);
      return;
    }

    const url = "http://localhost:3100/api/user/signup";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="formContainer">
        <h1>Sign Up</h1>
        <form
          action="/signup"
          method="POST"
          onSubmit={SignUpHelper}
          className="formStyle"
        >
          {/* <label for="username">Username</label> */}
          <input
            type="text"
            className="inputbox"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          ></input>
          <br />
          {/* <label for="email">Email</label> */}
          <br />
          <input
            type="email"
            className="inputbox"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          ></input>
          <br />
          {/* <label for="password">Password</label> */}
          <br />
          <input
            type="password"
            className="inputbox"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          ></input>
          <br />
          {/* <label for="confirm-password">Confirm Password</label> */}
          <br />
          <input
            type="password"
            className="inputbox"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          ></input>
          <br />
          <br />
          <button type="submit" className="submitBtn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
