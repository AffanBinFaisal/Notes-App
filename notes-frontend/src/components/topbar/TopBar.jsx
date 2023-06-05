import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <h3>Notes App</h3>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link
              className="link"
              to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link
              className="link"
              to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              className="link"
              to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight"></div>
    </div>
  );
}
