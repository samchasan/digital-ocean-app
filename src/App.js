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

var Vimeo = require('vimeo').Vimeo;

const token = 'abaf7becc2c487cbad4e4227a7572111'

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

const videoTitle = 'Sharks in the Sky!'

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

  // const [data,setData]=useState([]);

class App extends Component {
  state = {
    isOpen: false,
    iframe: null
  };

  iframeHTML = (html) => {
    if(html){
      console.log('printing html', html)
      var modal = document.getElementsByClassName('modal-body')
      console.log(modal)
      function createMarkup() {
        return {__html: html};
      }
      return <iframe dangerouslySetInnerHTML={createMarkup()} />;

      // return(
      //   html
      //   )
    }
}

  componentDidMount(){
    this.getData()
  }

  generateThumbs = (vimeoData) => {
    console.log('in generating thumbs')
    const data = vimeoData.data
  
    for (let i = 0; i < data.length; i++) {
      let video = data[i]
      // console.log(video)
      console.log(i, video.name, video.embed, video.pictures)
  
      var node = document.createElement("li")
      // var a = document.createElement('a');
      const a = () => {
        return(
          <a onclick = {console.log('hello')}>
            {video.name}
            <img src={video.pictures.sizes[1].link}/>
          </a>
        )
      }
      // var linkText = document.createTextNode(video.name);
      // a.appendChild(linkText);
      // a.title = linkText;
      // a.onclick = this.openModal(video.embed.html)
      // a.onclick = console.log('hello')
      
      // var img = new Image()
      // img.src = video.pictures.sizes[1].link
      
      // on hover show ---> link_with_play_button
      // on click bring up modal with ---> embed.html
  
      // a.appendChild(img)
      node.appendChild({a});
      document.getElementById("myList").appendChild(node);
    }
  }

  getData=()=>{
    fetch('./DWTvimeodata.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then((data) => {
        console.log('generatingthumbs', data)
        this.generateThumbs(data)
      })
  }
  
  openModal = (iframe) => this.setState({ isOpen: true, iframe: this.iframeHTML(iframe) });
  closeModal = () => this.setState({ isOpen: false });

  reactModal = (videoTitle) => {
    return(
      <Modal id="modal-content" show={this.state.isOpen}>
        {/* <Modal.Header closeButton onClick={this.closeModal}> */}
          {/* <Modal.Title>{videoTitle}</Modal.Title> */}
        {/* </Modal.Header> */}
        <Modal.Body>
         
          {/* {this.state.iframe} */}
          {/* <iframe src="https://player.vimeo.com/video/267859540?h=f1c560223c&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=231098" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Dana Kanze - WEB 2018"></iframe> */}
          {/* <iframe src={fullLink} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="WBPC sponsorship"></iframe> */}
        </Modal.Body>
        <Modal.Footer>
          <Row>
            </Row>
          <Col>
          <span id='video-title'>{videoTitle}</span> 
          </Col>
        <Col xs = {2}></Col>
        <Col>
          <Button id='close-button' variant="secondary" onClick={this.closeModal} >Close</Button>
        </Col>
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
      <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {this.reactModal(fullLink, videoTitle)}
        </div>
      <Container id ='top_text'>
        <Row id = 'title_bar'>
          <Col id = 'start_button'>
            {/* <a href = {url} >  */}
          <button type='button' class='btn btn-dark btn-lg' 
          // onClick={this.openModal}
          // onClick = {getVimeoData}
          >
            < BiPlay />
            <b> play </b>
          </button>
          {/* </a> */}

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
        <Row>
          {/* {generateThumbs()} */}
          <ul id='myList'>
            <li>
              Imported videos
            </li>
          </ul>
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
