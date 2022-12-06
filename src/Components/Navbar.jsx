import React from "react";
import { Stack , Typography} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <header>
    <Stack
      direction="row"
      sx={{
        padding: "10px",
        position: "sticky",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin : '20px',
      }}
    >
        <Typography variant="h6">
        <Link to='/' style={{padding:'12px', color:'white'}}>Home</Link>
        <Link to='/about' style={{padding:'12px', color:'white'}}>About</Link>
        <Link to='/team' style={{padding:'12px', color:'white'}}>Team</Link>
        <Link to='/events' style={{padding:'12px', color:'white'}}>Events</Link>
        <Link to='/photos' style={{padding:'12px', color:'white'}}>Photos</Link>
        </Typography>
    </Stack>
    </header>
    </>
  );
};

export default Navbar;
