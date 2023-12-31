import { Link } from "react-router-dom";
import { navItems } from "../../constants";
function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[22px] xl:none font-bold bg-slate-900 p-6  rounded-full border-red-600 border">
        {navItems.map((item,i)=>(
        <div
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} exact to={item.path}>
            {item.title}
          </Link>
        </div>
      ))}
      </ul>
    </>
  );
}

export default NavList;
