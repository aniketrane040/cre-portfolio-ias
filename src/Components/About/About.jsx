import { Container, Grid } from "@mui/material";
import React from "react";
import {
  SectionHeading,
  SectionText,
  SectionTitle,
} from "../Global/GlobalStyles";
import { GridContainerCards, GridItemCards } from "./AboutStyles";

const About = () => {
  return (
    <Container id="about" sx={{ mt: "20px" }}>
      <Grid container sx={{flexDirection:'row',justifyContent:'center'}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> 
          <SectionHeading variant="h4" sx={{ marginTop: "30px" }}>
            ABOUT US
          </SectionHeading>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <SectionText variant="h6" sx={{ textAlign: "center" }}>
            The goal of cloud computing is to provide easy , scalable access to
            computing resources and IT services .
          </SectionText>
        </Grid>
      </Grid>

      <GridContainerCards container>
        <GridItemCards item xs={12} sm={12} md={4} lg={4} xl={4}>
          <SectionTitle
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Vision
          </SectionTitle>
          <SectionText variant="body1">
          IAS makes every impression count, ensuring that ads are viewable by real people, in safe and suitable environments, activating contextual targeting, and driving supply path optimization.
          </SectionText>
        </GridItemCards>
        <GridItemCards item xs={12} sm={12} md={4} lg={4} xl={4}>
          <SectionTitle
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Mission
          </SectionTitle>
          <SectionText variant="body1">
          Our mission is to be the global benchmark for trust and transparency in digital media quality for the world’s leading brands, publishers, and platforms. We do this through data-driven technologies with actionable real-time signals and insight.
          </SectionText>
        </GridItemCards>
      </GridContainerCards>
    </Container>
  );
};

export default About;
