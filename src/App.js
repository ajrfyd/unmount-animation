import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Page from './components/page/Page';
import Home from './components/home/Home';

const App = () => {
  console.log('%cApp %cComponent %cRender!', 'color: blue','color: green' ,'color: red');

  useEffect(() => {
    return () => {
      // console.log('%cApp %cComponent %cUnmount!', 'color: red','color: green' ,'color: blue');
      console.log('App unmount!')
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/page/:pageNum' element={<Page />}/>
      </Routes>
    </Container>
  );
}

export default App;


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