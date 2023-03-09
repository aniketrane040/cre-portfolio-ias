import React from "react";
import { Container, Grid } from "@mui/material";
import teamMembers from "./Teamm.js"

import {
  SectionHeading,
} from "../Global/GlobalStyles";

//Card Slider imports
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Imports for Card
import { CardBox, CardImage, CardName } from "../Card/CardStyles";
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
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup:1,
          },
          400:{
            slidesPerView:1,
            slidesPerGroup:1,
          },
          639: {
            slidesPerView: 2,
            slidesPerGroup:2,
          },
          865:{
            slidesPerView:2,
            slidesPerGroup:2,
          },
          1000:{
            slidesPerView:3,
            slidesPerGroup:3,
          },
          1500:{
            slidesPerView:4,
            slidesPerGroup:4,
          },
          1700:{
            slidesPerView:4,
            slidesPerGroup:4,
          }
        }}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
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


// add this in team.js file and import here
