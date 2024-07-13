// src/components/VendorForm.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import axiosInstance from '../config/AxiosConfig';

const VendorForm = () => {
  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    upi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post('/vendor/create', vendor);
    toast.success('Vendor created successfully!');
    setVendor({ name: '', email: '', upi: '' });
  };

  return (
    <div className="container mt-5">
      <h2>Create Vendor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={vendor.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={vendor.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>UPI</label>
          <input type="text" name="upi" value={vendor.upi} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Vendor</button>
      </form>
    </div>
  );
};

export default VendorForm;
