import React from "react";
import { Container, Grid } from "@mui/material";

import {
  SectionHeading,
} from "../Global/GlobalStyles";

//Card Slider imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
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
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Kylie",
    position: "Software developer",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Liza",
    position: "Front-end Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Cheryl",
    position: "Back-end Developer",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "David",
    position: "Web Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  
  {
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sam",
    position: "Front-end Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Max",
    position: "Back-end Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Suzen",
    position: "Web Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Riya",
    position: "Web Developer",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Robert",
    position: "Back-end Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Megan",
    position: "Back-end Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Thomas",
    position: "Web Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  {
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "John",
    position: "Front-end Develepor",
    Facebook: "https://www.facebook.com",
    Github: "https://www.github.com",
    Instagram: "https//www.instagram.com",
    Twitter: "https://www.facebook.com",
  },
  
  
];
