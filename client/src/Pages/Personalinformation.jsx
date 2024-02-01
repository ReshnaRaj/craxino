import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { BsExclamationCircleFill } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfileData } from "../Components/redux/userSlice";

function Personalinformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [date, setDate] = useState();
  const [salutation, setSalutation] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [durationAtAddress, setDurationAtAddress] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");


  const handleSaveAndContinue = (e) => {
    e.preventDefault()
    if (!salutation || !fullName || !dob || !currentAddress || !durationAtAddress || !aboutYourself) {
      toast.error("All fields are required");
      return;
    }
  //   const dobRegex = /^(0[1-9]|1[0-2])[-/](0[1-9]|[12][0-9]|3[01])-\d{4}$/;
  // if (dobRegex.test(dob)) {
  //   toast.error("Invalid date of birth format. Please use  MM-DD-YYYY");
  //   return;
  // }
    // Dispatch the action to update the profile data in the Redux store
    dispatch(
      updateProfileData({
        name: fullName,
        dob: dob,
        currentAddress: currentAddress,
        longlive:durationAtAddress,
        description: aboutYourself,
      })
    );
    navigate('/financial');

    
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center   ">
        <div className="w-full max-w-lg">
          <form className="bg-white shadow-md rounded-md px-8 pt-4 pb-8">
            <div className="">
              <span className="flex items-center justify-center mb-2">
                <Pagination
                  count={3}
                  hidePrevButton
                  hideNextButton
                  color="primary"
                />
              </span>

              <h2 className="text-black text-center text-2xl font-bold font-modern-era mb-2">
                Personal information
              </h2>
              <p className="text-stone-500 text-sm font-medium  text-center font-modern-era leading-none mb-10">
                Please answer questions as accurately as possible
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <select
               value={salutation}
               onChange={(e) => setSalutation(e.target.value)}
               className="select  select-bordered focus:outline-none rounded-lg     mr-2 w-1/4">
                <option value="" disabled defaultValue>
                  Select your Salutation
                </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
              </select>

              <input
                type="email"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border rounded-lg flex-1 py-2 px-3 focus:outline-none"
                placeholder="Full Name as per your passport"
              />
            </div>

            <div className="mb-4 relative">
              <div className="flex">
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="border rounded-lg w-full py-2 px-3 focus:outline-none"
                  placeholder="Date Of birth"
                />
              </div>
            </div>
            <div className="mb-2  ">
              <input
                className="border rounded-lg w-full py-2 px-3 focus:outline-none mb-3"
                placeholder="Current address"
                value={currentAddress}
                onChange={(e)=>setCurrentAddress(e.target.value)}
              />
            </div>
            <div className="mb-2  ">
              <input
                className="border rounded-lg w-full py-2 px-3 focus:outline-none"
                placeholder="How long have you lived at this address?"
                value={durationAtAddress}
                onChange={(e)=>setDurationAtAddress(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
              className="textarea textarea-bordered textarea-md w-full  mt-3 focus:outline-none"
              value={aboutYourself}
              onChange={(e)=>setAboutYourself(e.target.value)}
            ></textarea>
            <div className="text-stone-500 text-sm font-medium mt-2 text-center flex justify-center  mb-5">
              <BsExclamationCircleFill size={20} className="mr-0" />
              All information can be edited once you have created your account.
            </div>

            <div className="flex items-center justify-center ">
              <button
                className="bg-blue-500   w-full   text-white py-2 px-4 rounded-md"
                type="submit"
                onClick={handleSaveAndContinue}
              >
                Save and Continue
              </button>
            </div>
            <Toaster/>
          </form>
        </div>
      </div>
    </>
  );
}

export default Personalinformation;
