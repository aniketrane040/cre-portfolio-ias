import { styled } from "@mui/material/styles";
//import { makeStyles } from "@mui/styles";
import { Link ,Typography ,Grid , Container} from "@mui/material";
import { HashLink} from "react-router-hash-link/dist/react-router-hash-link.cjs.development";



export const NavLink = styled(HashLink)({
    padding: "12px",
    color: "white",
});
  

export const SectionTitle = styled(Typography)({
    marginBottom: "24px", 
    color: "white"
})

export const SectionSubTitle = styled(Typography)({
    marginBottom: "20px", 
    color: "white"
})

export const SectionText = styled(Typography)({
    color: "white"
})

export const Linkto = styled(Link)({
        textDecoration: "none",
        color: "white",
        "&:hover": { color: "yellow" }
})

export const SocialIconsContainer =styled(Grid)({
    direction:'row',
    justifyContent:'center',
    alignContent:'center'
})

export const SocialIcons = styled(Link)`
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 10px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`

