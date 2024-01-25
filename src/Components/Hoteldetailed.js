import React, { useState } from 'react'
import './Hotelsdetails.css'
import { useEffect } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routing } from './Routing';
export function Hoteldetailed() {
  const [jobdata2, setJobdata] = React.useState()
  const [filteredData, setFilteredData] = useState([]);
  const [toggle,setToggle]=useState(false)

  useEffect(() => {
    
    axios.get('http://74.235.105.192:35601/api/Reports/slcp_JobSearchLinq?slcp_Speciality=&fromdate=&todate=&city=')  
    .then((res) => setJobdata(res.data))
      .catch((error) => console.error('Axios request failed:', error));
  }, []);
  // {
  //   slcp_Speciality: 'Cardiology',
  //   fromdate: '2024-01-19T13:01:39',
  //   todate: '2024-01-21T13:01:42',
  //   city: '', // Add the city parameter if needed
  // }
 console.log("jobdata....................",jobdata2);
    const fetchData = async () => {
      try {
        setToggle(!toggle)
        console.log("Query...............",query);
        for (const key in query) {
          if (query.hasOwnProperty(key) && query[key] === '') {
           return toast.error("please fill in all feilds")
              // alert('');
              // document.getElementById('reg_form_empty').innerHTML="Please fill in all fields"
              // return setTimeout(()=> document.getElementById('reg_form_empty').innerHTML="",2000)
               // Stop registration process if any field is empty
          }
      }
         await axios.get(
          'http://74.235.105.192:35601/api/Reports/slcp_JobSearchLinq',
          {
            params:query ,
          }
        ).then((res)=>{console.log("res======",res) 
        setFilteredData(res.data)}).catch((err)=>console.log(err))
        ;
       
        // setFilteredData(response.data);
        // var city=document.getElementById('city')
        // var speciality=document.getElementById('speciality')
        // let todate=document.getElementById('todate')
        // let facility=document.getElementById('facility')
        // let fromdate=document.getElementById('fromdate')
        // city.value=''
        // facility.value=" "
        // speciality.value=" " 
        // fromdate.value=" "
        // todate.value=" "
        // if(filteredData.length===0)
        //  toast.error("no search found")
        console.log("ffffffffffffffffffffff",filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };
    // document.addEventListener("DOMContentLoaded", function() {
    //   // Get the input field element by its ID
    //   var inputField = document.getElementById('city');

    //   // Set the value of the input field to an empty string
    //   inputField.value = ""})
    
   
console.log("ffffffffffffffffffffff",filteredData);
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  let query={
    speciality:"",
    fromdate:'',
    todate:'',
    city:'',
  }
  function handleChange(e){
e.preventDefault()
query[e.target.name]=e.target.value
  }
  // console.log("################",query);
  // console.log(jobdata2);
  
    return (
        <>
         <div>
          <Routing/>
          <hr/>
      {/* <h1>Filtered Data</h1> */}
      {/* <ul>
        {filteredData.map((item) => (
          <>
           <li key={item.id}>{item.slcp_ClinicianType}</li>
           <li key={item.id}>{item.slcp_Speciality}</li>
           <li key={item.id}>{item.slcp_City}</li>
           <li key={item.id}>{item.slcp_FromDate}</li>
          </>
         
          
        ))}
      </ul> */}
    </div>
        <div>
        <div style={{margin:"10px"}} >
              <select id='facility'  style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"220px",height:"40px"}}  autoComplete='off'>
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
        
                     
        
        <select id="speciality"   style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"220px",height:"40px",margin:"10px"}} name='speciality' onChange={handleChange} autoComplete='off' >
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
        <input id='city' type="text" placeholder="enter your city" style={{width:"220px",height:"33px",textIndent:"40px",fontSize:"17px"}} name='city'onChange={handleChange} autoComplete='off'/>
                       
                     
                       
        
                        <input id='fromdate' type="date" style={{width:"140px", height:"35px", fontSize: "17px",margin:"10px"}} name='fromdate' onChange={handleChange} autoComplete='off'/>
                        <input  id='todate' type="date" style={{width:"140px", height:"35px", fontSize: "17px",margin:"10px"}} name='todate' onChange={handleChange} autoComplete='off'/>
         
        <button style={{width:"150px",height:"41px",backgroundColor:"red",color:"white",margin:"10px",border:"none",borderRadius:"25px"}} onClick={fetchData} >Search</button> 
        
                      </div>
        </div>
        <div>

        <div className='hotels-display-container'>
        <div className='hotels-container'>
        <div>
         {
          !toggle?
          <>
           {
            jobdata2&&jobdata2.map((item,index)=>(
              <div key={index} className='jobdata'>
                <div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgP3tE356e3vqLq-YRAouToJJUrGxp7i2gA&usqp=CAU" alt='not'width='200px' height="200px"/>
                </div>
                <div>
                <p style={{display:"inline"}}><b>Facility type</b>:{item.slcp_Jobs.slcp_ClinicianType}</p>
                <br/><br/><br/><br/>
                <p style={{display:"inline"}}>{item.slcp_Jobs.slcp_Speciality}</p>
                <br/><br/><br/><br/>
                <p style={{display:"inline"}}><b>PatientLoad</b>:{item.slcp_Jobs.slcp_PatientLoad}</p>
                <br/><br/><br/><br/><br/>
                <b>Address:</b><br/><br/>
                <p style={{display:"inline"}}>
                  <br/><br/><li>{item.slcp_Jobs.slcp_Address.slcp_Street},
                  {item.slcp_Jobs.slcp_Address.slcp_City},
                  {item.slcp_Jobs.slcp_Address.slcp_Zip},
                  {item.slcp_Jobs.slcp_Address.slcp_State}</li>
                  </p><br/><br/><br/>
                  <p style={{display:"inline"}}> <b>from:</b>{item.slcp_Jobs.slcp_Duration.slcp_FromDate} <br/><br/><br/><br/><b style={{display:"inline"}}>To:</b>{item.slcp_Jobs.slcp_Duration.slcp_ToDate}</p>
                  {/* <b>Shifts </b>
                  <p style={{display:"flex",gap:"20px"}}>
                    <span>Timings:{item.slcp_Shifts.slcp_Shift}</span><span> Hours:{item.slcp_Shifts.slcp_Hours}</span><span>{item.slcp_Shifts.slcp_DaysofWeek}-friday</span>
                    </p>
                    <b>Experience:</b>
                    <p style={{display:"flex",gap:"20px"}}><span>{item.slcp_Experience[0].slcp_Years}Year</span>
                    <span>{item.slcp_Experience[0].slcp_Months}months</span>
                     
                    </p> */}
                    </div>
              </div>)
            )
          }
          </>
          :
         <>
          {
            filteredData&&filteredData.map((item,index)=><>
             <div key={index} className='jobdata'>
                <div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgP3tE356e3vqLq-YRAouToJJUrGxp7i2gA&usqp=CAU" alt='not'width='200px' height="200px"/>
                </div>
                <div>
                <p style={{display:"inline"}}><b>Facility type</b>:{item.slcp_Jobs.slcp_ClinicianType}</p>
                <br/><br/><br/><br/>
                <p style={{display:"inline"}}><b>Speciality:</b>{item.slcp_Jobs.slcp_Speciality}</p>
                <br/><br/><br/><br/>
                <p style={{display:"inline"}}><b>PatientLoad</b>:{item.slcp_Jobs.slcp_PatientLoad}</p>
                <br/><br/><br/><br/>
                <b>Address</b><br/><br/>
                <p style={{display:"inline"}}>
                  <li>{item.slcp_Jobs.slcp_Address.slcp_Street},
                  {item.slcp_Jobs.slcp_Address.slcp_City},
                  {item.slcp_Jobs.slcp_Address.slcp_Zip},
                  {item.slcp_Jobs.slcp_Address.slcp_State}</li>
                  </p> <br/><br/><br/><br/>
                  <p style={{display:"inline"}}> <b >from:</b>{item.slcp_Jobs.slcp_Duration.slcp_FromDate}<br/><br/><br/><br/><b>To:</b>{item.slcp_Jobs.slcp_Duration.slcp_ToDate}</p>
                  
                    </div>
              </div>
            </>)
          }
         </>
         }
         
         
        </div>
    
      
        </div>
        <div className='map'>
            <img src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg" alt='not' height="600px" />
        </div>
      </div>
        </div>
       <ToastContainer/>
        </>
    )
}








