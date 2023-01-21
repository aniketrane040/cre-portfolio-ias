import React from "react";
import { Container, Grid} from "@mui/material";
import HeroCarousel from "react-hero-carousel";

import {
  SectionHeading
} from "../Global/GlobalStyles";

const Event4 = () => {
  const onHello = () =>{
    alert("Hello Everyone")
  }
  return (
    <div id="event1">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SectionHeading variant="h4" sx={{ marginTop: "50px",marginBottom:'50px' }}>
              Event4
            </SectionHeading>
          </Grid>
            <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <HeroCarousel sx={{mb:'10px'}}>
              {itemData.map((item) => (
                <Container sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                  <img
                  key={item.img}
                  style={{ borderRadius: "40px",width:'500px',objectFit:'crop',auto:'format'}}
                  src={`${item.img}`}
                  //src={`${item.img}?w=700&fit=crop&auto=format`}
                  //srcSet={`${item.img}?w=700&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  onClick={onHello}
                />
                </Container> 
              ))}
            </HeroCarousel>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Event4;

const itemData = [
  {
    img: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Bike",
  },
  {
    img: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Bike",
  },
  {
    img: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
    title: "Breakfast",
  },
  {
    img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Burger",
  },
  {
    img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Burger",
  },
  {
    img: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Camera",
  },
  {
    img: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coffee",
  },
  {
    img: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Hats",
  },
  {
    img: "https://images.pexels.com/photos/7643750/pexels-photo-7643750.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Honey",
  },
  
  {
    img: "https://images.pexels.com/photos/8761657/pexels-photo-8761657.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Fern",
  },
  
 
  {
    img: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sea star",
  },
  {
    img: "https://images.pexels.com/photos/7495641/pexels-photo-7495641.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mushrooms",
  },
];