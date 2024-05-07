import { Link, Navigate, useNavigate } from "react-router-dom"
import Svg from "./svg"
import './signup.css'
import '../login/login.css'
import {CiMail,CiUser,CiLock} from 'react-icons/ci';
import {FaEye} from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import axios from "axios"
/*import { signuproute } from "../utils/apiroutes";*/
import FileBase64 from 'react-file-base64'
import medicalcollege from "../../media/medical.png"
import cctrlogo from '../../media/logo.png'
import slider1 from "../../media/log_1.jpg"
import Carousel from 'react-elastic-carousel'






const Signuppage=()=>{ 
  const navigate=useNavigate()
  const [signloading, setsignLoading] = useState(false); 
  const [inputType, setInputType] = useState('password');
  const[values,setvalues]=useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
    photo:"",
  })


    const handlechange=(e)=>{
     setvalues({...values,[e.target.name]:e.target.value})

    }
    const handlephoto=(base64)=>{
      setvalues({...values,photo:base64.base64})
    }

    


    const handlesubmit = async (e) => {
      e.preventDefault();
      if (handlevalidation()) {
        toast.loading('signing  in please wait',{duration:4000})
        const { username, email, password, photo } = values; 
        try {
          setsignLoading(true);
          const { data } = await axios.post("bjbibik", {
            username,
            email,
            password,
            photo,
          });
          if (data.status === false) {
            toast.error(data.msg);
            setsignLoading(false)
          }
          if (data.status === true) {
            localStorage.setItem('chat-nexus-user', JSON.stringify(data.user));
            toast.success('User registered successfully!');
            navigate('/');
          }
        } catch (error) {
          toast.error('An error occurred. Please try again later.');
        } finally {
          setsignLoading(false); 
        }
      }
    };

    const handleTypeChange = (e)=>{
      e.preventDefault()
      if (inputType === 'text') {
        setInputType('password');
      } else {
        setInputType('text');
      }
    }

  


    

    
    

    const handlevalidation=()=>{
      const{username,email,password,confirmpassword,photo}=values
      if(password!==confirmpassword){
      toast.error("password and confirm password must be same")
      setsignLoading(false)
      return false;
    }else if (email===""){
      toast.error("email must not be empty")
      setsignLoading(false)
      return false;
    }else if (password.length<8){
      toast.error("password must have more than 8 characters ")
      setsignLoading(false)
      return false;
    }else if (username.length<6){
      toast.error("username must have more than 6 characters")
      setsignLoading(false)
      return false;
    }else if (photo===""){
      toast.error("please upload profile picture")
      setsignLoading(false)
      return false;
    }
    return true
  }

  const settings = {
    showArrows: false,
    pagination: false,
    itemsToShow: 1,
    itemsToScroll: 1,
    enableAutoPlay:true, 
    transitionMs: 1000,
    disableArrowsOnEnd: false,
    focusOnSelect: false,
    itemPadding: [0, 0, 0, 0],
  };


   return (
    
    <div className="signupcontainer">
      <div className="halfcont2"></div>
      <div className="reactslider">
    <Carousel  {...settings}>
      <div>
        <img src={slider1}/>
      </div>
    </Carousel>
    </div>
      <Toaster/>
        <div className="loginlogo">
        <img src={medicalcollege}/></div>
      <form style={{right:"10vw"}} onSubmit={(e)=>handlesubmit(e)}>
      <img className="cctrlogo" src={cctrlogo}/>
        <h1 className="signuptitle">get started!</h1>
        <span className="signupconnect">to get access please enter your details</span>
        <label class="profilelab">
        <FileBase64
        type="file"
        onDone={handlephoto}
      />
      <div className="photoupload" style={{ position: "relative",left:"75px" }}>
        {values.photo ? (
          <img src={values.photo} alt="Preview" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "250px" }} />
        ) : (
          <div
            style={{
              width: "11vh",
              height: "11vh",
              backgroundColor: "lightgray",
              borderRadius: "250px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              document.querySelector('input[type="file"]').click();
            }}
          >
           <svg height="133.441" viewBox="0 0 133.441 133.441" width="133.441" xmlns="http://www.w3.org/2000/svg"><path d="m132.441 66.72c0 16.391-6.001 31.375-15.935 42.883-12.043 13.984-29.879 22.838-49.785 22.838-19.292 0-36.633-8.309-48.656-21.54-10.598-11.677-17.065-27.166-17.065-44.181 0-36.296 29.424-65.72 65.72-65.72s65.72 29.424 65.72 65.72z" fill="#fff"/><path d="m66.72 133.441c-18.763 0-36.768-7.971-49.396-21.867-11.172-12.311-17.324-28.239-17.324-44.854 0-36.79 29.931-66.72 66.72-66.72s66.72 29.931 66.72 66.721c0 15.989-5.745 31.45-16.178 43.536-12.689 14.733-31.111 23.185-50.542 23.185zm0-131.441c-35.687 0-64.72 29.033-64.72 64.72 0 16.116 5.968 31.568 16.805 43.509 12.25 13.48 29.715 21.212 47.916 21.212 18.848 0 36.718-8.197 49.028-22.49 10.12-11.724 15.693-26.722 15.693-42.23-.001-35.688-29.035-64.721-64.722-64.721z" fill="#112c41"/><circle cx="66.722" cy="51.969" fill="#9797f7" r="26.881"/><path d="m116.506 109.603c-12.043 13.984-29.879 22.838-49.785 22.838-19.292 0-36.633-8.309-48.656-21.54 9.171-14.568 27.958-24.551 49.647-24.551 21.035 0 39.347 9.398 48.795 23.254z" fill="#9797f7"/><path d="m66.72 133.441c-18.763 0-36.768-7.971-49.396-21.867-11.172-12.311-17.324-28.239-17.324-44.854 0-36.79 29.931-66.72 66.72-66.72s66.72 29.931 66.72 66.721c0 15.989-5.745 31.45-16.178 43.536-12.689 14.733-31.111 23.185-50.542 23.185zm0-131.441c-35.687 0-64.72 29.033-64.72 64.72 0 16.116 5.968 31.568 16.805 43.509 12.25 13.48 29.715 21.212 47.916 21.212 18.848 0 36.718-8.197 49.028-22.49 10.12-11.724 15.693-26.722 15.693-42.23-.001-35.688-29.035-64.721-64.722-64.721z" fill="#112c41"/></svg>
          </div>
          
        )}
      </div>
      <div style={{ marginTop: "1vh",marginBottom:"1vh",fontSize:"1.6vh" }}>
        Please upload your profile picture
      </div>
        </label>
        <label class="emaillab">
        <input type="text" placeholder="username" name="username" onChange={(e)=> handlechange(e)}/>
        <CiUser className="usericon"/>
        </label>
        <label class="emaillab">
        <input type="email" placeholder="email" name="email" onChange={(e)=> handlechange(e)}/>
        <CiMail className="mailicon"/>
        </label>
        <label class="emaillab">
        <input type={inputType} placeholder="Password" name="password" onChange={(e)=> handlechange(e)}/>
        <CiLock className="passicon"/>
        <button  onClick={handleTypeChange} className="showpassword">{<FaEye className="eyeicon" />}</button>
        </label>
        <label class="emaillab">
        <input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={(e)=> handlechange(e)}/>
        <CiLock className="passicon"/>
        </label>
        <button style={{backgroundColor:"#264796",color:"white"}} type="submit">create account</button>

        <span>already have account? <Link to="/login" style={{color: ' #264796', textDecoration: 'none'}}>login here</Link></span>
       </form>
    </div>
   )
}

export default Signuppage