import { Link } from "react-router-dom"
import './login.css'
import {CiMail,CiUser,CiLock} from 'react-icons/ci';
import Lock from './lock.json'
import Lottie from "lottie-react"
import {FaEye} from 'react-icons/fa';
import { useState } from "react";
import Carousel from 'react-elastic-carousel'
import {useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import Slider from "react-slick";
import slider1 from "../../media/log_1.jpg"
import slider2 from "../../media/log_2.jpg"
import slider3 from "../../media/log_3.jpg"
import cctrlogo from "../../media/logo.png"
import medicalcollege from "../../media/medical.png"
import medgif from './medgif.gif'
/*import { loginroute } from "../utils/apiroutes";*/




const Loginpage=()=>{
    const navigate=useNavigate()
    const [inputType, setInputType] = useState('password');
    const[values,setvalues]=useState({
      username:"",
      password:"",
      email:"",
    })
    const [loginloading, setloginLoading] = useState(false); 




  
      const handlechange=(e)=>{
       setvalues({...values,[e.target.name]:e.target.value})
      }
  
      const handlesubmit = async (e) => {
        e.preventDefault();
        if (handlevalidation()) {
          setloginLoading(true)
            toast.loading('logging in please wait',{duration:4000})
          const { username, email, password } = values;
          try {
            const { data } = await axios.post("hchchjc", {
              username,
              email,
              password,
            });
            if (data.status === false) {
              toast.error(data.msg);
              setloginLoading(false)
            }
            if (data.status === true) {
              localStorage.setItem('chat-nexus-user', JSON.stringify(data.user));
              navigate('/');
            }
          } catch (error) {
            toast.error('An error occurred. Please try again later.');
          } finally {
            setloginLoading(false)
          }
        }
      
      };


    
      

  
    
  


      const handleTypeChange = (e) => {
        e.preventDefault()
        if (inputType === 'text') {
          setInputType('password');
        } else {
          setInputType('text');
        }
      }


  
      
  
      const handlevalidation=()=>{
        const{username,email,password}=values
        if(username.length===0){
        toast.error("username must not be empty")
        setloginLoading(false)
        return false;
        }else if(email.length===0){
          toast.error(" email must not be empty")
          setloginLoading(false)
          return false;
         }
        else if(password.length===0){
         toast.error(" password must not be empty")
         setloginLoading(false)
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

    return( <>
        <div className="logincontainer"  >
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
         <div className="loginsvgimage"> <img  src={medgif}/> </div>
      <form className="loginform" onSubmit={(e)=>handlesubmit(e)}>
        <img className="cctrlogo" src={cctrlogo}/>
        <h1 className="logintitle">Welcome Back :)</h1>
        <span className="loginconnect">to get connected please enter your details</span>
        <label class="loginemaillab">
        <input type="text" placeholder="username" name="username" onChange={(e)=> handlechange(e)}/>
        <CiUser className="loginusericon"/>
        </label>
        <label class="loginemaillab">
        <input type="email" placeholder="email" name="email" onChange={(e)=> handlechange(e)}/>
        <CiMail className="loginmailicon"/>
        </label>
        <label class="loginemaillab">
        <input type={inputType} placeholder="Password" name="password" onChange={(e)=> handlechange(e)}/>
        <button  onClick={handleTypeChange} className="showpassword">{<FaEye className="eyeicon" />}</button>
        <CiLock className="loginpassicon"/>
        </label>
        <button style={{backgroundColor:"#264796",color:"white"}} type="loginsubmit">Login</button>

        <span>Don't have account yet? <Link to="/signup" style={{color: ' #264796', textDecoration: 'none'}}>Signup here</Link></span>
       </form>
    </div>
    </>
    )
}

export default Loginpage