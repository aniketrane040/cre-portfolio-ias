import { styled } from "@mui/material/styles";
//import { makeStyles } from "@mui/styles";
import { Grid ,Container} from "@mui/material";

export const GridContainer = styled(Grid)({
    direction:"row",
    height:'auto',
    justifyContent:"space-evenly",
    padding: "100px 100px 20px 100px ",
})

export const GridItem = styled(Grid)({
    marginBottom:'40px',
    height : 'auto'
})

export const ContainerLogo = styled(Container)({
    textAlign: "center", 
    padding: "5px"
})
