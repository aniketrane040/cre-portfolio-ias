import { HashLink as Link } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

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

export const NavLink = styled(Link)({
  padding: "12px",
  color: "white",
});
