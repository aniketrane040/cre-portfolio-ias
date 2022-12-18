import { styled } from "@mui/material/styles";
//import { makeStyles } from "@mui/styles";
import { Grid ,Container, Typography} from "@mui/material";

export const GridContainerHome = styled(Grid)({
    direction:'row',
    height:'auto',
    justifyContent:'space-evenly',
    margin:"30px 0px 90px 0px",
    padding:"0px 10px 0px 10px",
    overflow:'hidden'
    
})

export const GridItemHome = styled(Grid)({
    height : 'auto',
    padding:"20px 10px 30px 0px"
})

export const ContainerLogoHome = styled(Container)({
    textAlign: "center",
    textShadow: "-6px -6px 0px rgb(0  0  0/ 100%)"
})

export const SectionTitleHome = styled(Typography)({
        color: "white",
        fontSize: "80px",
        fontWeight: "1000",
        letterSpacing: "4px",
        textShadow: "5px 5px 0px rgb(255  0  0/ 70%)",
        padding:"0px 20px 30px 50px"
})

export const GridContainer = styled(Grid)({
        justifyContent: "center",
        alignItems : 'center',
        flexDirection: "row",
        padding:'0px 100px 80px 100px'
})

export const GridItem = styled(Grid)({
    width:'auto',
    textAlign : 'center',
    margin:'10px 0px 10px 0px',
    color:'white'
})
