import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 30;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};

  /* Default desktop height */
  height: 8rem;

  @media (max-width: 1024px) {
    height: 6rem;
  }
  @media (max-width: 768px) {
    height: 5rem;
  }
  @media (max-width: 480px) {
    height: 3rem;
  }
    @media (max-width: 400px) {
    height: 2rem;
  }
`;

const SocialIcons = (props) => {
  // pick responsive height dynamically for animation
  const getLineHeight = () => {
    if (window.innerWidth <= 480) return "2rem";
    if (window.innerWidth <= 768) return "3rem";
    if (window.innerWidth <= 1024) return "6rem";
    return "8rem";
  };

  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/sm-maruph/sm-maruph"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://x.com/MaruphM?t=pScOCK4Eabs4aXkR7SY9aA&s=08"
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://www.facebook.com/shahriar.maruph"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a style={{ color: "inherit" }} target="_blank" href="https://youtube.com">
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      {/* Animated Line */}
      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: getLineHeight() }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
