import React,{useState} from "react";
import Navbar from "../Components/Navbar";
import toast, { Toaster } from 'react-hot-toast';
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { updateWorkData } from "../Components/redux/userSlice";
import axios from 'axios'

function Financialinformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user, profile, work } = useSelector((state) => state.app);
  const { user } = useSelector((state) => state);
  const {profile}=useSelector((state)=>state)
  const {work}=useSelector((state)=>state)

  const [employmentStatus, setEmploymentStatus] = useState("");
  const [additionalSavings, setAdditionalSavings] = useState("");
  const [currentPage, setCurrentPage] = useState(2); 
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const handleEmploymentStatusChange = (e) => {
    setEmploymentStatus(e.target.value);
  };

  const handleAdditionalSavingsChange = (e) => {
    setAdditionalSavings(e.target.value);
  };

  const handleSaveContinue =async(e) => {
    e.preventDefault()
    if(!employmentStatus || !additionalSavings){
      toast.error("All Fields are required")
    }
    // Dispatch the action to update the Redux state
    dispatch(updateWorkData({ currentWorkingStatus: employmentStatus, additionalSaving: additionalSavings }));
    try {
      const response=await axios.post(`${baseUrl}/savedData`,{
        user,
        profile,
        // work
        employmentStatus,
        additionalSavings,
         

      })
      const savedUserData = response.data.savedUser;
      navigate('/result',{ state: { userData: savedUserData } })
      console.log("Data sent to the backend:", response.data.savedUser);
    } catch (error) {
      console.error("Error sending data to the backend:", error);
      
    }

     
  };
  const state = useSelector((state) => state);
  console.log("Redux State:", state);
  console.log("User Data:", user);
  console.log("Profile Data:", profile);
  console.log("Work Data:", work);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center    ">
        <div className="w-full max-w-lg">
          <form className="bg-white shadow-md rounded-md px-8 pt-4 pb-8" onSubmit={handleSaveContinue}>
            <div className="">
               
              <span className="flex items-center justify-center mb-2">
              <Pagination
                  count={3}
                  hidePrevButton
                  hideNextButton
                  color="primary"
                  page={currentPage} // Set the active page
                  onChange={(event, value) => setCurrentPage(value)} // Update the active page
                />
                </span>
              
             
              <h2 className="text-black text-center text-2xl font-bold font-modern-era mb-2">
                Financial information
              </h2>
              <p className="text-stone-500 text-sm font-medium  text-center font-modern-era leading-none mb-10">
                All your information is stored securely.
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <select className="select  select-bordered focus:outline-none rounded-lg     mr-2 w-full"
              value={employmentStatus}
              onChange={handleEmploymentStatusChange}>
                <option value="">
                  What is your current employment status?
                </option>
                <option value="Unemploy">Unemploy</option>
                <option value="Employ">Employ</option>
              </select>
            </div>
            <div className="mb-2  ">
              <input
                className="border rounded-lg w-full py-2 px-3 focus:outline-none mb-3"
                placeholder="Additional savings/investments"
                value={additionalSavings}
                onChange={handleAdditionalSavingsChange}
              />
            </div>

            <div className="flex items-center justify-center mb-4">
              <button
                className="bg-blue-500   w-full   text-white py-2 px-4 rounded-md"
                type="submit"
              >
                Save and continue
              </button>
            </div>
            <Toaster/>
          </form>
        </div>
      </div>
    </>
  );
}

export default Financialinformation;
