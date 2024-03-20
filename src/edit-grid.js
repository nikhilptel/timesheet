import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const EditDataFormComponent = () => {
  const [formData, setFormData] = useState({
    timeSpent: '',
    approvedHours: '',
    workDate: ''
  });
  const [formErrors, setFormErrors] = useState({
    timeSpent: '',
    approvedHours: '',
    workDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    if (!formData.timeSpent.trim()) {
      errors.timeSpent = 'Time Spent is required';
    }
    if (!formData.approvedHours.trim()) {
      errors.approvedHours = 'Approved Hours is required';
    }
    if (!formData.workDate.trim()) {
      errors.workDate = 'Work Date is required';
    }


    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }


  };

  return (
    <Container className="d-flex justify-content-center align-items-center login-form-container" style={{ height: '100vh' }}>
      <div style={{ width: '400px' }} className='login-form-wrapper'>
        <div className='heading-wrapper'>
          <h1>Edit TimeSheet</h1>
          <p>Please fill out the following fields</p>
        </div>
        <Form onSubmit={handleSubmit} className='login-form'>
          <Form.Group controlId="formBasicTimeSpent" className="pb-3">
            <Form.Label>Time Spent</Form.Label>
            <Form.Control
              type="time"
              name="timeSpent"
              value={formData.timeSpent}
              onChange={handleChange}
              placeholder="HH:MM"
              required
            />
            {formErrors.timeSpent && <Form.Text className="text-danger">{formErrors.timeSpent}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formBasicApprovedHours" className="pb-3">
            <Form.Label>Approved Hours</Form.Label>
            <Form.Control
              type="time"
              name="approvedHours"
              value={formData.approvedHours}
              onChange={handleChange}
              placeholder="HH:MM"
              required
            />
            {formErrors.approvedHours && <Form.Text className="text-danger">{formErrors.approvedHours}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formBasicWorkDate" className="pb-3">
            <Form.Label>Work Date</Form.Label>
            <Form.Control
              type="date"
              name="workDate"
              value={formData.workDate}
              onChange={handleChange}
              required
            />
            {formErrors.workDate && <Form.Text className="text-danger">{formErrors.workDate}</Form.Text>}
          </Form.Group>

          <div className="d-flex form-row align-items-center justify-content-center btn-wrapper">
            <div className="col-auto">
              <Button variant="primary" type="submit">Submit</Button>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default EditDataFormComponent;