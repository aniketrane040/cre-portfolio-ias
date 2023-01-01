import React from "react";
import { Container , Grid} from "@mui/material";
import logo from "../images/logo.png";
import { iasOfficeGoogleMap } from "../Global/GlobalConstants";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { GridItem, ContainerLogo, GridContainer } from "./FooterStyle";

import {
  NavLink,
  SectionTitle,
  SectionSubTitle,
  Linkto,
  SectionText,
  SocialIcons,
  SocialIconsContainer,
  SectionHeading
} from "../Global/GlobalStyles";

const Footer = () => {
  return (
    <Container id='contact'>
      <Grid container sx={{ flexDirection: "row", justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SectionHeading variant="h4" sx={{ marginTop: "40px" }}>
              CONTACT US
            </SectionHeading>
          </Grid>
      </Grid>
      <GridContainer container >
        <GridItem item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Container>
            <SectionTitle variant="h5">
              Stay tuned to know
              <br />
              more Updates
            </SectionTitle>

            <SectionSubTitle variant="h6">Address :</SectionSubTitle>

            <SectionText variant="body1">
              <Linkto href={iasOfficeGoogleMap} target="_blank">
                9th Floor, Tower 2, Phoenix Fountainhead, 207, Nagar Rd, Clover
                Park, Viman Nagar, Pune, Maharashtra 411014
              </Linkto>
            </SectionText>
          </Container>
        </GridItem>

        <GridItem item xs={12} sm={12} md={4} lg={4} xl={4}>
          <ContainerLogo>
            <NavLink to="#home" smooth>
              <img src={logo} alt="CRE Logo" width="200px" height="200px" />
            </NavLink>
          </ContainerLogo>
        </GridItem>

        <GridItem item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Container>
            <SectionTitle variant="h5">Reach out to us</SectionTitle>

            <SectionSubTitle variant="h6">Manager :</SectionSubTitle>
            <SectionText variant="body1" gutterBottom>
              Aniket Rane : <Linkto href="tel:7499355194"> 7499355194</Linkto>
            </SectionText>
            <SectionText variant="body1" gutterBottom>
              Adarsh Halake : <Linkto href="tel:7499355194"> 7499355194</Linkto>
            </SectionText>
            <br></br>

            <SectionSubTitle variant="h6">Assistant Manager :</SectionSubTitle>
            <SectionText variant="body1" gutterBottom>
              Shreyas Gurav : <Linkto href="tel:7499355194"> 7499545646</Linkto>
            </SectionText>
            <SectionText variant="body1" gutterBottom>
              Prathmesh Jadhav :{" "}
              <Linkto href="tel:7499355194">7494354657</Linkto>
            </SectionText>
            <br></br>

            <SectionSubTitle variant="h6">Interns :</SectionSubTitle>
            <SectionText variant="body1" gutterBottom>
              Girish Pawar :{" "}
              <Linkto href="tel:7499355194"> 45444657634 </Linkto>
            </SectionText>
            <SectionText variant="body1" gutterBottom>
              Shree Patil : <Linkto href="tel:7499355194"> 4354664677 </Linkto>
            </SectionText>
            <SectionText variant="body1" gutterBottom mt={4}>
              Email :{" "}
              <Linkto href="mailto:creteam@ias.com">creteam@ias.com</Linkto>
            </SectionText>
          </Container>
        </GridItem>
      </GridContainer>

      <Container sx={{ textAlign: "center" }}>
        <SectionTitle variant="h5">Follow Us</SectionTitle>
      </Container>

      <SocialIconsContainer container>
        <GridItem item>
          <SocialIcons href="https://www.google.com" target="_blank">
            <FacebookIcon sx={{ fontSize: 30 }} />
          </SocialIcons>
        </GridItem>

        <GridItem item>
          <SocialIcons href="https://www.google.com" target="_blank">
            <GitHubIcon sx={{ fontSize: 30 }} />
          </SocialIcons>
        </GridItem>

        <GridItem item>
          <SocialIcons href="https://www.google.com" target="_blank">
            <InstagramIcon sx={{ fontSize: 30 }} />
          </SocialIcons>
        </GridItem>

        <GridItem item>
          <SocialIcons href="https://www.google.com" target="_blank">
            <FacebookIcon sx={{ fontSize: 30 }} />
          </SocialIcons>
        </GridItem>
      </SocialIconsContainer>
    </Container>
  );
};

export default Footer;
