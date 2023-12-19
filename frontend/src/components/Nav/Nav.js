import { Link, Outlet } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <div className="navContainer">
        <div className="linkContainer">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/" className="link">
            SignUp
          </Link>
          <Link to="/signin" className="link">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
