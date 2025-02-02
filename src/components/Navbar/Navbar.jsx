import axios from "axios";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "../../index.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    signOutUser();
    toast.success("Signout Successfully");
    const email = user?.email;
    axios
      .post(
        "https://stay-inn-server.vercel.app/jwtLogout",
        {email},
        {withCredentials: true}
      )
      .then((res) => console.log(res.data));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:bg-transparent py-2 px-2 active:bg-transparent"
          style={({isActive}) => {
            return isActive
              ? {
                  color: "#FF7B19",
                  borderBottom: "3px solid #FF7B19",
                  background: "white",
                  borderRadius: "0px",
                  fontWeight: "700",
                }
              : {};
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className="hover:bg-transparent py-2 px-2 active:bg-transparent"
          style={({isActive}) => {
            return isActive
              ? {
                  color: "#FF7B19",
                  borderBottom: "3px solid #FF7B19",
                  background: "white",
                  borderRadius: "0px",
                  fontWeight: "700",
                }
              : {};
          }}
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mybookings"
          className="hover:bg-transparent py-2 px-2 active:bg-transparent"
          style={({isActive}) => {
            return isActive
              ? {
                  color: "#FF7B19",
                  borderBottom: "3px solid #FF7B19",
                  background: "white",
                  borderRadius: "0px",
                  fontWeight: "700",
                }
              : {};
          }}
        >
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className="hover:bg-transparent py-2 px-2 active:bg-transparent"
          style={({isActive}) => {
            return isActive
              ? {
                  color: "#FF7B19",
                  borderBottom: "3px solid #FF7B19",
                  background: "white",
                  borderRadius: "0px",
                  fontWeight: "700",
                }
              : {};
          }}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className="hover:bg-transparent py-2 px-2 active:bg-transparent"
          style={({isActive}) => {
            return isActive
              ? {
                  color: "#FF7B19",
                  borderBottom: "3px solid #FF7B19",
                  background: "white",
                  borderRadius: "0px",
                  fontWeight: "700",
                }
              : {};
          }}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-11/12 md:w-4/5 mx-auto py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-semibold"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img src="logo.png" alt="" className="w-16" />
            <p className="text-3xl font-extrabold -mt-2 custom-font bg-gradient-to-r from-[#FF7B19] to-[#199DFF] bg-clip-text text-transparent">
              Stay Inn
            </p>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-6 text-base font-semibold">{navItems}</ul>
        </div>
        <div className="flex items-center gap-6 text-base">
          {user ? (
            <div>
              <div>
                {user.photoURL ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={user.photoURL}
                      className="rounded-[100%] w-12"
                      alt="Photo"
                      title={user.displayName}
                    />
                    <Link
                      to="/login"
                      onClick={handleSignOut}
                      className="border-2 border-black rounded-lg px-6 py-2 font-semibold hover:text-[#FF7B19] hover:border-[#FF7B19]"
                    >
                      Logout
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <img
                      src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                      className="rounded-[100%] w-12"
                      alt=""
                    />

                    <Link
                      to="/login"
                      onClick={handleSignOut}
                      className="border-2 border-black rounded-lg px-6 py-2 font-semibold hover:text-[#FF7B19] hover:border-[#FF7B19]"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="border-2 border-black rounded-lg px-6 py-2 font-semibold hover:text-[#FF7B19] hover:border-[#FF7B19]"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
