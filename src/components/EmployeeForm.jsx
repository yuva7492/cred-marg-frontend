
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { toast } from 'react-toastify';
// import axiosInstance from '../config/AxiosConfig';

// const EmployeeForm = () => {
//   const [employee, setEmployee] = useState({
//     name: '',
//     designation: '',
//     ctc: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axiosInstance.post('/employee/create', employee);
//     toast.success('Employee created successfully!');
//     setEmployee({ name: '', designation: '', ctc: '', email: '' });
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Create Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={employee.name} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label>Designation</label>
//           <input type="text" name="designation" value={employee.designation} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label>CTC</label>
//           <input type="number" name="ctc" value={employee.ctc} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" value={employee.email} onChange={handleChange} className="form-control" required />
//         </div>
//         <button type="submit" className="btn btn-primary mt-3">Add Employee</button>
//       </form>
//     </div>
//   );
// };

// export default EmployeeForm;



import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import axiosInstance from '../config/AxiosConfig';



const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    ctc: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('employee/create', employee);
      setEmployee({ name: '', designation: '', ctc: '', email: '' });
      toast.success('Employee created successfully!');
      
    } catch (error) {
      toast.error('Failed to create employee');
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={employee.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input type="text" name="designation" value={employee.designation} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>CTC</label>
          <input type="number" name="ctc" value={employee.ctc} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={employee.email} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;

