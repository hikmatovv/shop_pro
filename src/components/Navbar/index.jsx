import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Link} from "react-router-dom"
import Logo from "../../assets/logo2.png"
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 ,textAlign:"center"}}>
      <AppBar position="static" sx={{backgroundColor:"white",boxShadow:"none",textAlign:"center"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,textAlign:"center"}}
          >
            <img src={Logo} alt=""  style={{height:"60px"}}/>
          </IconButton>
          <Typography variant="h6" component="div"  sx={{ ml: 55 ,textAlign:"center"}}>
            <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
          </Typography>
          <Typography variant="h6" component="div"  sx={{ ml: 2 ,textAlign:"center"}}>
          <Link to="/kor" style={{textDecoration:"none",color:"black"}}>Cart</Link>
          </Typography>
          <Typography variant="h6" component="div"  sx={{ ml: 2 ,textAlign:"center"}}>
          <Link to="/fovourite" style={{textDecoration:"none",color:"black"}}>Favourites</Link>
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
