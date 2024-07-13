import  { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import axiosInstance from '../config/AxiosConfig';

const AllEmilRecords = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axiosInstance.get('/email/all');
      setEmails(response.data);
    };

    fetchEmails();
  }, []);

  return (
    <Container className="mt-5" align="center">
      <h2>All Email Records</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>UPI</th>
            <th>Mesage</th>
          </tr>
        </thead>
        <tbody>
          {emails.map(email => (
            <tr key={email.email}>
              <td>{email.vendorName}</td>
              <td>{email.vendorEmail}</td>
              <td>{email.vendorUpi}</td>
              <td>{email.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllEmilRecords;
