import React,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ShopingInfo from './item/ShopingInfo';
export default ()=> {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  // const delS = (student) => {
  //   dispatch({type: "DEL_MEVA", payload: student})
  // }
  // const delAll = (student) => {
  //   dispatch({type: "DEL_MEVAALL", payload: student})
  // }
  // const plus = function(elem){
  //   state.shopCart[elem].amount+=1
  //   console.log(state.shopCart[elem].amount);
  // }
  const [count, setCount] = useState(1)


  const Plus = () => {
    setCount(count + 1)
  }
  const Minus = () => {
    if (count != 1) {
      setCount(count - 1)

    }
    else {
      setCount(count)
    }
  }

  return (
    <div>
      <Container>
      <Typography sx={{fontSize:"20px",fontWeight:"700",color:"#667ad1"}}>
      1. Products - 1
      </Typography>
      <Grid container>
    <Grid item md={9}>
      <Grid container sx={{marginTop:"40px",fontSize:"16px  "}}>
        <Grid item md={2.2} sx={{fontSize:"16px",ml:5}}>Photo</Grid>
        <Grid item md={2.2} sx={{fontSize:"16px"}}>Description</Grid>
        <Grid item md={2.2} sx={{fontSize:"16px"}}>Price</Grid>
        <Grid item md={2.2} sx={{fontSize:"16px"}}>Quantity</Grid>
        <Grid item md={2.2} sx={{fontSize:"16px"}}>Total</Grid>
      </Grid>
       {state.shopCart.map((val, index) => {
        return <Card sx={{ display: 'flex' ,marginTop:"30px"}} key={{index}}>
        <CardMedia
     component="img"
     sx={{ width: 110,height:110,margin:"20px",borderRadius:"15px"}}
     image={val.imgSrc}
     alt="Something went wrong"
   />
   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
 
     <CardContent sx={{ flex: '1 0 auto' }}>
        <Grid container>
        <Grid item md={3}>
       <Typography  component="div" variant="h6">
         {val.title}
       </Typography>
    

       <Typography variant="subtitle1" color="text.secondary" component="div" sx={{width:"600px",display:"inline-block"}}>
      Color: {val.color} 
       </Typography>
     

       <Typography variant="subtitle1" component="div">
       Articul:{val.articul} 
       </Typography>
       </Grid>
       <Grid item md={3} justifyContent="center" sx={{fontWeight:"600",marginTop:"7%"}}>
        {val.price}UAH
       </Grid>
       <Grid item md={3} justifyContent="center" sx={{marginTop:"7%"}}>
       <button onClick={Minus} style={{ width: "45px", height: "25px", borderRadius: "50px", border: "none", backgroundColor: "#BEC8F4" }}>-</button> {count} <button onClick={Plus} style={{ width: "45px", height: "25px", borderRadius: "50px", border: "none", backgroundColor: "#BEC8F4" }}>+</button>

        
       </Grid>
       <Grid item md={3} justifyContent="center" sx={{marginTop:"7%"}}>

        {count * val.price}UAH

       </Grid>
        {/* <button  onClick={() => delS(val)} ><CloseIcon/></button> */}
        </Grid>

     </CardContent>
   </Box>
 
 </Card>
})}
      <Typography sx={{fontSize:"20px",fontWeight:"700",color:"#667ad1",marginTop:"100px"}}>
      2. Shopping Info
      </Typography>
      <ShopingInfo/>
</Grid>

      </Grid>


</Container>
</div>
  )
}
