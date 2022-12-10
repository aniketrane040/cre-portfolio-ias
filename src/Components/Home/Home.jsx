import React from "react";
import { Typography, Container } from "@mui/material";
import logo from "../images/logo.png";
import { NavLink } from "../Global/GlobalStyles";
import {
  ContainerLogoHome,
  GridContainerHome,
  GridItemHome,
  SectionTitleHome
} from "./HomeStyles";

const Home = () => {
  return (
    <>
      <main>
        <div>
          <GridContainerHome container>
            <GridItemHome item>
              <SectionTitleHome>CLOUD<br/>RELIABILITY<br/>ENGINEERS , IAS<br/>PUNE</SectionTitleHome>
            </GridItemHome>

            <GridItemHome item xs={12} sm={12} md={4} lg={4} xl={4}>
              <ContainerLogoHome>
                <NavLink to="#home" smooth>
                  <img src={logo} alt="CRE Logo" width="350px" height="350px" />
                </NavLink>
              </ContainerLogoHome>
            </GridItemHome>
          </GridContainerHome>
          <Container maxWidth="sm" sx={{ marginTop: "50px" }}>
            <Typography
              variant="h3"
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
              gutterBottom
            >
              CRE-IAS TEAM, PUNE
            </Typography>
            <Typography
              variant="h6"
              align="center"
              paragrapgh
              sx={{ color: "white" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
              laborum, sequi fugiat sint, est cum tenetur deleniti nisi nemo eum
              non eaque esse autem et nesciunt repellat? Qui, atque nihil.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Home;
