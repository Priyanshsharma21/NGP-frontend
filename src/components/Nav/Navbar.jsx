import { useState } from "react";
import Logo from "../../webImages/mainLogo1.png";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";
import LogoSide from "../../images/logo/logo-footer.svg";
import SideImg1 from "../../images/sidebar/1.jpg";
import SideImg2 from "../../images/sidebar/2.jpg";
import SideImg3 from "../../images/sidebar/3.jpg";
import SideImg4 from "../../images/sidebar/4.jpg";
import SideImg5 from "../../images/sidebar/5.jpg";
import SideImg6 from "../../images/sidebar/6.jpg";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const [userDropdown, setUserDropdown] = useState(false);

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserDropdown(false); 
  };

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <Link to="/">
          <img
            width="180px"
            src={Logo}
            alt="logo_img"
            onClick={goTop}
            className="h-auto"
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex">
          <ul className="flex gap-9 text-white text-[22px] xl:none font-bold bg-slate-900 p-4 mr-8 rounded-full border-red-600 border">
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer relative"
              onClick={() => setUserDropdown(!userDropdown)}
            >
            {user ? (
                <>
                  <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center hover:text-orange-500 bg-black text-[2rem] text-white">
                    {user?.username.slice(0, 1)}
                  </div>
                  {userDropdown && (
                    <ul className="absolute top-full border-black right-0 bg-white text-black shadow-md py-2 rounded-md">
                      <li className="cursor-pointer p-3" onClick={handleLogout}>
                        Logout
                      </li>
                    </ul>
                  )}
                </>
              ) : (
                <Link onClick={goTop} to={"/login"}>
                  Login
                </Link>
              )}
            </li>
          </ul>

          <ul className="ml-4 flex items-center">
            {user?.role === "admin" && (
              <Link className="bg-black text-red-400 p-5 font-semibold rounded-xl text-[1rem]" to={`/admin/${user?._id}`}>
                  Admin
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
