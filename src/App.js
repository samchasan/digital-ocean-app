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
// import { reactModal, iframeHTML} from "./Modal.jsx"

// const modalFxns = {reactModal, iframeHTML}

// console.log('modal functions imported', modalFxns)
//
// var Vimeo = require('vimeo').Vimeo;

// const token = 'abaf7becc2c487cbad4e4227a7572111'

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
const link = "Sharks in the Sky!"

const videoTitle = 'Sharks in the Sky!'

let fullLink = link + "?h=5f3fe969c8 allowfullscreen"

const src = "https://player.vimeo.com/video/629447810?h=784c37af61 title=0 byline=0 portrait=0 speed=0 badge=0 autopause=0 player_id=0 app_id=231098"


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
    iframe: null,
    data: [],
    name: '',
    src: "https://player.vimeo.com/video/629447810?h=784c37af61 title=0 byline=0 portrait=0 speed=0 badge=0 autopause=0 player_id=0 app_id=231098"
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
    }
}

  componentDidMount(){
    this.getData()
  }

  videoThumbs(data){
    
      return (
        <div className="thumbnails">
          {data.map((video) => (
            <div className="thumbnail">{video.name}
            <img src={video.thumb.link} />
            <button onClick={() => {this.openModal(video)}} >WATCH</button>
            </div>
          ))}
        </div>
      );
  }


  setData = (vimeoData) => {
    const data = vimeoData.data
    
    const newData = []

    for (let i = 0; i < data.length; i++) {
      let video = data[i]
      let embed = video.embed.html
      if(embed){
        let source = embed.substr(13,167)
        newData.push({
          name: video.name,
          src: source,
          thumb: video.pictures.sizes[2]
        })
      }
    }
    this.setState({data: newData})
    console.log(this.state.data)
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
        this.setData(data)
      })
  }
  
  openModal = (source) => {
    console.log('iframe source', source)
    this.setState({ 
      isOpen: true, 
      name: source.name,
      src: source.src })
  };
  closeModal = () => this.setState({ isOpen: false });


  reactModal = (fullLink, videoTitle) => {
    return(
      <Modal id="modal-content" show={this.state.isOpen}>
        
        <Modal.Body>
            <iframe src={this.state.src} width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="2021 WEB Cohort Announcement"></iframe>      
        </Modal.Body>
        <Modal.Footer>
          <Row>
            </Row>
          <Col>
          <span id='video-title'>{this.state.name}</span> 
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
          onClick={this.openModal}
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
        {this.videoThumbs(this.state.data)}
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
