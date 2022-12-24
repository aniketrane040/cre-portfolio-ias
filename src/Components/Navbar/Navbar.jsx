import React from "react";
import { Stack, Typography, Box, Container} from "@mui/material";
import iaslogo from "../images/ias-logo.svg";
//import { useStyles } from "./NavbarStyles";
import { NavLink } from "./NavbarStyles";

const Navbar = () => {
  //const classes = useStyles();
  return (
    <Container>
      <header id="home">
        <Typography variant="h6">
          <Stack
            sx={{
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
                md: "center",
                lg: "center",
                xl: "center",
              },
              margin: "20px",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <NavLink to="/">
                <img
                  src={iaslogo}
                  alt="Logo of IAS"
                  width="auto"
                  height="auto"
                />
              </NavLink>
            </Box>

            <NavLink to="/">Home</NavLink>
            <NavLink to="#about" smooth>
              About
            </NavLink>
            <NavLink to="#team" smooth>
              Team
            </NavLink>
            <NavLink to="#events" smooth>
              Events
            </NavLink>
            <NavLink to="#photos" smooth>
              Photos
            </NavLink>
            <NavLink to="#contact" smooth>
              Contact
            </NavLink>
          </Stack>
        </Typography>
      </header>
    </Container>
  );
};

export default Navbar;
