import React, { Component } from 'react'
import DynamicRendering2 from './DynamicRendering2'
import TextField from '@mui/material/TextField';
class DynamicRendering1 extends Component {
    state={name:"",class:"",section:"",regno:"",branch:""}
    handlename=(e)=>
        {
            this.setState({name:e.target.value})
        }
    handleclass=(f)=>
        {
            this.setState({class:f.target.value})
        }
    handlesection=(g)=>
        {
            this.setState({section:g.target.value})
        }
    handleregno=(h)=>
        {
            this.setState({regno:h.target.value})
        }
    handlenumber=(i)=>
        {
            this.setState({branch:i.target.value})
        }
  render() {
    return (
    <>
      <div style={{fontSize:18}}>
      <h1 style={{fontFamily:"Times New Roman"}}>Dynamic Rendering</h1>
      <TextField id="standard-basic" label="Name" variant="standard" size='small' onChange={this.handlename}/><br></br>
      <TextField id="standard-basic" label="Class" variant="standard" size='small' onChange={this.handleclass}/><br></br>
      <TextField id="standard-basic" label="Section" variant="standard" size='small' onChange={this.handlesection}/><br></br>
      <TextField id="standard-basic" label="Regno" variant="standard" size='small' onChange={this.handleregno}/><br></br>
      <TextField id="standard-basic" label="Phone_Number" variant="standard" size='small' onChange={this.handlenumber}/><br></br>
      <DynamicRendering2 data={this.state.name} data1={this.state.class} data2={this.state.section} data3={this.state.regno} data4={this.state.branch}/>
      </div>
    </>
    )
  }
}
export default DynamicRendering1
