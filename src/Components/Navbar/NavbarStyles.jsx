import { HashLink} from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

export const useStyles = makeStyles({
  navbar: {
    display: "flex",
    padding: "10px",
    position: "relative",
    justifyContent: {
      xs: "flex-start",
      sm: "flex-start",
      md: "flex-end",
      lg: "flex-end",
      xl: "flex-end",
    },
    alignItems: {
      xs: "flex-start",
      sm: "flex-start",
      md: "flex-end",
      lg: "flex-end",
      xl: "flex-end",
    },
    margin: "20px",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
  },
});

export const NavLink = styled(HashLink)({
  padding: "12px",
  color: "white",
});

export const NavbarButton = styled(Button)({
  textTransform:"none",
  //padding:'7px 12px',
  borderRadius:'15px',
  backgroundColor:'',
  margin:'5px 10px 5px 5px'
})
