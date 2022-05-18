import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { keyframes, css } from 'styled-components';

const Page = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  const [page, setPage] = useState(Number(params.pageNum));
  // button을 trigger로 apper에 따라 페이지가 나타났다 사라짐. 
  const [appear, setAppear] = useState(false);
  const [localState, setLocalState] = useState(appear);
  const [animate, setAnimate] = useState(false);
  const [direction, setDirection] = useState('right');

  // console.log('Mount!!!');
  const onClick = () => navigate('/');

  const prevHandler = () => {
    setAppear(false);
    setTimeout(() => setPage(page => page - 1), 500);
    // setPage(page => page - 1);
    setDirection('left');
  };

  const nextHandler = () => {
    setAppear(false);
    setTimeout(() => setPage(page => page + 1), 500);
    // setPage(page => page + 1);
    setDirection('right');
  };

  useEffect(() => {
    setAppear(true);
    navigate(`/page/${page}`);
  }, [page]);

  useEffect(() => {
    if(!appear && localState) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
    setLocalState(appear);
  }, [appear, localState]);

  // if(!appear && !animate) return null;

  return (
    <Container disappear={animate} direction={direction}>
      <button onClick={onClick} style={{ marginBottom: '40vh' }}>Home</button>
      Hello This Page Number is <span >{params.pageNum}</span>
      <div>
        <button onClick={prevHandler} disabled={page === 1 ? true : false}>prev</button>
        <button onClick={nextHandler}>next</button>
      </div>
    </Container>
  )
}

export default Page;

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0)
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
  }
`

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    -ms-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
  }
`

const fadeOutRight = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    -ms-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }
`

const fadeOutLeft = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0)
  }
`

const Container = styled.div`
  -webkit-animation-duration: 1s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  ${({direction}) => direction && css`
    animation-name: ${direction === 'right' ? fadeInLeft : fadeInRight};
  ` }

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 5px dashed #000;
  padding: 2rem;

  span {
    color: #6200ee;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  ${({disappear, direction}) => disappear && direction && css`
    animation-name: ${direction === 'right' ? fadeOutRight : fadeOutLeft};  
  `}
`

