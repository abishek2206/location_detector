import React, { Component } from 'react'
import Button from '@mui/material/Button';
class CounterApp extends Component {
    state={num:0,name:""}
    handleAdd=()=>
    {
        this.setState({num:this.state.num +1});
    }
    handleSubtract=()=>
      {
          this.setState({num:this.state.num -1});
      }
  render() {
    return (
      <div style={{fontSize:18}}>
        <h1 style={{fontFamily:"Times New Roman"}}>Counter app</h1>
        <Button sx={{width:"5px"}} variant="outlined" size="small" onClick={this.handleAdd}>+</Button>
        {this.state.num}
        <Button variant="outlined" size="small" onClick={this.handleSubtract}>-</Button>
      </div>
    )
  }
}

export default CounterApp