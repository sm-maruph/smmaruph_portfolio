import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import { motion } from "framer-motion";

// React Icons
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiSass,
  SiFigma,
  SiFramer,
} from "react-icons/si";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* start at top */
  overflow-y: auto; /* enable vertical scrolling */
  scroll-behavior: smooth; /* optional smooth scroll */

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.text};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.body};
  }
`;


const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
    display: block;
  }

  ul,
  p {
    margin-left: 1rem;
  }
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center; /* center icons in small screens */
  }
`;

const IconWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover span {
    opacity: 1;
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    & > svg {
      width: 25px !important;
      height: 25px !important;
    }
  }
`;


const Tooltip = styled.span`
  position: absolute;
  top: 120%; /* move tooltip below the icon */
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.7rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
`;

const iconVariants = {
  hover: { scale: 1.2, rotate: 10 },
  tap: { scale: 0.9 },
};

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        {/* Designer Card */}
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create designs that speak — clean, minimal, and simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <IconGrid>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <SiFigma size={35} color="#F24E1E" />
                <Tooltip>Figma</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <SiFramer size={35} color="#0055FF" />
                <Tooltip>Framer</Tooltip>
              </IconWrapper>
            </IconGrid>
          </Description>
        </Main>

        {/* Developer Card */}
        <Main>
          <Title>
            <Develope width={40} height={40} /> Full-Stack Developer
          </Title>
          <Description>
            I value businesses and brands I create for — I love bringing new ideas
            to life with code.
          </Description>
          <Description>
            <strong>Skills</strong>
            <IconGrid>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <FaHtml5 size={35} color="#E34F26" />
                <Tooltip>HTML5</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <FaCss3Alt size={35} color="#1572B6" />
                <Tooltip>CSS3</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <FaJs size={35} color="#F7DF1E" />
                <Tooltip>JavaScript</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <FaReact size={35} color="#61DAFB" />
                <Tooltip>React</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <SiRedux size={35} color="#764ABC" />
                <Tooltip>Redux</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <SiSass size={35} color="#CC6699" />
                <Tooltip>Sass</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <FaBootstrap size={35} color="#7952B3" />
                <Tooltip>Bootstrap</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <SiTailwindcss size={35} color="#06B6D4" />
                <Tooltip>TailwindCSS</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <SiFirebase size={35} color="#FFCA28" />
                <Tooltip>Firebase</Tooltip>
              </IconWrapper>
            </IconGrid>
          </Description>
          <Description>
            <strong>Tools</strong>
            <IconGrid>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <FaGithub size={35} color="#939393ff" />
                <Tooltip>Github</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <SiFigma size={35} color="#F24E1E" />
                <Tooltip>Figma</Tooltip>
              </IconWrapper>
              <IconWrapper variants={iconVariants} whileHover="hover" whileTap="tap">
                <SiFramer size={35} color="#0055FF" />
                <Tooltip>Framer</Tooltip>
              </IconWrapper>
            </IconGrid>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
