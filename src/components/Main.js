import React from 'react'
import styled from 'styled-components';

function Main() {
  return (
    <>
    <Container>Free slogan maker</Container>
    <Wrapper>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</Wrapper>
    <p className='smalltext'>Word for your slogan</p>
    <input type="text" placeholder="search" className='search' ></input>
    <button className='btn'>buttons/navbar</button>
    <p className='medtext'>We have generated 1,023 slogans for “cozy”</p>
    <p className='p1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
    <p className='p2'>coziness building for tomorrow</p>
    <p className='p3'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
    <p className='p4'>Review the facts cool is the best.</p>
    <p className='p5'>Review the facts cool is the best.</p>
    <p className='p6'>coziness building for tomorrow</p>
  </>
  )

}
const Container = styled.div`
position: absolute;
width: 303px;
height: 42px;
left: 352px;
top: 198px;

font-family: 'Galano Grotesque';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 42px;
/* identical to box height, or 117% */

letter-spacing: -0.04em;

color: #1A181E;

`;
const Wrapper = styled.div`
position: absolute;
width: 736px;
height: 56px;
left: 352px;
top: 256px;

/* Heading/H5|Regular */

font-family: 'Galano Grotesque';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
/* or 140% */


/* colors/black/30 */

color: #4D4D4D;

`;

export default Main