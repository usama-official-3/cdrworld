import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import {
  Download,
  LogIn,
  UserPlus,
  Menu,
  X,
  User,
  LogOut,
  Home,
  ShieldUser,
} from "lucide-react";
import { useAuth } from "../context/AuthContext"; // adjust path if needed
import logo from "../images/logo.png"; 
export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
   console.log("user",user)
const isAdmin = user?.role === "admin";
    console.log("isadmin",isAdmin)

    const navClass = ({ isActive }) =>
  `flex items-center gap-1 transition ${
    isActive ? "text-lime-400 font-semibold" : "hover:text-lime-400"
  }`;

   const formatUserName = (user) => {
  if (user?.name) return user.name;

  if (user?.email) {
    let namePart = user.email.split("@")[0]; // before @

    // remove numbers
    namePart = namePart.replace(/[0-9]/g, "");

    // capitalize first letter
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
  }

  return "User";
};
  return (
    <header className="bg-teal-700 text-white">
      <div className="container mx-auto px-4">
        {/* TOP BAR */}
        <div className="flex items-center justify-between py-3">

          {/* LOGO */}
<Link to="/" className="flex items-center">
 <div className="bg-white p-1 rounded-lg shadow-md w-fit">
    <img
      src={logo}
      alt="CDR World Logo"
      className=" h-7
        xxsm:h-8
        xsm:h-9
        sm:h-11
        md:h-11
        2xl:h-12
      
        object-contain"
    />
    </div>
</Link>


          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">

            <NavLink to="/" className={navClass}>
            <Home className="w-4 h-4" />
              Home
            </NavLink>

            <NavLink
              to="/download-help"
              className={navClass}
            >
              <Download className="w-4 h-4" />
              Download Help
            </NavLink>

             {/* Admin link only for admin */}
            {isAdmin && (
              <NavLink to="/admin" className={navClass}>
                 <ShieldUser className="w-4 h-4" />
                Admin
              </NavLink>
            )}

            {/* AUTH AREA */}
            {!user ? (
              <>
                <NavLink
                  to="/login"
                 className={navClass}
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </NavLink>

                <NavLink
                  to="/signUp"
                  className="border border-white/70 px-4 py-1.5 rounded-md hover:bg-white hover:text-teal-700 transition"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <div className="flex items-center gap-4">

                <div className="flex items-center gap-1 text-white/90">
                  <User className="w-4 h-4" />
                  <span className="text-sm">
                     {formatUserName(user)}
                  </span>
                </div>

                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-red-200 hover:text-red-300 transition text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>

              </div>
            )}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-teal-800 transition"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-teal-800 rounded-lg p-4 space-y-4 text-sm">

            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={navClass}
            >
                <Home className="w-4 h-4" />
              Home
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              to="/download-help"
              className={navClass}
            >
              <Download className="w-4 h-4" />
              Download Help
            </NavLink>

            {isAdmin && (
              <NavLink onClick={() => setOpen(false)} to="/admin" className={navClass}>
                 <ShieldUser className="w-4 h-4" />
                Admin
              </NavLink>
            )}

            {!user ? (
              <>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/login"
                  className={navClass}
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </NavLink>

                <NavLink
                  onClick={() => setOpen(false)}
                  to="/signUp"
                  className={navClass}
                >
                  <UserPlus className="w-4 h-4" />
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-white/90">
                  <User className="w-4 h-4" />
                   <span>{formatUserName(user)}</span>
                </div>

                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 text-red-200 hover:text-red-300"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* WAVE */}
      <div className="relative ">
        <svg
          className="w-full h-16 sm:h-24 xl:h-28 2xl:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"
            fill="#84cc16"
          />
        </svg>
      </div>
    </header>
  );
}



