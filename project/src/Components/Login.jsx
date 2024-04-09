import React from 'react'
import {TextField,Card} from '@mui/material'
const Login = () => {
  return (
    <div style={{backgroundImage:"url('') ",
 
    }} >
     
      <br /><br /><br /><br />
      <Card variant="outlined" style={{padding:'60px',margin:'auto',width:'400px',backgroundColor:'none'}}>
<TextField id="filled-basic" label="emial id" type='emial' variant="filled" style={{backgroundColor:'white',borderRadius:'10px'}}/><br /><br /><br />
<TextField id="filled-basic" label="Username" type='text' variant="filled" style={{backgroundColor:'white'}}/><br /><br /><br />
<TextField id="filled-basic" label="Password" type='password' variant="filled" style={{backgroundColor:'white'}}/><br /><br /><br />
</Card>
    </div>
  )
}

export default Login