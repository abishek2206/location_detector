import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropsA from './PropsA';
import CounterApp from './CounterApp';
import DynamicRendering1 from './DynamicRendering1';
import Internal from './Internal';
import External from './ExternalCss';
import Inline from './Inline';
import List from './List';
import Button from '@mui/material/Button';


const Home=()=> {
 
    const navigate = useNavigate();
    const handleBack = () => {
      navigate("/")
    }
  
  return (
    <div style={{background: "rgb(133,47,175)",
        background: "radial-gradient(circle, rgba(133,47,175,1) 6%, rgba(55,204,177,1) 95%)"}}>
  <Button variant='text' onClick={handleBack}>Back</Button>
  <br/>
  <PropsA/>
  <br/>
  <DynamicRendering1/>
  <br/>
  <Inline/>
  <br/>
  <Internal/>
  <br/>
  <External/>
  <br/>
  <CounterApp/>
  <br/>
  <List/>
  </div>
  );
}
export default Home