import  { useEffect, useState } from 'react';

import { Table, Container } from 'react-bootstrap';
import axiosInstance from '../config/AxiosConfig';

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/employee/all');
      setEmployees(response.data);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <Container className="mt-5" align="center">
      <h2>All Employees</h2>
      {error && <p>Error: {error}</p>}
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>CTC</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.email}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.ctc}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllEmployees;
