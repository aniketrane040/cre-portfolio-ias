
import React from "react";
import { Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import './Events.css';
// import required modules
import { EffectFade, Autoplay } from "swiper";

import { SectionHeading } from "../Global/GlobalStyles";

const Event1 = () => {
  return (
      <Container maxWidth="md" >
        <Grid container sx={{padding:{lg:'0px 100px 20px 70px'}}}
          >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SectionHeading
              variant="h4"
              sx={{ marginTop: "20px", marginBottom: "20px" }}
            >
              Event 1
            </SectionHeading>
          </Grid>
        </Grid>
        <Grid item 
          
        >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[EffectFade, Autoplay]}
            >
              {itemData.map((item) => (
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                ><SwiperSlide>
                  <img
                  class="imgevents"
                    key={item.img}
                    style={{
                      borderRadius: "40px",
                      objectFit: "crop",
                      auto: "format",
                    }}
                    src={`${item.img}`}
                    //src={`${item.img}?w=700&fit=crop&auto=format`}
                    //srcSet={`${item.img}?w=700&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                  />
                </SwiperSlide>
                  
                </Container>
              ))}
            </Swiper>
        </Grid>
      </Container>
  );
};

export default Event1;

const itemData = [
  {
    img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Burger",
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
    img: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Camera",
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
    img: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coffee",
  },
  {
    img: "https://images.pexels.com/photos/8761640/pexels-photo-8761640.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Basketball",
  },
  {
    img: "https://images.pexels.com/photos/8761657/pexels-photo-8761657.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Fern",
  },

  {
    img: "https://images.pexels.com/photos/9034755/pexels-photo-9034755.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tomato basil",
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
