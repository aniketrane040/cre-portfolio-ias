import { Box, Typography,Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardBox = styled(Grid)({
    width:'300px',
    height:'400px',
    backgroundColor:'#260a41',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    padding:'20px',
    borderRadius:'25px',
    margin:'20px',
    boxShadow : "5px 5px 5px rgb(255 255 255 / 20%)"
})

export const CardImage = styled(Box)({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap'
})

export const CardName = styled(Typography)({
    flexGrow:'1',
    color:'white'
})

