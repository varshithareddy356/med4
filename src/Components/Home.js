

import { FaBagShopping } from "react-icons/fa6";
import './Homepage.css'
import { FaPhoneAlt } from "react-icons/fa";

import { useState } from 'react'
import { Routing } from './Routing'


import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoMdPersonAdd } from 'react-icons/io';
export function Homepage() {
const [data,setData]=useState('hotel')

const navigate=useNavigate()
const Handlelcick=()=>{
  navigate("/Hoteldetailed")
}

  const Handlelocum=()=>{
    navigate("/locum")
  }
       return (<>
       
        <Routing/>
       <hr/>
       <br/>
       <div className='id6'>
      <br/>
     
       <div className='find-main-container' style={{ backgroundColor: "white", boxShadow: "-1px 2px 2px 2px grey",position:"absolute",zIndex:999 }}>
        <div className='find-container'>
          <span style={{borderTop:data==='hotel'?'2px solid red':'none',width:"155px",borderRight:"1px solid grey",display:"flex",justifyContent:"center"}}>
            <div onClick={() => setData('hotel')}>
            <FaBagShopping style={{ fontSize: "25px",color:data==='hotel'?'red':'grey'}} />
              <p style={{color:data==='hotel'?'red':'grey'}}>Job </p>
            </div>
          </span>
          <span style={{ borderTop:data==='car'?'2px solid red':'none',width:"155px",borderRight:"1px solid grey",display:"flex",justifyContent:"center" }}>
            <div onClick={()=>setData('car')} >
              <IoMdPersonAdd style={{fontSize: "25px",color:data==='car'?'red':'grey'}} />
              <p style={{color:data==='car'?'red':'grey'}}>Locum Availability</p>
            </div>
          </span>
        </div>
          {
              data==="hotel"?
              <div className='hotel'>  
      <div>
        <p><b>Facility Type:</b></p>
        
     
      <select   style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}}>
        <option>Select a Facility Type</option>
        <option>Hospitals</option>
        <option>Clinics</option>
        <option>Nursing Homes</option>
        <option>Ambulatory Surgery Centers</option>
        <option>Mental Health Facilities</option>
        <option>Home Health Care Agencies</option>
        <option>Diagnostic Imaging Centers</option>
        <option>Dental Practices</option>
        <option>Optometry Clinics</option>
        <option>Pharmacies</option>
        <option>Hospices</option>
        <option>Blood Banks</option>
        <option>Outpatient Rehabilitation Centers</option>
        <option>Community Health Centers</option>
        <option>Maternity Hospitals</option>
        <option>Cancer Treatment Centers</option>
        <option>Pediatric Clinics</option>
        <option>Long-term Care Facilities</option>
      </select>

<p><b>Speciality</b></p>

      <select    style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}} >
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

<div >
  <p><b>City:</b></p>
                <input type="text" placeholder="enter your city" style={{width:"300px",height:"40px",textIndent:"40px",fontSize:"17px"}}/>
               <FaMapMarkerAlt style={{fontSize:"25px",position:"absolute",left:"10px",bottom:"180px"}}/>
              </div> 
              <div style={{display:"inline-block", marginRight:"20px"}}>
          <p><b>From</b></p>
          <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
      </div>
      <div style={{display:"inline-block"}}>
          <p><b>To</b></p>
          <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
      </div>
              
<br/><br/>
<div>
<button style={{width:"300px",height:'35px',backgroundColor:"red",color:"white",borderRadius:"25px",border:"none",margin:"8px"}} onClick={Handlelcick}>Find a job</button>
</div>  
      </div>
            </div>
              :
              <div className='car'>
          
             <div style={{display:"inline-block", marginRight:"20px"}}>
          <p><b>From</b></p>
          <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
      </div>
            <div style={{display:"inline-block"}}>
          <p><b>To</b></p>
          <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
      </div>
      <p><b>Clinician Type:</b></p>
        
     
      <select   style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}}>
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

<p><b>Speciality</b></p>

      <select    style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}} >
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


             

<div >
  <p><b>Contact:</b></p>
                <input type="tel" placeholder="enter your number" style={{width:"300px",height:"40px",textIndent:"40px",fontSize:"17px"}}/>
               <FaPhoneAlt style={{fontSize:"25px",position:"absolute",left:"20px",bottom:"170px"}}/>
              </div> 
              <div >
  <p><b>Board Certification:</b></p>
                <input type="text" placeholder="Board Certification" style={{width:"300px",height:"40px",textIndent:"40px",fontSize:"17px"}}/>
               
              </div> 

             <div>
<button style={{width:"300px",height:'35px',backgroundColor:"red",color:"white",borderRadius:"25px",border:"none",margin:"8px"}} onClick={Handlelocum}>Find a
availability</button>
</div>
              </div>
            
            
            }
         
        </div>
        </div>
       
      </> )
}

