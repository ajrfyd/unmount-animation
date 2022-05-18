import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from 'styled-components';

const Box = ({ visible }) => {
  const [animate, setAnimate] = useState(false);
  const [localState, setLocalState] = useState(visible);

  useEffect(() => {
    if(localState && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }
    setLocalState(visible);

    return () => {
      console.log('%cBox %cContainer %cUnmount', 'color: blue', 'color: green', 'color: red')
    }
  }, [localState, visible])

  if(!visible && !animate) return null;

  return (
    <Container disappear={!visible}>
    </Container>
  )
}

export default Box;

const flipIn = keyframes`
  0% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    opacity: 0
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg)
  }
  100% {
    -webkit-transform: perspective(400px);
    -ms-transform: perspective(400px);
    transform: perspective(400px)
  }
`

const rollOut = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    -ms-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)
  }
`

const Container = styled.div`
  border: 1px dashed red;
  width: 50px;
  height: 50px;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: ${flipIn};

  ${({disappear}) => disappear && css`
    animation-name: ${rollOut};
    animation-fill-mode: both;
    animation-timing-function: ease-out;
  `}
`

