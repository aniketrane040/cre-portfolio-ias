import React from "react";
import Card from "../Card/Card";
import { Container, Grid } from "@mui/material";
import { CardContainer, CardItem } from "./TeamStyles";

import {
  SectionHeading,
  SectionText,
  SectionTitle,
} from "../Global/GlobalStyles";

const Team = () => {
  return (
    <Container id="team">
      <Grid container sx={{ flexDirection: "row", justifyContent: "center" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <SectionHeading variant="h4" sx={{ marginTop: "40px" }}>
            OUR TEAM
          </SectionHeading>
        </Grid>
      </Grid>
      <CardContainer container>
        <CardItem item>
          <Card />
        </CardItem>
        <CardItem item>
          <Card />
        </CardItem>
        <CardItem item>
          <Card />
        </CardItem>
      </CardContainer>
    </Container>
  );
};

export default Team;
