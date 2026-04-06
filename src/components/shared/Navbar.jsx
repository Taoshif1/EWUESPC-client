import { Link, NavLink } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tournaments"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Tournaments
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 border-b border-white/10 bg-base-100/70 px-4 backdrop-blur-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            ☰
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-2xl border border-white/10 bg-base-200 p-2 shadow-xl"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="text-xl font-black tracking-wide">
          EWUESPC
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2">
        <ThemeToggle />
        <Link to="/about" className="btn btn-primary rounded-xl px-5">
          Join Club
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
