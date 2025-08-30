// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'

// Animation for label (fade + slide up)
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`

const Power = styled.button`
  background-color: #FCF6F4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`

const Label = styled.span`
  margin-top: 0.6rem;
  padding: 0.3rem 0.6rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  animation: ${fadeInUp} 0.6s ease-in-out;
`

const PowerButton = () => {
  return (
    <Wrapper>
      <Power>
        <NavLink to="/">
          <PowerBtn width={30} height={30} fill="currentColor" />
        </NavLink>
      </Power>
      <Label>Switch to home</Label>
    </Wrapper>
  )
}

export default PowerButton
