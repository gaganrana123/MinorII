import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/event">Event</Link>
      </li>
   
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/loginsignup">Login</Link>
      </li>
      
    </>
  );

  return (
    <>
      <div>
        <div
          className={`max-w-screen-2xl container mx-auto md:px-50 px-4 fixed top-0 left-0 right-0 z-50 ${
            sticky
              ? " sticky-navbar shadow-md bg-base-200 duration-100 transition-all ease-in-out"
              : ""
          }`}
        >
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex justify-between"
                >
                  {navItems}
                </ul>
              </div>
              <Link to="/" className="navbar-center  flex justify-start">
                <img src="/eventA.png" alt="logo" height={100} width={100} />
              </Link>

              <div className="navbar-center w-full flex justify-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-8 md:w-96"
                />
              </div>
            </div>
            <div className="navbar-end space-x-3">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};
export default NavBar;
