import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';

const Box = styled(motion.li)`
  width: 24rem;      
  height: 60vh;       
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 18rem;
    height: 50vh;
    margin-right: 2rem;
  }

  @media (max-width: 480px) {
    width: 14rem;
    height: 45vh;
    margin-right: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 55%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 50%;
  }

  @media (max-width: 480px) {
    height: 45%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;

const ImageNav = styled.div`
  position: absolute;
  bottom: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
`;

const Dot = styled.span`
  width: ${props => props.active ? '0.8rem' : '0.5rem'};
  height: ${props => props.active ? '0.8rem' : '0.5rem'};
  background: ${props => props.active ? props.theme.body : 'rgba(255,255,255,0.6)'};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  margin: 0;

  @media (max-width: 768px) {
    font-size: calc(0.9em + 0.4vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.8em + 0.3vw);
  }
`;

const Description = styled.h2`
  font-size: calc(0.9em + 0.3vw);
  font-family: 'Karla',sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: calc(0.8em + 0.3vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.7em + 0.2vw);
  }
`;

const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display:flex;
  flex-wrap:wrap;

  ${Box}:hover & {
    border-top: 2px solid ${props => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right:1rem;
  font-size:calc(0.85em + 0.3vw);

  @media (max-width: 768px) {
    font-size: calc(0.75em + 0.3vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.7em + 0.2vw);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
`;

const Link = styled.a`
  background-color: ${props =>props.theme.body};
  color: ${props =>props.theme.text};
  text-decoration: none;
  padding:0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size:calc(1em + 0.5vw);

  ${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
  }

  @media (max-width: 768px) {
    padding:0.4rem calc(1.5rem + 1vw);
    font-size: calc(0.9em + 0.4vw);
  }

  @media (max-width: 480px) {
    padding:0.3rem calc(1rem + 1vw);
    font-size: calc(0.8em + 0.3vw);
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;

  ${Box}:hover &{
      &>*{
          fill:${props =>props.theme.text};
      }
  }
`;

const GithubIcon = styled(Github)`
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

// Framer motion configuration
const Item = {
  hidden:{
      scale:0
  },
  show:{
      scale:1,
      transition: {
          type: 'spring',
          duration: 0.5
      }
  }
}

const Card = (props) => {
  const { id, name, description, tags, demo, github, images } = props.data;
  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (index) => setCurrentImage(index);

  return (
      <Box key={id} variants={Item}>
        <ImageWrapper>
          <Image src={images[currentImage]} />
          {images.length > 1 && (
            <ImageNav>
              {images.map((_, idx) => (
                <Dot
                  key={idx}
                  active={idx === currentImage}
                  onClick={() => handleDotClick(idx)}
                />
              ))}
            </ImageNav>
          )}
        </ImageWrapper>

        <Content>
          <div>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Tags>
              {tags.map((t,id) => <Tag key={id}>#{t}</Tag>)}
            </Tags>
          </div>
          <Footer>
            <Link href={demo} target="_blank">Visit</Link>
            <Git href={github} target="_blank">
              <GithubIcon />
            </Git>
          </Footer>
        </Content>
      </Box>
  );
}

export default Card;
