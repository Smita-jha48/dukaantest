import React from 'react'
import styled from "styled-components";
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from './Footer';
import Lowfooter from './Lowfooter';
import Lastfooter from './Lastfooter'

function App() {
  return (
    <>
    <Navbar />
    <Container />
    <Wrapper />
    <Main/>
    <Footer/>
    <Lowfooter/>
    </>
  )
}
const Container = styled.div`
position: absolute;
width: 1440px;
height: 1316px;
left: 0px;
top: 328px;

/* colors/black/98 */

background: #FAFAFA;

`;
const Wrapper = styled.div`
position: absolute;
width: 1120px;
height: 1430px;
left: 160px;
top: 134px;

/* colors/black/100 */

background: #FFFFFF;
/* shadows/card */

box-shadow: 0px 2px 8px rgba(26, 24, 30, 0.06);
border-radius: 8px;

`;



export default App
