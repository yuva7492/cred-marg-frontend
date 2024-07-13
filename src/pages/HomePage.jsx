import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CreateEmployee from '../pages/CreateEmployee';
import CreateVendor from '../pages/CreateVendor';
import AllEmployees from '../pages/AllEmployees';
import AllVendors from '../pages/AllVendors';
import AllEmilRecords from '../pages/AllEmailsRecords';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
  <Router>
      <div>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/create-vendor" element={<CreateVendor />} />
          <Route path="/employees" element={<AllEmployees />} />
          <Route path="/vendors" element={<AllVendors />} />
          <Route path="/emails" element={<AllEmilRecords />} />
          <Route path="/" element={<CreateEmployee />} />
        </Routes>
        
      </div>
      </Router>
  
  );
};

export default HomePage;