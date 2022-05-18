import React, { useEffect } from "react";
import styled from 'styled-components';

const Btn = ({ children, onClick }) => {
  // console.log('%cBtn %cComponent %cRender!', 'color: blue','color: green', 'color: red');

  
  return (
    <Button onClick={onClick}>
      { children }
    </Button>
  )
}

export default Btn;

const Button = styled.button`
  
`