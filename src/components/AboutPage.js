import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh; /* ✅ fixed height for scroll */
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: flex-start; /* ✅ align text from top */
  align-items: flex-start;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  overflow-y: auto; /* ✅ scrollable inside */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: ${(props) => props.theme.text} transparent;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  /* Optional custom scrollbar for Chrome/Edge */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.text};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a passionate Software Engineer and Web Developer from Bangladesh
          with a strong focus on creating impactful digital solutions. I love
          turning complex ideas into simple, efficient, and user-friendly
          websites and applications that not only look great but also deliver a
          smooth user experience.
          <br /> <br />
          My interests span the entire web development stack — from crafting
          beautiful and responsive front-end designs to exploring powerful
          back-end technologies. I enjoy experimenting with new tools,
          frameworks, and techniques, constantly learning and building projects
          that solve real-world problems. Every new challenge excites me and
          pushes me to grow as a developer.
          <br /> <br />
          Beyond development, I dedicate my time to teaching, mentoring, and
          blogging. Over the past years, I have guided students and
          professionals in business analysis and project management, helping
          them bridge the gap between academic knowledge and industry practices.
          Sharing what I’ve learned and inspiring others is something I deeply
          value.
          <br /> <br />
          I believe that technology becomes truly meaningful when it empowers
          people and creates positive change. For me, coding is not just about
          building software — it’s about crafting experiences, solving problems,
          and making life easier.
          <br /> <br />
          You can always connect with me through my social links — I’d love to
          share ideas, collaborate, and create something amazing together.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
