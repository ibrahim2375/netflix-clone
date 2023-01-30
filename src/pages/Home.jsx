import React, { useState } from "react";
//components
import HomeNavbar from "../components/Home/HomeNavbar";
import HomeLanding from "../components/Home/HomeLanding";
import Divider from "../components/Home/Divider";
import Section from "../components/Home/Section";
import Questions from "../components/Home/Questions";
import Footer from "../components/Layout/Footer";
function Home() {
  const [sectionData, setSectionData] = useState([
    {
      id: 0,
      title: "Enjoy on your TV.",
      description:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      img: "tv.png",
      video: "video-tv.m4v",
      flipt: false,
    },
    {
      id: 1,
      title: "Download your shows to watch offline.",
      description:
        "Save your favorites easily and always have something to watch.",
      img: "mobile.jpg",
      video: "",
      flipt: true,
    },
    {
      id: 2,
      title: "Watch everywhere.",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      img: "device-pile.png",
      video: "video-devices.m4v",
      flipt: false,
    },
    {
      id: 3,
      title: "Create profiles for kids.",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      img: "anime.png",
      video: "",
      flipt: true,
    },
  ]);
  return (
    <div>
      <HomeNavbar />
      <HomeLanding />
      <Divider />
      {sectionData.map((data) => (
        <Section
          key={data.id}
          title={data.title}
          description={data.description}
          img={data.img}
          video={data.video}
          flipt={data.flipt}
          id={data.id}
        />
      ))}
      <Questions />
      <Divider />
      <Footer />
    </div>
  );
}

export default Home;
