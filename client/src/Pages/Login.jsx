import React, { useState } from "react";
import {
  BsExclamationCircleFill,
  BsEyeFill,
  BsEyeSlashFill,
} from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  updateUserData,
   
} from "../Components/redux/userSlice";
function Login() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  // const user = useSelector((state) => state.user);
  // console.log(user,"data.....")
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  

  const handleInputChange = (name, value) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "repassword":
        setRepassword(value);
        break;
      default:
        break;
    }
  };
  const handleEmailChange = (e) => {
    handleInputChange("email", e.target.value);
  };

  const handleMobileChange = (e) => {
    handleInputChange("mobile", e.target.value);
  };

  const handlePasswordChange = (e) => {
    handleInputChange("password", e.target.value);
  };

  const handleRepasswordChange = (e) => {
    handleInputChange("repassword", e.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePhone = (phone) => {
    // Assuming a valid phone number consists of 10 digits
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  
  const validatePassword = (password) => {
    // Password must be alphanumeric and have at least one uppercase letter and one digit
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !mobile || !password || !repassword) {
      toast.error('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Invalid email address.');
      return;
    }
    if (!validatePhone(mobile)) {
      toast.error('Invalid phone number.');
      return;
    }
    if (!validatePassword(password)) {
      toast.error('Invalid password.');
      return;
    }
    if (password !== repassword) {
      toast.error('Passwords do not match.');
      return;
    }
    
    
    dispatch(updateUserData({ email, mobile, password, repassword }));
    navigate('/personalinfo');
  };
  
 
  return (
    <>
      <div className="w-[100%] h-[100%]">
        <Navbar />

        <div className="flex items-center justify-center    ">
          <div className="w-full max-w-lg">
            <form className="bg-white shadow-md rounded-md px-8 pt-4 pb-8" onSubmit={handleSubmit}>
              <div className= "">
                <h2 className="text-black text-center text-2xl font-bold font-modern-era mb-2">
                  Create your account
                </h2>
                <p className="text-stone-500 text-sm font-medium  text-center font-modern-era leading-none mb-10">
                  Set-up your RentlyPass in as little as 2 minutes.
                </p>
              </div>
              <div className="mb-4  ">
                <label className="text-stone-500 font-bold mb-1  ">
                  Contact Details
                </label>
                <input
                  type="email"
                  className="border rounded-lg w-full py-2 px-3 focus:outline-none "
                  placeholder="joshuapavo@gmail.com"
                  style={{ marginTop: "0.5rem" }}
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4 relative">
                <div className="flex">
                  <input
                    type="Number"
                    className="border rounded-lg w-full py-2 px-3 focus:outline-none"
                    placeholder="mobile number"
                    value={mobile}
                    onChange={handleMobileChange}
                  />
                  <span className="text-stone-500 absolute top-1/2 transform -translate-y-1/2 right-3">
                    <BsExclamationCircleFill />
                  </span>
                </div>
              </div>
              <div className="mb-2 relative">
                <label className="block text-stone-500 text-base font-bold">
                  Set a password
                </label>
                <div className="flex">
                  <input
                    type={`${show ? "text" : "password"}`}
                    name="password"
                    className="border rounded-lg w-full py-2 px-3 focus:outline-none"
                    placeholder="Create a password"
                    style={{ marginTop: "0.5rem" }}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="text-slate-400"
                    onClick={() => setShow(!show)}
                  >
                    {!show ? (
                      <span className="text-stone-500 absolute  transform -translate-y-1/2 right-3">
                        {" "}
                        <BsEyeSlashFill size={15} />
                      </span>
                    ) : (
                      <span className="text-stone-500 absolute  transform -translate-y-1/2 right-3">
                        <BsEyeFill size={15} />
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-2 relative">
                <div className="flex">
                  <input
                    type={`${show1 ? "text" : "password"}`}
                    name="password"
                    className="border rounded-lg w-full py-2 px-3 focus:outline-none"
                    placeholder="Confirm your password"
                    style={{ marginTop: "0.5rem" }}
                    value={repassword}
                    onChange={handleRepasswordChange}
                  />
                  <button
                    type="button"
                    className="text-slate-400"
                    onClick={() => setShow1(!show1)}
                  >
                    {!show1 ? (
                      <span className="text-stone-500 absolute  transform -translate-y-1/2 right-3">
                        {" "}
                        <BsEyeSlashFill size={15} />
                      </span>
                    ) : (
                      <span className="text-stone-500 absolute  transform -translate-y-1/2 right-3">
                        <BsEyeFill size={15} />
                      </span>
                    )}
                  </button>
                </div>
                <div className="text-stone-500 text-sm font-medium mt-2 text-center flex justify-center  ">
                  <BsExclamationCircleFill size={25} className="mr-0" />
                  We need a password to keep your information safe. But don’t
                  worry, we’ll also send your custom RentlyPass URL via email.
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button
                  className="bg-blue-500   w-full   text-white py-2 px-4 rounded-md"
                  type="submit"
                >
                  Create your account
                </button>
              </div>

              <div className=" flex items-center">
                <input type="checkbox" className="mr-2" id="agreeTerms" />
                <label
                  htmlFor="agreeTerms"
                  className="text-stone-500 text-sm font-medium leading-none"
                >
                  By clicking ‘Create your account’, you are agreeing to our
                  <span className="underline">Terms & Conditions</span> and
                  <span className="underline">Privacy Policy</span>.
                </label>
              </div>
              <Toaster />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
