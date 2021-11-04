import './App.css';
import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {BiSearch} from 'react-icons/bi';
import {BiPlay} from 'react-icons/bi';
import {BiHeart} from 'react-icons/bi';
import {FaVimeo} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const series1 = 'In-House Insights'
const series2 = 'New Visions'
const series3 = 'Partner Programs'

const video1 = 'Why is Pro-Bono personally important to you?'
const video2 = 'How do you create a successful Pro-Bono program?'
const video3 = 'Why should in house teams do Pro-Bono?'

const icon1 = 'heart.svg'
const icon2 = 'clipboard.svg'
const icon3 = 'people.svg'


const triangles = () => {
  return(
       <div id='triangles' >
        <div id='triangle-topleft' />
          <div id='triangle-bottomright' />
          </div>
  )}

  const thumbnail = (color, series_title, video_title, icon) => {
     return(
       <div class='thumbnail' id={color} >
         <div class='thumbnail-text'>
           <div class='series-title'>
              {series_title}
           </div>
         <div class='video-title'>
           {video_title}
           </div>
           </div>
            {triangles()}
            <img class='thumbnail-icon' src={icon} />
          </div> 
        )
  }

  // const generateThumbs = (color, series_title, video_title, icon) => {
  //   const thumbAmount = 3
  //   for (let i = 0; i < thumbAmount; i++) {
  //     return(

  //     )
  //   }

  // }

function App() {
  return (
    <div className='App'>
    <Container id='top_area'>
    <nav class='navbar'>
        <Container>
          <a class='navbar-brand'>
            <img id='logo' src='welcome.png' />
          </a>
          <form class='d-flex'>
            <div class='input-group'>
              <div class='input-group-prepend'>
                <button class='btn btn-outline-light' id='search-button' type='button'> <BiSearch /></button>
              </div>
              <input id='search-bar' type='text' class='form-control form-outline' placeholder='' aria-label='' aria-describedby='basic-addon1' />
            </div>
          </form> 
        </Container>
      </nav>
      <Container id ='top_text'>
        <Row id = 'title_bar'>
          <Col id = 'start_button'>
          <button type='button' class='btn btn-dark btn-lg'>
            < BiPlay />
            <b> play </b>
            </button>

          </Col>
          <Col>
              <div id= 'title'>
              <span class='graphik-light'>
                IN-HOUSE </span> 
                <span class='graphik-black'>
                  INSIGHTS </span>
              </div>
          </Col>
        </Row>
          <Row>
          <div id ='description'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </Row>
      </Container>
      {/* <div id='gradient' /> */}
      {/* <img id='hero' src='people-in-office.jpg' /> */}

    </Container>
     
      <Container id = 'content'>
        <Row>
          <span id='episodes' class='graphik-black'> Episodes </span>
        </Row>
        <Row>
          <Col>
         {thumbnail('pink', series1, video1, icon1)}
         {thumbnail('pink', series1, video1, icon1)}
         {thumbnail('pink', series1, video1, icon1)}

          </Col>
          <Col>
          {thumbnail('blue', series2, video2, icon2)}
          {thumbnail('blue', series2, video2, icon2)}
          {thumbnail('blue', series2, video2, icon2)}

          </Col>
          <Col>
          {thumbnail('yellow', series3, video3, icon3)}
          {thumbnail('yellow', series3, video3, icon3)}
          {thumbnail('yellow', series3, video3, icon3)}
          </Col>
        </Row>
      </Container>
      <Container id='footer'>
      <Row>
        <Col>
          <p>
            Contact Studio D
          </p>
        </Col>
        <Col id='socials' >
          <FaVimeo />
          <FaLinkedin />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
