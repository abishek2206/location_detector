import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordR, setPasswordR] = useState('');
  
  const navigate= useNavigate();
  const handleHome=()=>{
    navigate("/home")
  }  
  return (
    <div className="login" style={{ display: "flex", width: "100%",  minHeight: '100vh', justifyContent: "center", alignItems: "center" }}>
    <div className="login-container" >
      <h2>SignUp</h2>
      <form>
        <div className="form-group">
          
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          <div className="form-group">
          
          <input
            type="password"
            id="passwordR"
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
            placeholder="Re-enter-password"
            required
          />
        </div>
        <button type="submit" onClick={()=> handleHome()}>SignUp</button>
        
      </form>
    </div>
    </div>
  );

};

export default SignUp;
