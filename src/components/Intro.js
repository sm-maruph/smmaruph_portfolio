import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(0.8rem + 1.2vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    font-size: calc(1.5rem + 2vw);
    margin: 0;
  }

  h3 {
    font-size: calc(1rem + 1.5vw);
    font-weight: 600;
    margin: 0.2rem 0;
  }

  h4 {
    font-size: calc(1rem + 1vw);
    font-weight: 500;
    margin: 0.1rem 0;
  }

  h6 {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
    font-size: calc(0.6rem + 1vw);
    font-weight: 300;
    line-height: 1.4;
    margin-top: 0.5rem;
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: calc(1.2rem + 2vw);
    }
    h3 {
      font-size: calc(0.9rem + 2vw);
    }
    h4 {
      font-size: calc(0.8rem + 1.5vw);
    }
    h6 {
      font-size: calc(0.5rem + 1.2vw);
    }
  }
    /* Mobile adjustments */
  @media (max-width: 390px) {
    padding: 1rem;

    h1 {
      font-size: calc(1rem + 2vw);
    }
    h3 {
      font-size: calc(0.7rem + 2vw);
    }
    h4 {
      font-size: calc(0.6rem + 1.5vw);
    }
    h6 {
      font-size: calc(0.4rem + 1.2vw);
    }
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hello,</h1>
          <h3>I'm S.M. Shahriar Rahman Maruph</h3>
                <h4>Oficer, IT, CBC</h4>

          <h4>SOC Analyst L1 | BSc in CSE</h4>
          <h6>
           I am a SOC Analyst L1 specializing in security monitoring, incident detection, and threat analysis.
          </h6>
        </Text>
      </SubBox>

      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
