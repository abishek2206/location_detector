import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropsA from './PropsA';
import CounterApp from './CounterApp';
import DynamicRendering1 from './DynamicRendering1';
import Internal from './Internal';
import External from './External';
import Inline from './Inline';
import List from './List';
import Button from '@mui/material/Button';

const Home=()=> {
 
    const navigate = useNavigate();
    const handleBack = () => {
      navigate("/")
    }
  
  return (
    <>
  <PropsA/>
  <CounterApp/>
  <DynamicRendering1/>
  <Inline/>
  <Internal/>
  <External/>
  <List/>
  <Button variant='text' onClick={handleBack}>Back</Button>
  </>
  );
}
export default Home