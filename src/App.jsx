import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
//import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import CreateEmployee from './pages/CreateEmployee';
import CreateVendor from './pages/CreateVendor';
import AllEmployees from './pages/AllEmployees';
import AllVendors from './pages/AllVendors';
import AllEmilRecords from './pages/AllEmailsRecords';

const PrivateRoute = () => {
  const auth = sessionStorage.getItem('auth');
  console.log(auth);
  return  <><Navbar /><Outlet /> </> ;
};

function App() {
  return (
    <>
      <ToastContainer />
      
   
    <Router>
      <div>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute/>}>
          <Route path="/create-employee" element={<CreateEmployee />} />

          <Route path="/create-vendor" element={<CreateVendor />} />
          <Route path="/employees" element={<AllEmployees />} />
          <Route path="/vendors" element={<AllVendors />} />
          <Route path="/emails" element={<AllEmilRecords />} />
          <Route path="/" element={<Navigate to="/login" />} />

          </Route>

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
