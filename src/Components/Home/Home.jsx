import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import logo from "../images/logo.png";
import { NavLink } from "../Global/GlobalStyles";
import {
  ContainerLogoHome,
  GridContainerHome,
  GridItemHome,
  SectionTitleHome,
  GridContainer,
  GridItem,
} from "./HomeStyles";

const Home = () => {
  return (
    <>
      <main>
        <Container>
          <GridContainerHome container>
            <GridItemHome item>
              <SectionTitleHome>
                CLOUD
                <br />
                RELIABILITY
                <br />
                ENGINEERS
              </SectionTitleHome>
            </GridItemHome>

            <GridItemHome item>
              <ContainerLogoHome>
                <NavLink to="#home" smooth>
                  <img src={logo} alt="CRE Logo" width="380px" height="380px" />
                </NavLink>
              </ContainerLogoHome>
            </GridItemHome>
          </GridContainerHome>

          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item>
              <Typography
                variant="h4"
                align="center"
                sx={{ color: "white", fontWeight: "bold", mb: "35px" }}
              >
                CLOUD RELIABILITY ENGINEERS , IAS PUNE
              </Typography>
            </Grid>
          </Grid>

          <GridContainer container>
            <GridItem item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Container sx={{ color: "red", fontWeight: "bolder" }}>
                <span>------------------------</span>
              </Container>
            </GridItem>
            <GridItem item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography
                variant="h6"
                align="center"
                paragrapgh
                sx={{ color: "white" }}
              >
                A smart, talented and enthusiastic team which works relentlessly
                to turn a mere idea into reality . CRE is where ideas are born,
                worked upon and executed! We are in charge of proactively
                building and implementing services to make IT and support better
                at their jobs.
              </Typography>
            </GridItem>
            <GridItem item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Container sx={{ color: "red", fontWeight: "bold" }}>
                <span>------------------------</span>
              </Container>
            </GridItem>
          </GridContainer>
        </Container>
      </main>
    </>
  );
};

export default Home;
