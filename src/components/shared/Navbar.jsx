import { Link, NavLink } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li>
        <NavLink to="/tournaments">Tournaments</NavLink>
      </li>
      {/* <li>
        <NavLink to="/teams">Teams</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 border-b border-white/10 bg-base-100/80 px-4 backdrop-blur-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            ☰
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="text-xl font-black tracking-wide">
          EWUESC
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2">
        <ThemeToggle />
        <Link to="/join-club" className="btn btn-primary rounded-xl">
          Join Club
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
