import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../link.png";
import "../Components/Drop.css";

export function Routing() {
  const [isDropdownOpen, setDropdownOpen]=useState(false);
  const [isUSDDropdownOpen, setUSDDropdownOpen]=useState(false);
  const [isSignInVisible, setSignInVisible]=useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
   
    navigate('/');
  };
const[signup,setsign]=useState(false)
  const toggleDropdown=()=>{
    setDropdownOpen(!isDropdownOpen);
    setUSDDropdownOpen(false); 
  };

  const toggleUSDDropdown=()=>{
    setUSDDropdownOpen(!isUSDDropdownOpen);
    setDropdownOpen(false); 
  };

  const toggleSignIn=()=>{
    setSignInVisible(!isSignInVisible);
    setsign(false)
    setDropdownOpen(false); 
    setUSDDropdownOpen(false); 
  };
 const Togglesignup=()=>{
  setsign(!signup);
  setSignInVisible(false)
  setDropdownOpen(false); 
    setUSDDropdownOpen(false); 
 }

  return (
    <div>
  <div className="div1" style={{ backgroundColor: "white" }}>
  <img src={logo} width={190} height={60} alt="Logo" onClick={handleClick}
      style={{ cursor: 'pointer' }} />

  <Link to="/" className="home"></Link>
  <Link to="/Hotels" className="hotels">
    Facility
  </Link>
  <Link to="/Cars" className="cars">
    Locum
  </Link>
  <Link to="/job" className="job">
    Job Post
  </Link>
  <Link to="/avail" className="avail">
    Availability post
  </Link>
  <Link to="/Gettheapp" className="getthe">
    Get The App <i className="fa fa-mobile-phone" id="eye1"></i>
  </Link>

  <span
    className={`dropdown ${isDropdownOpen ? "open" : ""}`}
    style={{ position: "absolute", left: "880px",bottom:"538px" }} >
    <button className="dropbtn" onClick={toggleDropdown}>
      Support
      <span className={`arrow ${isDropdownOpen ? "rotate" : ""}`}>&#9660;</span>
    </button>
    <div className="dropdown-content">
      <p>Feed Back</p>
      <p>Help center</p>
      <p>Message Us</p>
    </div>
  </span>

  <div className={`dropdown ${isUSDDropdownOpen ? "open" : ""}`} style={{position:"absolute",right:"200px",bottom:"540px"}}>
    <button className="dropbtn" onClick={toggleUSDDropdown}>
      USD<span className={`arrow ${isUSDDropdownOpen ? "rotate" : ""}`}>&#9660;</span>
    </button>
    <div className="dropdown-content">
      <p>USD-Us Dollar</p>
    </div>
  </div>





      <div className="div2">
        <button
        className="button1"
          onClick={toggleSignIn}>
          Signin
        </button>
      </div>
      <div style={{textAlign:"center",backgroundColor:"white"}}>
      {isSignInVisible && (
  <div className="div3">
    <p className="p1">
      <b>Sign In</b>
    </p>
    <div style={{ width: "440px", marginTop: "-1px" }}>
      <div style={{ margin: "10px" }}>
       <i className="fa fa-google" aria-hidden="true" id="id2"></i> 
        <input type="text" placeholder="Google" className="input11"/>
      </div>
      <hr className="hr1" />
      <p style={{ textAlign: "center" }}>or</p>
      <hr className="hr1" />
      <input type="gmail" placeholder="email" className="input11"/>
      <br/><br/>
      <input type="password" placeholder="password" className="input11" />
      <br/>
      <br/>
      <div style={{ margin: "10px" }}>
        <input type="checkbox" style={{ width: "30px", height: "15px" }} />
        <span style={{ marginLeft: "10px" }}>Remember Me</span>
      </div>
      <br/>
      <div>
        <button className="button2">Signin</button>
      </div>
      <br/>
      <p className="anchor" style={{color:"blue"}}>Forgot Password</p>
      <hr/>
      <span style={{ margin: "10px" }}>Don't Have an account <button className="button3"onClick={Togglesignup}>Create one</button></span>
    </div>
  </div>
)}
</div>

<div>
  <button className="button4"onClick={Togglesignup}> Signup</button>
</div>
      {
        signup&&
        (
         
<div  className="div4">
    <p className="create">
      <b>Create an account</b>
    </p>
    <div >
    <p className="p2">&#x2713;Get faster bookings</p>
    <p className="p2">&#x2713;Add more nights or a room to your stay</p>
    <p className="p2">&#x2713;Easy access to all your trip info</p>
      </div>
    <div style={{ width: "440px", marginTop: "-1px" }}>
      <div style={{ margin: "10px" }}>
       <i className="fa fa-google" aria-hidden="true" id="id3"></i> 
        <input type="text" placeholder="Google" style={{ textAlign: "center", width: "400px", height: "30px" }} />
      </div>
      <hr style={{ width: "400px", margin: "10px" }} />
      <p style={{ textAlign: "center" }}>or</p>
      <hr style={{ width: "400px", margin: "10px" }} />
      <input type="text" placeholder="firstname" className="first" />

      <br/><br/>
      <input type="text" placeholder="Lastname" className="first" />
      <br/><br/>
      <input type="gmail" placeholder="email" className="first" />
      <br/><br/>
      <input type="password" placeholder="password" className="first" />
      <p style={{margin:"15px"}}>(6-30 characters, case-sensitive, no spaces)</p>
      <p style={{margin:"15px"}}>By creating a Hotwire account, I acknowledge that I have read and accept the Privacy policy</p>

     <hr/>

      
      <br/>
      <div>
        <button className="button5">Signup</button>
      </div>
      <br/>
     
      <hr/>
      <span style={{ margin: "10px" }}>Already Have an account <button className="button6" onClick={toggleSignIn}>Signin</button></span>
    </div>
  </div> 
        )
      }    
    </div>
    </div>
  );
}
