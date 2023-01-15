import React from "react";
import Card from "../Card/Card";
import { Container, Grid } from "@mui/material";
import { CardContainer, CardItem } from "./TeamStyles";

import {
  SectionHeading,
  SectionText,
  SectionTitle,
} from "../Global/GlobalStyles";

//Card Slider imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

//Imports for Card
import { CardBox, CardImage, CardName } from "../Card/CardStyles";
import logo from "../images/samarth.jpg";
import "../Card/Card.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { SocialIcons } from "../Global/GlobalStyles";

const Team = () => {
  return (
    <Container id="team" sx={{mb:'25px'}}>
      <Grid container sx={{ flexDirection: "row", justifyContent: "center" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <SectionHeading variant="h4" sx={{ marginTop: "40px" }}>
            OUR TEAM
          </SectionHeading>
        </Grid>
      </Grid>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {teamMembers.map((info) => (
          <SwiperSlide sx={{ display: "contents" }}>
            <CardBox container>
              <Grid item>
                <CardImage container className="image">
                  <img src={info.img} alt="" />
                </CardImage>
              </Grid>
              <Grid item sx={{ textAlign: "center"}}>
                <CardName variant="h6" sx={{mb:'10px'}}>{info.title}</CardName>
                <CardName variant="body1">
                  {info.position}
                </CardName>
              </Grid>
              <Grid item>
                <SocialIcons href={info.Facebook} target="_blank">
                  <FacebookIcon sx={{ fontSize: 30 }} />
                </SocialIcons>

                <SocialIcons href={info.Github} target="_blank">
                  <GitHubIcon sx={{ fontSize: 30 }} />
                </SocialIcons>

                <SocialIcons href={info.Instagram} target="_blank">
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </SocialIcons>

                <SocialIcons href={info.Facebook} target="_blank">
                  <TwitterIcon sx={{ fontSize: 30 }} />
                </SocialIcons>
              </Grid>
            </CardBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Team;

const teamMembers = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    position: "Web Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    position: "Full Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    position: "Front Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    position: "Back Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    position: "Web Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    position: "Ekta Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    position: "Don Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    position: "Teen Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    position: "Four Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    position: "Five Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    position: "Six Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    position: "Seven Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Facebook: "https://www.facebook.com",
  },
];
