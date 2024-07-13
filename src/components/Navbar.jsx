
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
      <div className="container">
        <Link className="navbar-brand mx-auto" to="/">Credmarg</Link>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/create-employee">Create Employee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-vendor">Create Vendor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employees">All Employees</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendors">All Vendors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emails">All email records</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
