import React, { useState } from 'react'
import './locum.css'
import axios from 'axios';
//import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from 'react';
import { Routing } from './Routing';
export function Locumavail() {
  const [locumdata,setLocumdata]=useState();
  const [filterlocum,setFilterLocum]=useState();
  const [toggle,setToggle]=useState(false)
 const searchdata={
    clinician_type:"",
    speciality:"",
    fromdate:"",
    todate: "",
  }
  console.log(filterlocum);
  useEffect(() => {
    axios.get('http://74.235.105.192:35601/api/slcp_Locums/GetByQuery?Id=0&includeProperties=slcp_Name,slcp_DoB,slcp_LocumContact')
      .then((res) => setLocumdata(res.data))
      // console.log("##############################3",res))
      .catch((error) => console.error('Axios request failed:', error));
  }, []);
  console.log("##############333",locumdata);
const handleSearch= (e)=>{
e.preventDefault()
searchdata[e.target.name]=e.target.value
}
const handleFilter= async()=>{
  setToggle(!toggle);
  console.log("ssssssssssss",searchdata);
  await axios.get('http://74.235.105.192:35601/api/Reports/slcp_AvailabilitySearchLinq',{params:searchdata})
  .then((res)=>{console.log("Response=====",res.data)
  setFilterLocum(res.data)}).catch((err)=>{
    console.log("error",err);
   
  })

}
// console.log("ssssssssssss",searchdata);
    return (<>
       <div>
        <div>
          <Routing/><hr/>
        <input name='fromdate' onChange={handleSearch}  type="date" style={{width:"145px", height:"37px", fontSize: "17px",margin:"10px"}}/>
                <input name='todate' onChange={handleSearch} type="date" style={{width:"145px", height:"37px", fontSize: "17px",margin:"10px"}}/>
                <select  name='clinician_type' onChange={handleSearch}    style={{border:"1px solid grey", textAlign:"left",width:"150px",height:"39px",margin:"10px"}}>
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
             

<select    name="speciality" onChange={handleSearch}   style={{border:"1px solid grey", textAlign:"left",width:"150px",height:"39px",margin:"10px"}} >
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
<input type="number" placeholder="enter number" style={{width:"155px",height:"34px",textIndent:"30px",margin:"10px"}}/>
               {/* <FaPhoneAlt style={{position:"absolute",left:"695px",bottom:"485px"}}/> */}
               <input type="text" placeholder="Board Certification" style={{width:"150px",height:"33px",margin:"10px"}}/>
               <button style={{width:"170px",height:"33px",border:"none",backgroundColor:"red",color:"white",borderRadius:"25px",margin:"10px"}}  onClick={handleFilter}>Search</button>
        </div>
       </div>
       <div>
       <div className='hotels-display-container'>
        <div className='hotels-container'>
          {
   !toggle?
   <>
    {
  locumdata&&locumdata.map((item) => (
    <div className="hotels-info" key={item.id} style={{minHeight:""}}>
      <div>
      
        <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" alt='doctor' width="200px" height="250"/>
      </div>
      <div style={{ marginLeft: "8px" }}>
        <p style={{display:"inline"}}>ClinicianType: <b>{item.slcp_ClinicianType}</b></p><br/><br/>
        <p style={{display:"inline"}}>Speciality: <b>{item.slcp_Speciality}</b></p><br/><br/>
        <p style={{display:"inline"}}>
          Name: {item.slcp_Name && (
            <>
              {item.slcp_Name.slcp_FirstName} <span style={{ marginLeft: "8px" }}>{item.slcp_Name.slcp_Title}</span>
            </>
          )}
        </p><br/><br/>
        <p style={{display:"inline"}}>
          Contact: {item.slcp_LocumContact && (
            <span style={{ margin: "5px", color: "green" }}>{item.slcp_LocumContact.slcp_MobileNumber}</span>
          )}
          <br/><br/><p style={{display:"inline"}}>Gmail:: {item.slcp_LocumContact && item.slcp_LocumContact.slcp_Email}</p>
        </p><br/><br/>
        <p style={{display:"inline"}}>
          DOB: {item.slcp_DoB && ( <>
              {item.slcp_DoB.slcp_MonthofBirth}  {item.slcp_DoB.slcp_YearofBirth} 
            </>
          )}
        </p>
      </div>
    
    </div>
  ))
}      
   </>
   :
   <>
     {
  filterlocum&&filterlocum.map((item) => (
    <div className="hotels-info" key={item.id} style={{minHeight:""}}>
      <div>
      
        <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" alt='doctor' width="200px" height="250"/>
      </div>
      <div style={{ marginLeft: "8px" }}>
        <p style={{display:"inline"}}><b>ClinicianType: </b>{item.slcp_Locums.slcp_ClinicianType}</p>
        <br/><br/>
        <p style={{display:"inline"}}><b>Speciality:</b> {item.slcp_Locums.slcp_Speciality}</p><br/><br/>
        {/* <p>
          Name: {item.slcp_Name && (
            <>
              {item.slcp_Name.slcp_FirstName} <span style={{ marginLeft: "8px" }}>{item.slcp_Name.slcp_Title}</span>
            </>
          )}
        </p> */}
        {/* <p>
          Contact: {item.slcp_LocumContact && (
            <span style={{ margin: "5px", color: "green" }}>{item.slcp_LocumContact.slcp_MobileNumber}</span>
          )}
          <p >Gmail:: {item.slcp_LocumContact && item.slcp_LocumContact.slcp_Email}</p>
        </p> */}
        {/* <p>
          DOB: {item.slcp_DoB && ( <>
              {item.slcp_DoB.slcp_MonthofBirth}  {item.slcp_DoB.slcp_YearofBirth} 
            </>
          )}
        </p> */}
        <p style={{display:"inline"}}><b>FromDate:</b><p>{item.slcp_Availabilitys.slcp_FromDate}</p></p>
        <p style={{display:"inline"}}><b>ToDate:</b><p>{item.slcp_Availabilitys.slcp_ToDate}</p></p>
      </div>
    
    </div>
  ))
}  
   </>
          }
          
  </div>
        <div className='map'>
            <img src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg" alt='not' height="600px" />
        </div>
      </div>
       </div>
       </>
    )
}