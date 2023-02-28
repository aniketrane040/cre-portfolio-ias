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
          <img src="https://arane-test.s3.us-east-1.amazonaws.com/4529758-anime-tokyo-ghoul-kaneki-ken.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiBkFvYWXKAS7AGf2UIuQ6oV1p4%2B4%2FTj%2Bh2d6CqosaCRVwIhANepHtSQ9wRgedNl%2F2k9yydbJ07UpWdiuV9ZTPM1mC%2FTKqADCBcQBBoMNDAyMzEwNzYxNTY3IgyaFDSnHnX6yPgNAxgq%2FQKJH%2BXj2%2Fh6Fn8RAtOL7Nh1RUZMtKO%2BU7faziLvOE6KZ%2FWbtmXn6CG5nueYVHDFWWWeHnX9V49N46UgQDPl14wcTBNjI619CpVsuCKx1ob0nVlp36kLh%2FH8s7eKrPyMTOT5E1Q%2Bist7FpWrhl8WbAYqmkBFIuedgL3g0riave8NmD%2FBbiZzaVSqpS%2FORBOZQwtqXHJXsgLCbpAlGkNkkz0sje7o2mnbBzZ%2FI6edKakAmdxGsNJu4xGxtPHg5ZntrpqDtpyETeRpdi21BWCNsnYn1BjPWMcDJEEyijndIah24C%2FDsbZ769xmTeILl8naF6xih8P3wrKjjCPqpd4N%2FO3xmh0tVC51DQNn%2BXV38mFqyu1TEAxDBmHi7AGCkcglf241cN5cvDW0SBPtcOPsdhtEoDtW1WS5%2F52orVtNLRaHQxpsGllC%2BaXapOM7v71a3PiCCI%2FmoVqs8EE9fww63ouowI5vIlTxN3I60wfmmwPHTFImA8Ae8fViagcIynEwyYWQngY6hAKi%2Bw9reunYJxHxY3RIeY6X2ZxxBHmgsbs7aQWvDIwg8vnXrD35WRAjRvin8OzmcNFq2FePaU0jiec6XVIeyXyxbMN3I5Fn8RFblV5d7mL101uGdkJnD35wC8cQ9IFdqw%2F%2FTcSszAtp2x1k8tiBuxH9va8lrKesSX37eYUt1nF7Bkm9SGtjTHEIAQPc8gqSrV8oCSquNuUWCEgoi90d4ycMHDOTMdl%2FYLp7VP2S7U%2FrO5AdV1tsAZl1OFg3lrxFQvJPwMaEyNmyUkXW%2BsXi1s2tua%2FH5OQoIVYCGDGmBiyOLsN7itfzwfIQyTrwUt3%2Frq1FbVWfag%2FeL18A9n1n28IopGEmAA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230115T134846Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAV3K4XBRPVXIK647N%2F20230115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a544a0f1d8e0fad682ef435134218db2c5896421f23ca05628321fa927e04719" alt="" />
        </CardImage>
      </Grid>
      <Grid item>
        <CardName variant="h6">Samarth Ikkalaki</CardName>
        <CardName variant="body1" sx={{textAlign: "center" }}>
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
