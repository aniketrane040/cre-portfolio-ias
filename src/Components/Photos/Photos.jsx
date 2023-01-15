import React from "react";
import { Container, Grid, ImageList, ImageListItem } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { EffectCards } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";

import { SectionHeading } from "../Global/GlobalStyles";

const Photos = () => {
  return (
    <div id="photos">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SectionHeading
              variant="h4"
              sx={{ marginTop: "100px", marginBottom: "10px" }}
            >
              PHOTOS
            </SectionHeading>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ margin: "20px 0px 20px 0px", padding: "0px 200px 0px 200px" }}
        >
          <Container>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {itemData.map((item) => (
                <SwiperSlide>
                  <img
                    key={item.img}
                    style={{
                      borderRadius: "40px",
                      width: "700px",
                      objectFit: "crop",
                      auto: "format",
                    }}
                    src={`${item.img}`}
                    //src={`${item.img}?w=700&fit=crop&auto=format`}
                    //srcSet={`${item.img}?w=700&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Grid>
      </Container>
    </div>
  );
};

export default Photos;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
