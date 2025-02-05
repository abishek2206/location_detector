import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const mailregx = /^\S+@\S+\.\S+$/;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passErr, setpassErr] = useState(false)
  const [mailErr, setmailErr] = useState(false)
  
  const navigate= useNavigate();
  // const handleHome=()=>{
  //   navigate("/home")
  // }
  const handlesignup=()=>{
    navigate("/signup")
  }
const handleLogin=()=>{
navigate('/home')
}
const handlesubmit = (e) =>{
  e.preventDefault()
  setmailErr(false)
  
  setpassErr(false)

  if( password === "" && email === ""){
      alert("Input field cant be empty ");
  }
  
  else if(password.length < 8){
      setpassErr(!passErr);
  }
  else if (!mailregx.test(email)){
      setmailErr(!mailErr);
  }
  else{
      alert("Form submitted succesfully")
      
      setEmail("")
      setPassword("")
      navigate("/home")

  }
}
const handlemail= (e) =>{
  setEmail(e.target.value);
}
const handlepass = (e) =>{
  setPassword(e.target.value);
}

   
  return (
    <div className="login" style={{ display: "flex", width: "100%",  minHeight: '100vh', justifyContent: "center", alignItems: "center" }}>
    <div className="login-container" >
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handlemail}
            
            required
          />
          {mailErr && <p style={{color : 'red'}}>mail must contains 6 chara !!</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlepass}
            required
          />
         {passErr && <p style={{color : 'red'}}>Password must contains 6 chara !!</p>} 
        </div>
        <button type="submit" onClick={handlesubmit}>Login</button>
        
        <p>Don't have an account?<a href='' onClick={handlesignup}>Register</a></p>
      </form>
    </div>
    </div>
  );
};

export default Login;
