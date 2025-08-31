import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import { motion } from "framer-motion";

// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaGithub,
  FaDocker,
  FaDatabase as SiMssql,
} from "react-icons/fa";
import {
  SiCanva,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiC,
  SiCplusplus,
  SiFlutter,
  SiPostman,
  SiJira,
  SiTrello,
  SiNotion,
  SiClickup,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGitlab,
  SiFramer,
  SiFigma,
  SiNumpy,
  SiPlotly as SiMatplotlib, // Alias SiPlotly to SiMatplotlib
  SiScikitlearn,
  SiPandas,
  SiMicrosoftoffice,
  SiOverleaf,
} from "react-icons/si";
import { VscVscode as SiVscode } from "react-icons/vsc";

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

const IconWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  padding-bottom: 1rem;
  padding-left: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
  }
  color: ${(props) =>
    props.hovered ? props.hoverColor : props.color}; /* use hovered prop */

  & > svg {
    transition: transform 0.3s ease, color 0.3s ease;
    color: inherit;
  }

  &:hover > svg {
    transform: scale(1.4); /* individual icon hover scale */
  }

  &:hover span {
    opacity: 1;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    & > svg {
      width: 25px !important;
      height: 25px !important;
    }
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  scroll-behavior: smooth;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

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
  @media (max-width: 768px) {
    padding: 0.4rem;
    width: 40vw;
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
  font-size: calc(0.4em + 1vw);
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

const iconColors = {
  figma: { normal: "#F24E1E", light: "#FF7F6E" },
  framer: { normal: "#0055FF", light: "#66B2FF" },
  canva: { normal: "#00C4CC", light: "#66FFFF" },
  html: { normal: "#E34F26", light: "#FF8C6A" },
  css: { normal: "#1572B6", light: "#4DA6FF" },
  js: { normal: "#F7DF1E", light: "#FFF58C" },
  react: { normal: "#61DAFB", light: "#A6F0FF" },
  bootstrap: { normal: "#7952B3", light: "#B68FFF" },
  tailwind: { normal: "#06B6D4", light: "#66F0FF" },
  firebase: { normal: "#FFCA28", light: "#FFE066" },
  node: { normal: "#339933", light: "#66CC66" },
  express: { normal: "#9f9090ff", light: "#ecd9d9ff" },
  python: { normal: "#3776AB", light: "#6FAEE0" },
  c: { normal: "#A8B9CC", light: "#D1D9E6" },
  cpp: { normal: "#00599C", light: "#4D88B3" },
  flutter: { normal: "#02569B", light: "#4D88B3" },
  java: { normal: "#007396", light: "#4DA6B3" },
  php: { normal: "#777BB4", light: "#A29FE6" },
  github: { normal: "#584f4fff", light: "#ffffffff" },
  docker: { normal: "#2496ED", light: "#66B2F0" },
  vscode: { normal: "#007ACC", light: "#66B2FF" },
  postman: { normal: "#FF6C37", light: "#FFA07A" },
  jira: { normal: "#0052CC", light: "#3399FF" },
  trello: { normal: "#0079BF", light: "#66B2CC" },
  notion: { normal: "#000000", light: "#c3bbbbff" },
  clickup: { normal: "#7B68EE", light: "#A890FF" },
  mongodb: { normal: "#47A248", light: "#66CC66" },
  postgresql: { normal: "#336791", light: "#6699CC" },
  redis: { normal: "#DC382D", light: "#FF6666" },
  gitlab: { normal: "#FC6D26", light: "#FFA07A" },
  numpy: { normal: "#013243", light: "#1B4F72" },
  matplotlib: { normal: "#11557C", light: "#4A90E2" },
  scikitlearn: { normal: "#F7931E", light: "#F7B661" },
  pandas: { normal: "#150458", light: "#4B4BFF" },
  seaborn: { normal: "#3776AB", light: "#6FAEE0" },
  mysql: { normal: "#4479A1", light: "#6EA8D9" },
  mssql: { normal: "#CC2927", light: "#F08078" },
  microsoftoffice: { normal: "#D83B01", light: "#FF6F3C" },
  overleaf: { normal: "#179B77", light: "#4ECBA6" },
};

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: 80%;
  background: transparent;
  color: ${(props) =>
    props.hovered ? "#fff" : props.theme.text}; // white on hover
  padding: 0 0.2rem;
  border-radius: 5px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 1; // always visible
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const iconVariants = {
  hover: { scale: 1.2, rotate: 1 },
  tap: { scale: 0.9 },
};

const MySkillsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Update renderIcon to accept a 'cardType' prop
  const renderIcon = (Icon, normalColor, lightColor, label, cardType) => (
    <IconWrapper
      color={normalColor}
      hoverColor={lightColor}
      hovered={hoveredCard === cardType} // Only hover effect if this card is hovered
      variants={iconVariants}
      whileTap="tap"
    >
      <Icon size={35} />
      <Tooltip hovered={hoveredCard === cardType}>{label}</Tooltip>
    </IconWrapper>
  );

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        {/* Designer Card */}
        <Main
          onMouseEnter={() => setHoveredCard("designer")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description
            style={{
              display: "block", // makes it behave like a block element
              width: "100%", // ✅ full width
              wordBreak: "break-word", // ✅ wrap long words
              whiteSpace: "normal", // ✅ allow wrapping
            }}
          >
            I love designing with HCI principles and UI/UX best practices to
            create human-centered, intuitive, and interactive experiences.
          </Description>

          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>UI/UX Design</li>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Designing Tools</strong>
            <IconGrid>
              {renderIcon(
                SiFigma,
                iconColors.figma.normal,
                iconColors.figma.light,
                "Figma",
                "designer"
              )}
              {renderIcon(
                SiFramer,
                iconColors.framer.normal,
                iconColors.framer.light,
                "Framer",
                "designer"
              )}
              {renderIcon(
                SiCanva,
                iconColors.canva.normal,
                iconColors.canva.light,
                "Canva",
                "designer"
              )}
            </IconGrid>
          </Description>
        </Main>

        {/* Developer Card */}
        {/* Developer Card */}
        <Main
          onMouseEnter={() => setHoveredCard("developer")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Title>
            <Develope width={40} height={40} /> Full-Stack Developer
          </Title>
          <Description>
            I value businesses and brands I create for — I love bringing new
            ideas to life with code.
          </Description>

          <Description>
            <strong>Programming Languages</strong>
            <IconGrid>
              {renderIcon(
                FaHtml5,
                iconColors.html.normal,
                iconColors.html.light,
                "HTML5",
                "developer"
              )}
              {renderIcon(
                FaCss3Alt,
                iconColors.css.normal,
                iconColors.css.light,
                "CSS3",
                "developer"
              )}
              {renderIcon(
                FaJs,
                iconColors.js.normal,
                iconColors.js.light,
                "JavaScript",
                "developer"
              )}
              {renderIcon(
                FaPython,
                iconColors.python.normal,
                iconColors.python.light,
                "Python",
                "developer"
              )}
              {renderIcon(
                FaJava,
                iconColors.java.normal,
                iconColors.java.light,
                "Java",
                "developer"
              )}
              {renderIcon(
                FaPhp,
                iconColors.php.normal,
                iconColors.php.light,
                "PHP",
                "developer"
              )}
              {renderIcon(
                SiC,
                iconColors.c.normal,
                iconColors.c.light,
                "C",
                "developer"
              )}
              {renderIcon(
                SiCplusplus,
                iconColors.cpp.normal,
                iconColors.cpp.light,
                "C++",
                "developer"
              )}
              {renderIcon(
                SiFlutter,
                iconColors.flutter.normal,
                iconColors.flutter.light,
                "Flutter",
                "developer"
              )}
              {renderIcon(
                FaReact,
                iconColors.react.normal,
                iconColors.react.light,
                "React Native",
                "developer"
              )}
            </IconGrid>
          </Description>

          <Description>
            <strong>📦 Libraries & Frameworks</strong>
            <IconGrid>
              {renderIcon(
                FaReact,
                iconColors.react.normal,
                iconColors.react.light,
                "React",
                "developer"
              )}
              {renderIcon(
                FaBootstrap,
                iconColors.bootstrap.normal,
                iconColors.bootstrap.light,
                "Bootstrap",
                "developer"
              )}
              {renderIcon(
                SiTailwindcss,
                iconColors.tailwind.normal,
                iconColors.tailwind.light,
                "TailwindCSS",
                "developer"
              )}
              {renderIcon(
                FaNodeJs,
                iconColors.node.normal,
                iconColors.node.light,
                "Node.js",
                "developer"
              )}
              {renderIcon(
                SiExpress,
                iconColors.express.normal,
                iconColors.express.light,
                "Express.js",
                "developer"
              )}
              {renderIcon(
                SiFirebase,
                iconColors.firebase.normal,
                iconColors.firebase.light,
                "Firebase",
                "developer"
              )}
              {renderIcon(
                SiFlutter,
                iconColors.flutter.normal,
                iconColors.flutter.light,
                "Flutter",
                "developer"
              )}

              {/* Python Libraries */}
              {renderIcon(
                SiNumpy,
                iconColors.numpy.normal,
                iconColors.numpy.light,
                "NumPy",
                "developer"
              )}
              {renderIcon(
                SiMatplotlib,
                iconColors.matplotlib.normal,
                iconColors.matplotlib.light,
                "Matplotlib",
                "developer"
              )}
              
              {renderIcon(
                SiPandas,
                iconColors.pandas.normal,
                iconColors.pandas.light,
                "Pandas",
                "developer"
              )}
              {renderIcon(
                SiScikitlearn,
                iconColors.scikitlearn.normal,
                iconColors.scikitlearn.light,
                "Scikit-learn",
                "developer"
              )}
            </IconGrid>
          </Description>

          <Description>
            <strong>🛠 Tools & Platforms</strong>
            <IconGrid>
              {renderIcon(
                FaGithub,
                iconColors.github.normal,
                iconColors.github.light,
                "GitHub",
                "developer"
              )}
              {renderIcon(
                SiVscode,
                iconColors.vscode.normal,
                iconColors.vscode.light,
                "VS Code",
                "developer"
              )}
              {renderIcon(
                FaDocker,
                iconColors.docker.normal,
                iconColors.docker.light,
                "Docker",
                "developer"
              )}
              {renderIcon(
                SiPostman,
                iconColors.postman.normal,
                iconColors.postman.light,
                "Postman",
                "developer"
              )}
              {/* {renderIcon(
                SiMicrosoftoffice,
                iconColors.microsoftoffice.normal,
                iconColors.microsoftoffice.light,
                "Microsoft Office",
                "developer"
              )} */}
              {renderIcon(
                SiOverleaf,
                iconColors.overleaf.normal,
                iconColors.overleaf.light,
                "Overleaf",
                "developer"
              )}
            </IconGrid>
          </Description>

          <Description>
            <strong>📋 Project Management Tools</strong>
            <IconGrid>
              {renderIcon(
                SiJira,
                iconColors.jira.normal,
                iconColors.jira.light,
                "Jira",
                "developer"
              )}
              {renderIcon(
                SiTrello,
                iconColors.trello.normal,
                iconColors.trello.light,
                "Trello",
                "developer"
              )}
              {renderIcon(
                SiNotion,
                iconColors.notion.normal,
                iconColors.notion.light,
                "Notion",
                "developer"
              )}
              {renderIcon(
                SiClickup,
                iconColors.clickup.normal,
                iconColors.clickup.light,
                "ClickUp",
                "developer"
              )}
              {renderIcon(
                SiGitlab,
                iconColors.gitlab.normal,
                iconColors.gitlab.light,
                "GitLab",
                "developer"
              )}
            </IconGrid>
          </Description>

          <Description>
            <strong>🗄 Databases I Use</strong>
            <IconGrid>
              {renderIcon(
                SiFirebase,
                iconColors.firebase.normal,
                iconColors.firebase.light,
                "Firebase",
                "developer"
              )}
              {renderIcon(
                SiMongodb,
                iconColors.mongodb.normal,
                iconColors.mongodb.light,
                "MongoDB",
                "developer"
              )}
              {renderIcon(
                SiPostgresql,
                iconColors.postgresql.normal,
                iconColors.postgresql.light,
                "PostgreSQL",
                "developer"
              )}
              {renderIcon(
                SiMysql,
                iconColors.mysql.normal,
                iconColors.mysql.light,
                "MySQL",
                "developer"
              )}
              {renderIcon(
                SiMssql,
                iconColors.mssql.normal,
                iconColors.mssql.light,
                "MSSQL",
                "developer"
              )}
            </IconGrid>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
