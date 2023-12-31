import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import axios from 'axios'



function Signup() {
  const [formData, setFormData] = useState({
  username : "",
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
      const res = await axios.post( `https://dost-ke-dost-ka-project.onrender.com/user/signup`, formData);
      if(res.data.status === "success"){
        localStorage.setItem('user', JSON.stringify(res.data.data)); 
        navigate('/login')
      }
    } catch (error) {
      alert("Please Enter Corrrect Email or password")
      console.error('Error:', error);
    }
  };

  return (
    <>
      <section className="login-section ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign Up
          </h1>
        </div>
        {/* form  */}
        <div className="py-[10rem] flex justify-center page-padding">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
           
            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Username
            </label>
                    <input 
                        type="text"
                        value={formData.username}
                        placeholder="Enter your name"
                        onChange={handleChange}
                         className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
                        name="username"
                  />

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
              Sign Up
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Already have account?</p>
              <Link
                to="/login"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign In
              </Link>
            </div>
            
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Signup;
