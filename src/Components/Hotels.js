import { useState } from 'react';
import './job.css';
import { Routing } from './Routing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import { clearWaitingQueue } from 'react-toastify/dist/core/store';
export function Hotels() {
 // const [isFormSubmitted, setIsFormSubmitted]=useState(false);
  const [formData, setFormData]=useState({
    name: '',
    description: '',
    generalTerms: '',
    zipcode: '',
    street: '',
    city: '',
    state: '',
    contactName: '',
    selectedTitle: '',
    phone: '',
    email: '',
    specialityName: '',
    locumType: '',
    mobile: '',
  });

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit =async () => {
    


    
    const areAllFieldsFilled = validateForm();
  
    if (areAllFieldsFilled) {
      
      const registrationData = {
        slcp_Name: formData.name,
        slcp_Type: formData.selectedTitle,
        slcp_Description: formData.description,
        slcp_GeneralAgreementTerms: formData.generalTerms,
        slcp_Location: [
          {
            slcp_Number: formData.zipcode,
            slcp_Street: formData.street,
            slcp_City: formData.city,
            slcp_State: formData.state,
          },
        ],
        slcp_Contact: [
          {
            slcp_Name: formData.contactName,
            slcp_Title: formData.selectedTitle,
            slcp_Phone: formData.phone,
            slcp_Email: formData.email,
          },
        ],
        slcp_Speciality: [
          {
            slcp_Name: formData.specialityName,
          },
        ],
        slcp_StaffingNeeds: [
          {
            slcp_LocumType: formData.locumType,
            slcp_Number: formData.mobile,
          },
        ],
      };
  
      
      console.log('Registration Data:', registrationData);
      await axios.post('http://74.235.105.192:35601/api/slcp_Facilitys',registrationData)
      .then((res)=>console.log(res.data))
      .catch((err)=>console.log(err))
     
      setFormData({
        name: '',
        description: '',
        generalTerms: '',
        zipcode: '',
        street: '',
        city: '',
        state: '',
        contactName: '',
        selectedTitle: '',
        phone: '',
        email: '',
        specialityName: '',
        locumType: '',
        mobile: '',
      });
  
      toast.success('Registration successful!');
    } else {
      toast.error('Please fill all the fields.');
    }
  }
  
  
  
  const validateForm=()=>{
    for(const field in formData){
      if(!formData[field]){
        return false;

      }
    }
    return true;
  };
  

  return (
    <>
      <Routing />
      <hr/>
      <div className='facility-reg'>
        <h1> Facility Registration</h1>
       <>
       <label htmlFor='name'>
            <p className='para'>  Name*:</p>
            </label>
            <input  type="text" id='name' placeholder="name" value={formData.name} onChange={handleChange} name="name" required/>

           <label htmlFor='description'><p className='para'>Description*:</p></label> 
            <textarea  placeholder="Type Description..." cols={39} rows={4} value={formData.description} onChange={handleChange} name="description"   required></textarea>

           <label htmlFor='generalTerms'> <p className='para' >General Agreements Terms:</p></label>
            <input  type='text' id='generalTerms' placeholder='enter general agreement terms...'  value={formData.generalTerms} onChange={handleChange} name="generalTerms" />

            <p className='para'><b>Location:</b></p>
           

            <label htmlFor='street'><p className='para'>Street:</p></label>
            <input type="text" placeholder=" Enter Street Name.." id='street'  value={formData.street}onChange={handleChange}name="street"required/>

            <label htmlFor='city'><p className='para'>City:</p></label>
            <input type="text" id='city' placeholder="Enter City Name.."value={formData.city} onChange={handleChange}name="city"required />
            <label htmlFor='zipcode'><p className='para'>Zip Code:</p></label>
            <input type="tel" id='zipcode' placeholder="Enter Zip Code.." value={formData.zipcode} onChange={handleChange} name="zipcode" required/>
           <label htmlFor='state'> <p className='para'>State:</p></label>
            <input type="text" id='state' placeholder="Enter State.." value={formData.state} onChange={handleChange} name="state" required />

            <p className='para'><b>Contact:</b></p>
            <label htmlFor='contactName'><p className='para'>Name *:</p></label>
            <input  type="text" id='contactName' placeholder="enter name.."  value={formData.contactName}  onChange={handleChange}  name="contactName"  required/>

            <p className='para'>Select title:</p>
            <select style={{ width: "300px", height: "35px" }} value={formData.selectedTitle} onChange={handleChange} name="selectedTitle"  required >
              <option>Select title</option>
              <option>mr</option>
              <option>ms</option>
              <option>mrs</option>
            </select>

           <label htmlFor='phone'> <p className='para'>Phone*:</p></label>
            <input type="tel" id='phone' placeholder="phone.." value={formData.phone} onChange={handleChange} name="phone" require />

          <label htmlFor='email'><p className='para'>Email*:</p></label>
            <input type="email" id='email' placeholder="Enter your mail id"  value={formData.email} onChange={handleChange} name="email" required />

            <p className='para'><b>Speciality:</b></p>
            <label htmlFor='specialityName'><p>Name*:</p></label>
            <input type="text" id='specialityName' placeholder="name"  value={formData.specialityName} onChange={handleChange} name="specialityName" required />

            <p className='para'><b>Staffing Needs</b></p>
            <label htmlFor='locumType'><p className='para'>Locum Type*:</p></label>
            <input  type="text" id='locumType' placeholder="enter locum type" value={formData.locumType} onChange={handleChange}name="locumType"   required />

           <label htmlFor='mobile'> <p className='para'>Mobile*:</p></label>
            <input type="tel" id='mobile' placeholder="enter mobile number" value={formData.mobile}  onChange={handleChange}   name="mobile" required/>

            <p className='para'>
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
              <ToastContainer/>
            </p>
          </>

      </div>



















    </>
  );
}