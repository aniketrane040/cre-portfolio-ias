import { styled } from "@mui/material/styles";
//import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

export const GridContainerCards = styled(Grid)({
    justifyContent:'space-evenly',
    flexDirection:'row',
})

export const GridItemCards = styled(Grid)({
    boxShadow : "5px 5px 5px 5px rgb(255 255 255 / 49%)",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
    borderRadius:'20px',
    //boxShadow:'5px 10px 10px rgb(255  255  255/ 60%)',
    background: "radial-gradiant(red,blue)",
    backgroundColor:'#260a41',
    margin:'50px',
    padding : '30px',
    textAlign:'justify'
})