import { Container, Grid } from "@mui/material";
import React from "react";
import { EventContainer, EventItem } from "./EventStyles";
import { Event1, Event2, Event3, Event4 } from "../defaultExports";
import {
  SectionHeading
} from "../Global/GlobalStyles";


const Events = () => {
  return (
    <Container id="events">
      <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SectionHeading variant="h4" sx={{ marginTop: "40px"}}>
              EVENTS
            </SectionHeading>
          </Grid>
      </Grid>
      <EventContainer container>
        <EventItem item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Event1 />
        </EventItem>
        <EventItem item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Event2 />
        </EventItem>
        <EventItem item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Event3 />
        </EventItem>
        <EventItem item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Event4 />
        </EventItem>
      </EventContainer>
    </Container>
  );
};

export default Events;
