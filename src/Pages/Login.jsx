import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData ({
      ...formData,
      [name]: value,
    })
  };
   
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const res = await axios.post( `https://dost-ke-dost-ka-project.onrender.com/user/login`, formData);
        if(res.data.status === "success"){
          localStorage.setItem('user', JSON.stringify(res.data.data)); 
          navigate('/')
        }
      } catch (error) {
        alert("Please Enter Corrrect Email or password")
        console.error('Error:', error);
      }
    };
  
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign In
          </h1>
        </div>
        {/* form  */}
        <div className="page-padding py-[10rem] flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Email
            </label>

                    <input 
                        type="email"
                        placeholder="sharad007@gmail.com"
                        value={formData.email}
                         className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
                        onChange={handleChange}
                        name="email"
                  />
 <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Password
            </label>
                    <input 
                        type="password"
                        placeholder="Enter Password..."
                        value={formData.password}
                         className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
                        onChange={handleChange}
                        name="password"
                  />

            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign In
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Don't have Account?</p>
              <Link
                to="/signup"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign Up
              </Link>
            </div>
            {/* <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
              <span className="text-[#ff0336]">Test Account</span> -
              gymTraction@gmail.com <span className="text-[#ff0336]"> / </span>
              gym@123
            </p> */}
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Login;
