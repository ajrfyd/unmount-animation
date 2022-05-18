import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route, Link, useParams } from 'react-router-dom';


import Box from "../box/Box";
import Btn from "../btn/Btn";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const onVisibleHandler = () => setVisible(visible => !visible)

  return (
    <Container>
      <Btn onClick={onVisibleHandler}>Click!</Btn>
      <DisplayContainer>
        {/* {
          visible && <Box />
        } */}
        <Box visible={visible}/>  
      </DisplayContainer>
      <Link to={`page/1`}>GoToPage!</Link>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;  
  flex-direction: column;
`
const DisplayContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`