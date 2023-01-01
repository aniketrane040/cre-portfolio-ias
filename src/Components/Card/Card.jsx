//import { Box } from '@mui/material'
import React from "react";
import { CardBox, CardImage, CardName } from "./CardStyles";
import logo from "../images/samarth.jpg";
import "./Card.css";
import { Box, Typography, Grid } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { SocialIcons } from "../Global/GlobalStyles";

const Card = () => {
  return (
    
    <CardBox container>
      <Grid item>
        <CardImage container className="image">
          <img src={logo} alt="" />
        </CardImage>
      </Grid>
      <Grid item>
        <CardName variant="h6">Samarth Ikkalaki</CardName>
        <CardName variant="body1" sx={{ textAlign: "center" }}>
          Web Developer
        </CardName>
      </Grid>
      <Grid item>
        <SocialIcons href="https://www.google.com" target="_blank">
          <FacebookIcon sx={{ fontSize: 30 }} />
        </SocialIcons>

        <SocialIcons href="https://www.google.com" target="_blank">
          <GitHubIcon sx={{ fontSize: 30 }} />
        </SocialIcons>

        <SocialIcons href="https://www.google.com" target="_blank">
          <InstagramIcon sx={{ fontSize: 30 }} />
        </SocialIcons>

        <SocialIcons href="https://www.google.com" target="_blank">
          <FacebookIcon sx={{ fontSize: 30 }} />
        </SocialIcons>
      </Grid>
    </CardBox>
  );
};

export default Card;
