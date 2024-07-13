// src/pages/AllVendors.jsx
import { useEffect, useState } from 'react';

import { Table, Container } from 'react-bootstrap';
import axiosInstance from '../config/AxiosConfig';

const AllVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/vendor/all'); 
      setVendors(response.data);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };
  return (
    <Container className="mt-5" align="center">
      <h2>All Vendors</h2>
      {error && <p>Error: {error}</p>}
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>UPI</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(vendor => (
            <tr key={vendor.email}>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.upi}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllVendors;
