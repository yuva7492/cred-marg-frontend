import { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import axiosInstance from '../config/AxiosConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllEmailRecords = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axiosInstance.get('/email/all');
        setEmails(response.data);
      } catch (error) {
        toast.error('Failed to fetch email records.');
      }
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
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email, index) => (
            <tr key={email.id || index}>
              <td>{email.vendorName}</td>
              <td>{email.vendorEmail}</td>
              <td>{email.vendorUpi}</td>
              <td>{email.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  );
};

export default AllEmailRecords;
