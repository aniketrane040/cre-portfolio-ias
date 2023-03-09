import { Container, Grid } from "@mui/material";
import React from "react";
import { EventContainer, EventItem } from "./EventStyles";
import { Event1, Event2, Event3, Event4 } from "../defaultExports";
import { SectionHeading } from "../Global/GlobalStyles";

const Events = () => {
  return (
    <Container id="events">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <SectionHeading variant="h4" sx={{ marginTop: "20px" }}>
            EVENTS
          </SectionHeading>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{maxHeight:'800px'}}>
            <Event1 />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{maxHeight:'800px'}}>
            <Event2 />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{maxHeight:'800px'}}>
            <Event3 />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{maxHeight:'800px'}}>
            <Event4 />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Events;
