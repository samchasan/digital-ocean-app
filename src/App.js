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

const secondWord = (word) => {
  return(
    <span class='graphik-black'> {word}</span>
  )
}

const series = (firstword, secondword) => {
  return (
    <div>
     {firstword} {secondWord(secondword)}
    </div>
  )
}
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
            <a href='https://vimeo.com/showcase/8089437'>
          <button type='button' class='btn btn-dark btn-lg' >
            < BiPlay />
            <b> play </b>
          </button>
          </a>

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
              In-House Insights is an educational series to help in-house lawyers 
              learn from their peers at other companies about how to structure and 
              scale their pro bono programs and efforts. This platform covers a broad 
              range of topics, and features some of the best in-house pro bono programs 
              coast-to-coast.            
            </p>
          </div>
        </Row>
      </Container>


    </Container>
     
      <Container id = 'content'>
        <Row>
          <span id='episodes' class='graphik-black'> Episodes </span>
        </Row>
        <Row>
          <Col>
         {thumbnail('pink', series('In-house', 'insights'), video1, icon1)}
         {thumbnail('pink', series('In-house', 'insights'), video1, icon1)}
         {thumbnail('pink', series('In-house', 'insights'), video1, icon1)}

          </Col>
          <Col>
          {thumbnail('blue', series('New', 'visions'), video2, icon2)}
          {thumbnail('blue', series('New', 'visions'), video2, icon2)}
          {thumbnail('blue', series('New', 'visions'), video2, icon2)}

          </Col>
          <Col>
          {thumbnail('yellow', series('Partner', 'programs'), video3, icon3)}
          {thumbnail('yellow', series('Partner', 'programs'), video3, icon3)}
          {thumbnail('yellow', series('Partner', 'programs'), video3, icon3)}
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
