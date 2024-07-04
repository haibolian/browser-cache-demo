import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="flex gap-10 border">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
        <li>
          <Link to={"/category"}>category</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
