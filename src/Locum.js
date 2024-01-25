
import { Routing } from "./Routing";

import { FaPhoneAlt } from "react-icons/fa";

import "./Hotelsdetails.css"
import { useEffect, useState } from "react";
import axios from "axios";
export function Locumavail(){


 const[locumdata,setdata1]=useState([])
     useEffect(()=>{
        axios.get("http://74.235.105.192:35601/api/slcp_Locums/GetByQuery?Id=0&includeProperties=slcp_Name,slcp_DoB,slcp_LocumContact").then((res)=>{
            console.log(res)
            setdata1(res.data)

        }).catch((err)=>{console.log(err)})
    })

    return(

        <>
        <Routing/>
        <hr/>
        <div>
        <input type="date" style={{width:"145px", height:"37px", fontSize: "17px",margin:"10px"}}/>
                <input type="date" style={{width:"145px", height:"37px", fontSize: "17px",margin:"10px"}}/>
                <select   style={{border:"1px solid grey", textAlign:"left",width:"150px",height:"39px",margin:"10px"}}>
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
             

<select    style={{border:"1px solid grey", textAlign:"left",width:"150px",height:"39px",margin:"10px"}} >
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
<option>Addiction Medicine</option>
</select>
<input type="number" placeholder="enter number" style={{width:"155px",height:"34px",textIndent:"30px",margin:"10px"}}/>
               <FaPhoneAlt style={{position:"absolute",left:"699px",bottom:"482px"}}/>
               <input type="text" placeholder="Board Certification" style={{width:"150px",height:"33px",margin:"10px"}}/>
               <button style={{width:"150px",height:"33px",border:"none",backgroundColor:"red",color:"white",borderRadius:"25px",margin:"10px"}}>Search</button>
        </div>
        <hr/>
        <div className='hotels-display-container'>
        <div className='hotels-container'>
        {
  locumdata.map((item) => (
    <div className="hotels-info" key={item.id}>
      <div>
        <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=sph" className="image" alt="photo" />
      </div>
      <div style={{ marginLeft: "8px" }}>
        ClinicianType: <b style={{ color: 'darkblue' }}>{item.slcp_ClinicianType}</b>
        <p><b style={{ color: 'green' }}>{item.slcp_Speciality}</b></p>
      
              Name: {item.slcp_Name && (
                <>
                  <span style={{ color: 'darkgray' }}>{item.slcp_Name.slcp_FirstName}</span> <span style={{ marginLeft: "8px", color: 'gray' }}>{item.slcp_Name.slcp_Title}</span>
                </>
              )}
           
          Contact: {item.slcp_LocumContact && (
            <span style={{ margin: "5px", color: 'blue'  }}>{item.slcp_LocumContact.slcp_MobileNumber}</span>
          )}
          <p >Gmail:: {item.slcp_LocumContact && item.slcp_LocumContact.slcp_Email}</p>
       
        
          DOB: {item.slcp_DoB && (
            <span style={{ color: 'brown' }}>
              {item.slcp_DoB.slcp_MonthofBirth}  {item.slcp_DoB.slcp_YearofBirth} 
            </span >
          )}
       
      </div>
    
    </div>
  ))
}        </div>
        <div className='map'>
            <img src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg" alt='not' height="600px" />
        </div>
      </div>

        </>
    )
}