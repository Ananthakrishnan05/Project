import React from 'react'
import {AppBar,Toolbar,Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div  style={{backgroundImage:"url('') "}}>
        <AppBar style={ { backgroundColor: 'black' } }>
      <Toolbar>
      <img 
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wtS8j9C7SpOwNTpSBrmcYSJKkghzApWKuA&s"} 
                    className="logo img-fluid"
                    alt="Logo"
                    width="50" height="50"
                /> 
    <Typography variant='h6' style={{}}>ICHIRAKU</Typography>
    <Button variant="contained" style={{marginLeft:"auto"}} color='success'><Link to={'/login'} style={{textDecoration:'none', color:'white'}} >LOGIN</Link></Button>
    <Button variant="contained" style={{marginLeft:"30px"}} color='success'>SIGN-UP</Button>
      </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav