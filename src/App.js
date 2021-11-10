import './App.css';
import React, {Component} from 'react';
// import Component from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {BiSearch} from 'react-icons/bi';
import {BiPlay} from 'react-icons/bi';
import {BiHeart} from 'react-icons/bi';
import {FaVimeo} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import  Modal  from "react-bootstrap/Modal";

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
{/* <iframe title="vimeo-player" src="https://player.vimeo.com/video/245287237?h=5f3fe969c8" width="640" height="360" frameborder="0" allowfullscreen></iframe> */}
const link = "https://player.vimeo.com/video/245287237"

let fullLink = link + "?h=5f3fe969c8 allowfullscreen"

const triangles = () => {
  return(
       <div id='triangles' >
        <div id='triangle-topleft' />
          <div id='triangle-bottomright' />
          </div>
  )}

  const  thumbnail = (color, series_title, video_title, icon) => {
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

  // const  

class App extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  reactModal = (fullLink) => {
    return(
      <Modal id="modal-content" class ='modal-lg' show={this.state.isOpen}>
        <Modal.Header closeButton onClick={this.closeModal}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src={fullLink} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="WBPC sponsorship"></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal} >Close</Button>
        </Modal.Footer>
      </Modal>
      )
  }


  render (){
    
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
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {this.reactModal(fullLink)}
        </div>
      <Container id ='top_text'>
        <Row id = 'title_bar'>
          <Col id = 'start_button'>
            
          <button type='button' class='btn btn-dark btn-lg' onClick={this.openModal}>
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

}
export default App;
