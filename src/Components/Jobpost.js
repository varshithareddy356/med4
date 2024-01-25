import  { useState } from 'react';
import './job1.css';
import { Routing } from './Routing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export function Jobpost() {
  const [formData, setFormData] = useState({
    clinicianType: '',
    speciality: '',
    generalTerms: '',
    facilityType: '',
    isRemote: '',
    agreementTerms: '',
    street: '',
    city: '',
    doorNumber: '',
    state: '',
    landmark: '',
    fromDate: '',
    toDate: '',
    hours: '',
    daysOfWeek: '',
    clinicalResponsibilities: '',
    procedures: '',
    services: '',
    otherDescription: '',
    notice: '',
    experienceYears: '',
    experienceMonths: '',
    supportStaffType: '',
    supportStaffNumber: '',
    hourlyRate: '',
    salary: '',
    credentialingType: '',
    credentialingDescription: '',
    additionalRequirementTitle: '',
    additionalRequirementDescription: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =async () => {
    const areAllFieldsFilled = validateForm();

    if (areAllFieldsFilled) {
      // Collect form data into an object based on the provided JSON structure
      const jobPostData = {
        slcp_ClinicianType: formData.clinicianType,
        slcp_Speciality: formData.speciality,
        slcp_PatientLoad: formData.generalTerms,
        slcp_FacilityType: formData.facilityType,
        slcp_Remote: formData.isRemote,
        slcp_AgreementTerms: formData.agreementTerms,
        slcp_Address: {
          slcp_Street: formData.street,
          slcp_City: formData.city,
          slcp_Zip: formData.doorNumber,
          slcp_State: formData.state,
          slcp_LandMark: formData.landmark,
        },
        slcp_Duration: {
          slcp_FromDate: formData.fromDate,
          slcp_ToDate: formData.toDate,
        },
        slcp_Shifts: {
          slcp_Shift: formData.hours,
          slcp_Hours: formData.daysOfWeek,
          slcp_DaysofWeek: formData.daysOfWeek,
        },
        slcp_ScopeofPractice: [
          {
            slcp_DescriptionofClinicalResponsibilities: formData.clinicalResponsibilities,
            slcp_DescriptionofProcedures: formData.procedures,
            slcp_DescriptionofServices: formData.services,
            slcp_Descriptionofanyother: formData.otherDescription,
          },
        ],
        slcp_Qualification: [
          {
            slcp_Notice: formData.notice,
          },
        ],
        slcp_Experience: [
          {
            slcp_Years: formData.experienceYears,
            slcp_Months: formData.experienceMonths,
          },
        ],
        slcp_SupportStaff: [
          {
            slcp_Type: formData.supportStaffType,
            slcp_Numbers: formData.supportStaffNumber,
          },
        ],
        slcp_Compensation: {
          slcp_HourlyRate: formData.hourlyRate,
          slcp_Salary: formData.salary,
        },
        slcp_Credentialing: [
          {
            slcp_Type: formData.credentialingType,
            slcp_Description: formData.credentialingDescription,
          },
        ],
        slcp_AdditionalRequirement: [
          {
            slcp_Title: formData.additionalRequirementTitle,
            slcp_Description: formData.additionalRequirementDescription,
          },
        ],
        slcp_FacilityId: 0,
      };

     
      console.log('Job Post Data:', jobPostData);

      await axios.post('http://74.235.105.192:35601/api/slcp_Jobs', jobPostData)
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((err) => {
        console.error('Error submitting job post:', err);
        
      });
    
      setFormData(initialFormData);

      toast.success('registered successfully!');
    } else {
      toast.error('Please fill all the required fields.');
    }
 

   


};





  const validateForm = () => {
    for (const field in formData) {
      if (!formData[field]) {
        console.log(`Validation failed for field: ${field}`);
        return false;
      }
    }
    return true;
  };
  
  

  const initialFormData = {
    clinicianType: '',
    speciality: '',
    generalTerms: '',
    facilityType: '',
    isRemote: '',
    agreementTerms: '',
    street: '',
    city: '',
    doorNumber: '',
    state: '',
    landmark: '',
    fromDate: '',
    toDate: '',
    hours: '',
    daysOfWeek: '',
    clinicalResponsibilities: '',
    procedures: '',
    services: '',
    otherDescription: '',
    notice: '',
    experienceYears: '',
    experienceMonths: '',
    supportStaffType: '',
    supportStaffNumber: '',
    hourlyRate: '',
    salary: '',
    credentialingType: '',
    credentialingDescription: '',
    additionalRequirementTitle: '',
    additionalRequirementDescription: '',
  };


  return (
    <>
      <Routing />
      <hr/>
      <div className='job-reg'>
        <h1>Job-Post Registration</h1>
        <p>Clinician Type:</p>
        <select 
          name='clinicianType'
          style={{ border: '1px solid grey', textAlign: 'left', padding: '5px', width: '320px', height: '40px' }}
          onChange={handleChange}
          value={formData.clinicianType}
          placeholder='enter Clinicantype'
        >
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

        <p>Speciality type:</p>
        <select 
          name='speciality'
          style={{ border: '1px solid grey', textAlign: 'left', width: '320px', height: '40px', padding: '5px' }}
          onChange={handleChange}
          value={formData.speciality}
          placeholder='enter speciality'
        >
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

     <label htmlFor='generalTerms'>
        <p>PatientLoad:</p>
        </label>
        <input
        id="generalTerms"
          type='text'
          placeholder='Patient load...'
          value={formData.generalTerms}
          onChange={handleChange}
          name='generalTerms'
          style={{ width: '330px' }}
        />

<p>facility type:</p>
            <select  name='facilityType' onChange={handleChange}  value={formData.facilityType} style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}} placeholder='enter facility' >
                <option>Select a Facility Type</option>
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

                 <label htmlFor='isRemote'>
              <p>Remote:</p>
              </label>
            <input  type='text' id='isRemote' placeholder='Remote...'  value={formData.isRemote} onChange={handleChange} name='isRemote' style={{width:"330px"}}/>
            <label htmlFor='agreementTerms'>
            <p>Agreement Terms:</p>
            </label>
            <input  type='text' id='agreementTerms' placeholder='Agreement terms...'  value={formData.agreementTerms} onChange={handleChange} name="agreementTerms" style={{width:"330px"}}/>
            <p><b>Address:</b></p>
           
           <label htmlFor='street'>
           <p>Street:</p>
           </label>
           <input type="text" id='street'placeholder=" Enter Street Name.."   value={formData.street} onChange={handleChange}  name='street'
           required/>
           <label htmlFor='city'>
           <p>City:</p>
           </label>
            <input type="text" id='city' placeholder="Enter City Name.."value={formData.city} onChange={handleChange}name="city"required />
            <label htmlFor='doorNumber'>
            <p>Zip Code:</p>
            </label>
            <input type="tel" id='doorNumber' placeholder="Enter Zip Code.." value={formData.doorNumber} onChange={handleChange} name="doorNumber" required/>
            <label htmlFor='state'>
            <p>State:</p>
            </label>
            <input type="text" id='state' placeholder="Enter State.." value={formData.state} onChange={handleChange} name="state" required />
           <label htmlFor='landmark'>
            <p>Landmark:</p>
            </label>
            <input type="text" id='landmark' placeholder="Enter Landmark.." value={formData.landmark} onChange={handleChange} name='landmark' required />
            <p><b>Duration:</b></p>
            <p>From Date*:</p>
            <input  type="date"   value={formData.fromDate}  onChange={handleChange}    name='fromDate'   required/>
            <p>To Date*:</p>
            <input  type="date"   value={formData.toDate}  onChange={handleChange}   name='toDate' required/>
   
            <p><b>Shifts:</b></p>
            <label htmlFor='hours'>
            <p>Hours*:</p>
            </label>
            <input  type="number" id='hours' placeholder='enter hours' value={formData.hours}  onChange={handleChange}  name='hours'  required/>
           <label htmlFor='daysOfWeek'>
            <p>Days of Week*:</p>
            </label>
            <input  type="number" id='daysOfWeek' placeholder='days of week'   value={formData.daysOfWeek}  onChange={handleChange} name='daysOfWeek'   required/>
            <p><b>Scope of Practice:</b></p>
           <label htmlFor='clinicalResponsibilities'>
            <p>Description of Clinical Responsibilities*:</p>
            </label>
            <input  type="text" id='clinicalResponsibilities' placeholder='enter Description of Clinical Responsibilities...' value={formData.clinicalResponsibilities}  name='clinicalResponsibilities' onChange={handleChange}    required/>
           <label htmlFor='procedures'>
            <p>Description of Procedures*:</p>
            </label>
            <input  type="text" id='procedures' placeholder=' enter Description of Procedures'   value={formData.procedures}  onChange={handleChange}  name='procedures'  required/>
           <label htmlFor='services'>
            <p>Description of Services*:</p>
            </label>
            <input  type="text" id='services' placeholder=' enter Description of  Services'   value={formData.services}  onChange={handleChange}  name='services'  required/>
            <label htmlFor='otherDescription'>
            <p>Description of any other*:</p>
            </label>
            <input  type="text" id='otherDescription' placeholder=' enter Description of  anyother'   value={formData.otherDescription}  onChange={handleChange} name='otherDescription'    required/>
            <p><b>Qualification:</b></p>
            <label htmlFor='notice'>
            <p>Notice*:</p>
            </label>
            <input  type="number" id='notice' placeholder='enter notice...' value={formData.notice}  onChange={handleChange}   name='notice' required/>
            <p><b>Experience*:</b></p>
            <label htmlFor='experienceYears'><p>Years:</p></label>
            <input  type="number" id='experienceYears' placeholder='enter experience...' value={formData.experienceYears}  onChange={handleChange}  name='experienceYears'  required/>
          <label htmlFor='experienceMonths'>  <p>Months:</p></label>
            <input  type="nuber" id='experienceMonths' placeholder='enter months...' value={formData.experienceMonths}  onChange={handleChange}   name='experienceMonths' required/>

            <p><b>Support Staff*:</b></p>
           <label htmlFor='supportStaffType'>
            <p>Type:</p>
            </label>
            <input  type="text" id='supportStaffType' placeholder='enter type...' value={formData.supportStaffType}  onChange={handleChange}   name='supportStaffType' required/>
           <label htmlFor='supportStaffNumber'>
            <p>Numbers:</p>
            </label>
            <input  type="text" id='supportStaffNumber' placeholder='enter numbers...' value={formData.supportStaffNumber}  onChange={handleChange}  name='supportStaffNumber'  required/>
            <p><b>Compensation*:</b></p>
            <label htmlFor='hourlyRate'>
            <p>Hourly Rate:</p>
            </label>
            <input  type="text" id='hourlyRate' placeholder='enter Hourly rate...' value={formData.hourlyRate}  onChange={handleChange} name='hourlyRate'   required/>
            <label htmlFor='salary'>
            <p>Salary:</p>
            </label>
            <input  type="text" id='salary' placeholder='enter salary...' value={formData.salary}  onChange={handleChange}   name='salary' required/>

            <p><b>Credentialing*:</b></p>
            <label htmlFor='credentialingType'><p>Type:</p></label>
            <input  type="text" id='credentialingType' placeholder='enter  type...' value={formData.credentialingType}  onChange={handleChange}  name='credentialingType'  required/>
           <label htmlFor='credentialingDescription'> <p>Description:</p></label>
            <input  type="text" id='credentialingDescription' placeholder='enter Description...' value={formData.credentialingDescription}  onChange={handleChange}  name='credentialingDescription'  required/>
           
            <p><b>Additional Requirement*:</b></p>
            <p>Title:</p>

            <select type="text"  value={formData.additionalRequirementTitle}  onChange={handleChange}  name='additionalRequirementTitle' style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}} required>
                <option>Select an option</option>
                <option>ms</option>
                <option>mr</option>
                <option>mrs</option>
                </select>
         <label htmlFor='additionalRequirementDescription'> <p>Description:</p></label>  
            <input  type="text" id='additionalRequirementDescription' placeholder='enter Description...' value={formData.additionalRequirementDescription}  onChange={handleChange}  name='additionalRequirementDescription'    required/>
           

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
