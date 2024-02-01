import React ,{useState}from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from "@mui/material/Pagination";
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function ResultPage() {
  const [currentPage, setCurrentPage] = useState(3); 
  const location = useLocation();
  const savedUser = location.state?.userData;

  if (!savedUser) {
    // Handle the case when savedUser is not available
    return <div>No user data available</div>;
  }
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="overflow-x-auto">
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
        <table className="table border border-slate-950">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Email:</th>
              <td>{savedUser.email}</td>
            </tr>
            <tr>
              <th>Mobile:</th>
              <td>{savedUser.mobile}</td>
            </tr>
            <tr>
              <th>Date of Birth:</th>
              <td>{formatDate(savedUser.dob)}</td>

            </tr>
             
            <tr>
              <th>Name:</th>
              <td>{savedUser.profile.name}</td>
            </tr>
            <tr>
              <th>Current Address:</th>
              <td>{savedUser.profile.currentAddress}</td>
            </tr>
            <tr>
              <th>Long Live:</th>
              <td>{savedUser.profile.longlive}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{savedUser.profile.description}</td>
            </tr>
            <tr>
              <th>Current Working Status:</th>
              <td>{savedUser.work.currentWorkingStatus}</td>
            </tr>
            <tr>
              <th>Additional Saving:</th>
              <td>{savedUser.work.additionalSaving}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to='/'><button className="btn btn-info mt-4">
        Click here to exit from the page
      </button></Link>
    </div>
    </>
  );
}

export default ResultPage;
