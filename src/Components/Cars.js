


import  { useState } from 'react';
import "./locum.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export function Cars() {
  //const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clinicianType: '',
    speciality: '',
    photo:"",
    firstName: '',
    middleName: '',
    lastName: '',
    title: '',
   month:"",
   day:"",
   year:"",
    mobileNumber: '',
    homeNumber: '',
    email: '',
    caqhReferenceNumber: '',
    agencyName: '',
    otherCredentialingRef: '',
    otherCredentialingContact: '',
    boardCertificationRef: '',
    insuranceNotice: '',
    profileDocType: '',
    profileDocNumber: '',
    profileDocTitle: '',
    profileDocFile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const areAllFieldsFilled = validateForm();
  
    if (areAllFieldsFilled) {
      const locumData = {
        slcp_ClinicianType: formData.clinicianType,
        slcp_Speciality: formData.speciality,
        slcp_Photo: formData.photo,
        slcp_Name: {
          slcp_FirstName: formData.firstName,
          slcp_MiddleName: formData.middleName,
          slcp_LastName: formData.lastName,
          slcp_Title: formData.title,
        },
        slcp_DoB: {
          slcp_MonthofBirth: formData.month,
          slcp_DayofBirth: formData.day,
          slcp_YearofBirth: formData.year,
        },
        slcp_LocumContact: {
          slcp_MobileNumber: formData.mobileNumber,
          slcp_HomeNumber: formData.homeNumber,
          slcp_Email: formData.email,
        },
        slcp_CAQHCredentialing: [
          {
            slcp_ReferenceNumber: formData.caqhReferenceNumber,
          },
        ],
        slcp_OtherCredentialing: [
          {
            slcp_NameofAgency: formData.agencyName,
            slcp_ReferenceNumber: formData.otherCredentialingRef,
            slcp_ContactforOtherCredentialingService: formData.otherCredentialingContact,
          },
        ],
        slcp_BoardCertification: [
          {
            slcp_ReferenceNumber: formData.boardCertificationRef,
          },
        ],
        slcp_Insurance: [
          {
            slcp_Notice: formData.insuranceNotice,
          },
        ],
        slcp_ProfileDocs: [
          {
            slcp_DocType: formData.profileDocType,
            slcp_DocNumber: formData.profileDocNumber,
            slcp_Title: formData.profileDocTitle,
            slcp_Doc: formData.profileDocFile, // Add the appropriate data for the Document field
          },
        ],
      };
  
      // You can now use locumData as needed, for example, send it to a server
      console.log('Locum Data:', locumData);
  
      try {
        const response = await axios.post('http://74.235.105.192:35601/api/slcp_Locums', locumData);
        console.log('Response:', response.data);
        toast.success('Registration successful!');
      } catch (error) {
        console.error('Error submitting availability:', error);
        toast.error('Registration failed. Please try again.');
        // Log the error response for further inspection
        console.log('Error Response:', error.response?.data);
      }

      setFormData({
        clinicianType: '',
        speciality: '',
        photo:'',
        firstName: '',
        middleName: '',
        lastName: '',
        title: '',
        month: "",
        day: "",
        year: "",
        mobileNumber: '',
        homeNumber: '',
        email: '',
        caqhReferenceNumber: '',
        agencyName: '',
        otherCredentialingRef: '',
        otherCredentialingContact: '',
        boardCertificationRef: '',
        insuranceNotice: '',
        profileDocType: '',
        profileDocNumber: '',
        profileDocTitle: '',
        profileDocFile: '',
      });
    } else {
      toast.error('Registration failed. Please fill in all fields.');
    }
  };
  const validateForm = () => {
    for (const field in formData) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <hr/>
      <div className='locum-reg'>
        <h1>Locum Registration</h1>
       
        <div className="form">
          <p>
            <label htmlFor="clinician">Clinician Type:</label>

            <select type='text' id="clinician" placeholder='ClinicianType' value={formData.clinicianType} onChange={handleChange} name="clinicianType" required  style={{width:"320px",height:'40px'}}>
            <option>Select a Clinician Type</option>
        <option>Physicians</option>
        <option>Nurses</option>
        <option>Physician Assistants (PAs)</option>
        <option>Dentists</option>
        <option>Pharmacists</option>
        <option>Psychologists</option>
        <option>Occupational Therapists</option>
        <option>Physical Therapists</option>
        <option>Speech-Language Pathologists</option>
        <option>Optometrists</option>
        <option>Ophthalmologists</option>
        <option>Chiropractors</option>
        <option>Podiatrists</option>
              </select>
          </p>
          <p>
            <label htmlFor="speciality">Speciality:</label>
            <select type='text' id="speciality" placeholder='Speciality' value={formData.speciality} onChange={handleChange} name="speciality" style={{width:"320px",height:'40px'}} required>

            <option>Select a Speciality</option>
  <option>Anesthesiology</option>
  <option>Cardiology</option>
  <option>Dermatology</option>
  <option>Emergency Medicine</option>
  <option>Endocrinology</option>
  <option>Gastroenterology</option>
  <option>General Surgery</option>
  <option>Hematology</option>
  <option>Infectious Disease</option>
  <option>Internal Medicine</option>
  <option>Nephrology</option>
  <option>Neurology</option>
  <option>Obstetrics and Gynecology</option>
<option>Ophthalmology</option>
<option>Orthopedic Surgery</option>
<option>Otolaryngology (ENT)</option>
<option>Pediatrics</option>
<option>Plastic Surgery</option>
<option>Psychiatry</option>
<option>Pulmonology</option>
<option>Radiology</option>
<option>Rheumatology</option>
<option>Urology</option>
<option>Vascular Surgery</option>
<option>Allergy and Immunology</option>
<option>Physical Medicine and Rehabilitation</option>
<option>Critical Care Medicine</option>
<option>Pain Medicine</option>
<option>Sports Medicine</option>
<option>Nuclear Medicine</option>
<option>Medical Genetics</option>
<option>Pathology</option>
<option>Forensic Medicine</option>
<option>Neonatology</option>
<option>Geriatrics</option>
<option>Infectious Disease</option>
<option>Medical Oncology</option>
<option>Pediatric Surgery</option>
<option>Sleep Medicine</option>
<option>Transplant Surgery</option>
<option>Nephrology</option>
<option>Colorectal Surgery</option>
<option>Gynecologic Oncology</option>
<option>Interventional Radiology</option>
<option>Reproductive Endocrinology and Infertility</option>
<option>Palliative Medicine</option>
<option>Clinical Neurophysiology</option>
<option>Hospice and Palliative Medicine</option>
<option>Pediatric Hematology-Oncology</option>
<option>Addiction Medicine</option>
              </select>
          </p>

          <div>
            <p>
                <label htmlFor="Photo">Photo:</label>
                <input type="file"  style={{width:"300px",height:"30px"}} value={formData.photo} onChange={handleChange} name='photo'/>
            </p>
            <label ><b>Name</b></label>
            <p>
              <label htmlFor="firstName">First Name:</label>
              <input type='text' id='firstName' placeholder='First name' value={formData.firstName} onChange={handleChange} name="firstName"  required/>
            </p>
            <p>
              <label htmlFor="middleName">Middle Name:</label>
              <input type='text' id='middleName' placeholder='(Optional)Middle name' value={formData.middleName} onChange={handleChange} name="middleName"/>
            </p>
            <p>
              <label htmlFor="lastName">Last Name:</label>
              <input type='text' id='lastName' placeholder='Last name' value={formData.lastName} onChange={handleChange} name="lastName" required/>
            </p>

            <p>
              <label htmlFor="title">Title:</label>
              <select type='text' id='title' placeholder='Mr/Ms/Mrs' value={formData.title} onChange={handleChange} name="title" style={{width:"320px",height:"40px"}} required>
                <option>select an option</option>
                <option>Dr</option>
                <option>Prof</option>
                <option>MD</option>
                <option>Ph.D</option>
                </select>
            </p>
          </div>
         <b>Date of birth:</b>
          <p>
            <label htmlFor="month">Month of birth:</label>
            <input type="text" id="month" value={formData.month} onChange={handleChange} name="month" placeholder="month"/>
          </p>
          <p>
            <label htmlFor="day">Day of birth:</label>
            <input type="text" id="day" value={formData.day} onChange={handleChange} name="day" placeholder="day"/>
          </p>
          <p>
            <label htmlFor="year">Year of birth:</label>
            <input type="datetime-local" id="year" value={formData.year} onChange={handleChange} name="year" placeholder="year"/>
          </p>

          <div>
            <label ><b>Locum Contact:</b></label><br></br>
            <p>
              <label htmlFor="mobileNumber">Mobile:</label>
              <input type='tel' id='mobileNumber' placeholder='mobile number' value={formData.mobileNumber} onChange={handleChange} name="mobileNumber" required/>
            </p>
            <p>
              <label htmlFor="homeNumber">Home </label>
              <input type='tel' id='homeNumber' placeholder='Home number' value={formData.homeNumber} onChange={handleChange} name="homeNumber" required />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input type='email' id='email' placeholder='email' value={formData.email} onChange={handleChange} name="email" required/>
            </p>
          </div>

          <label ><b>CAQH Credentialing:</b></label><br></br>

          <p>
            <label htmlFor="caqhReferenceNumber">Reference Number:</label>
            <input type='tel' id='caqhReferenceNumber' placeholder='Reference Number' value={formData.caqhReferenceNumber} onChange={handleChange} name="caqhReferenceNumber" required/>
          </p>

          <div>
            <label ><b>Other Credentialing:</b></label><br></br>
            <p>
              <label htmlFor="agencyName">Name of Agency:</label>
              <input type='text' id='agencyName' placeholder="Name of Agency" value={formData.agencyName} onChange={handleChange} name="agencyName" required />
            </p>
            <p>
              <label htmlFor="otherCredentialingRef">Reference Number:</label>
              <input type='number' id='otherCredentialingRef' placeholder='Reference Number' value={formData.otherCredentialingRef} onChange={handleChange} name="otherCredentialingRef" required/>
            </p>
            <p>
              <label htmlFor="otherCredentialingContact">Contact for Other Credentialing Service:</label>
              <input type='tel' placeholder='contact number' value={formData.otherCredentialingContact} onChange={handleChange} name="otherCredentialingContact" required />
            </p>
          </div>

          <label ><b>Board Certification:</b></label><br></br>
          <p>
            <label >Reference Number:</label>
            <input type='tel' placeholder='Reference Number' value={formData.boardCertificationRef} onChange={handleChange} name="boardCertificationRef" required/>
          </p>

          <label ><b>Insurance</b></label><br></br>
          <p>
            <label >Notice:</label>
            <input type='tel' placeholder='notice' value={formData.insuranceNotice} onChange={handleChange} name="insuranceNotice" required/>
          </p>

          <div>
            <label><b>Profile Docs</b></label><br></br>
            <p>
              <label htmlFor='profileDocType'>Doc Type:</label>
              <input type='text' id='profileDocType' placeholder='Doc Type' value={formData.profileDocType} onChange={handleChange} name="profileDocType" required/>
            </p>
            <p>
              <label htmlFor='profileDocNumber'>Doc Number:</label>
              <input type='text' id='profileDocNumber' placeholder='Doc Number' value={formData.profileDocNumber} onChange={handleChange} name="profileDocNumber" required/>
            </p>
            <p>
              <label htmlFor='profileDocTitle'>Title:</label>
              <input type='text' id='profileDocTitle' placeholder='Doc Tittle' value={formData.profileDocTitle} onChange={handleChange} name="profileDocTitle" required/>
            </p>
            <p>
              <label htmlFor='profileDocFile'>Document:</label>
              <input type='file' id='profileDocFile' placeholder='Doc' value={formData.profileDocFile} onChange={handleChange} name="profileDocFile" required/>
            </p>
          </div>
          <button  onClick={handleSubmit} style={{
                  color: 'white',
                  backgroundColor: 'orangered',
                  border: '1px solid orangered',
                  width: '100px',
                  padding: '5px',
                }}>
           submit
        </button>
        <ToastContainer/>
          


        </div>
        
       
      </div>
        
    </>
  );
}

