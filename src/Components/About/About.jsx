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
            The goal of cloud computing is to provide easy, scalable access to
            computing resources and IT services Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab quos iusto velit amet voluptas voluptatem dolorum odit modi fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut incidunt fugiat, temporibus dolorum vitae a itaque similique ullam! In quia perferendis voluptatibus qui voluptatem vero ad corrupti, repellat ipsam beatae dolorem illum numquam, saepe impedit deserunt omnis totam minima, veniam corporis eligendi facere eos eum veritatis odit. Doloribus, exercitationem.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            earum rerum neque quo perspiciatis iusto inventore corrupti porro
            voluptatibus ex culpa similique, animi repellat praesentium fugit
            impedit labore, quis quod.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            earum rerum neque quo perspiciatis iusto inventore corrupti porro
            voluptatibus ex culpa similique, animi repellat praesentium fugit
            impedit labore, quis quod.
          </SectionText>
        </GridItemCards>
      </GridContainerCards>
    </Container>
  );
};

export default About;
