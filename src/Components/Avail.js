import { useState } from 'react';
import './job.css';
import { Routing } from './Routing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export function Avail() {
  const [availabilityData, setAvailabilityData] = useState({
    fromDate: '',
    toDate: '',
    fromTime: '',
    toTime: '',
  });

  const handleAvailabilityChange = ({ target: { name, value } }) => {
    setAvailabilityData({
      ...availabilityData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const areAllFieldsFilled = validateForm();

    if (areAllFieldsFilled) {
      const jobPostData = {
        slcp_FromDate: availabilityData.fromDate,
        slcp_ToDate: availabilityData.toDate,
        slcp_FromTime: availabilityData.fromTime,
        slcp_ToTime: availabilityData.toTime,
        slcp_LocumId: 0,
      };

      console.log('Availability Post Data:', jobPostData);

      await axios.post('http://74.235.105.192:35601/api/slcp_Availabilitys', jobPostData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error('Error submitting availability:', err);
        });

      setAvailabilityData(initialAvailabilityData);

      toast.success('Registration successful!');
    } else {
      toast.error(' Please fill all the fields.');
    }
  };

  const validateForm = () => {
    for (const field in availabilityData) {
      if (!availabilityData[field]) {
        return false;
      }
    }
    return true;
  };

  const initialAvailabilityData = {
    fromDate: '',
    toDate: '',
    fromTime: '',
    toTime: '',
  };

  return (
    <>
      <Routing />
      <hr />
      <div className='facility-reg'>
        <h3>Availability-Post Registration</h3>
        <p>
          <b>Availability:</b>
        </p>
        <label htmlFor='fromDate'>
          <p>From Date*:</p>
        </label>
        <input
          type='date'
          id='fromDate'
          value={availabilityData.fromDate}
          onChange={handleAvailabilityChange}
          name='fromDate'
          required
        />

        <p>From Time*:</p>
        <input
          type='time'
          value={availabilityData.fromTime}
          onChange={handleAvailabilityChange}
          name='fromTime'
          required
        />
        <p>To Date*:</p>
        <input
          type='date'
          value={availabilityData.toDate}
          onChange={handleAvailabilityChange}
          name='toDate'
          required
        />

        <p>To Time*:</p>
        <input
          type='time'
          value={availabilityData.toTime}
          onChange={handleAvailabilityChange}
          name='toTime'
          required
        />
        <p>
          <button
            style={{
              color: 'white',
              backgroundColor: 'orangered',
              border: '1px solid orangered',
              width: '100px',
              padding: '5px',
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <ToastContainer />
        </p>
      </div>
    </>
  );
}
