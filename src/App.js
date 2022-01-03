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

const categories = ['red', 'blue', 'gold']

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

  thumbnails = (data) => {

    console.log('reading data', data)

    return(
      <div className = {data[0].tag} >
        {data.map((video) => (
          <div className="thumbnail">
            <button onClick={() => {this.openModal(video)}} >
              {/* {video.name} */}
              <img id='thumbnail_image' src={video.thumb.link} />
            </button>
          </div>
        ))}
    </div>
    )
  }

  generateThumbnails(tag){

    // console.log('data', this.state, 'tag', tag)

const dataLength = Object.keys(this.state.data).length


console.log('data length', dataLength)

    if(dataLength > 0){

    let redData = this.state.data.red
    let blueData = this.state.data.blue
    let goldData = this.state.data.gold

    console.log('making thumbs')


    switch (tag) {
      case "red":
       return (this.thumbnails(redData))
      break;

      case "blue":
       return (this.thumbnails(blueData))
      break;
      
        case "gold":
        return (this.thumbnails(goldData))
      break;
    }
  }
  }

  setData = (vimeoData) => {
    const data = vimeoData.data
    
    let redData = []
    let blueData = []
    let goldData = []
    let nullData = []


    
    const genArray = (array, source, video) => {
      array.push({
        name: video.name,
        src: source,
        thumb: video.pictures.sizes[2],
        tag: video.tags[0].tag
      })
    }

    for (let i = 0; i < data.length; i++) {
      let video = data[i]
      let embed = video.embed.html

      // console.log('video', video)

      if(embed){
        let source = embed.substr(13,167)

        // console.log('video tags', video.tags[0])

        if(video.tags.length > 0 ){
          switch (video.tags[0].tag) {
            case "red":
              genArray(redData, source, video)
              break;
            case "blue":
              genArray(blueData, source, video)
              break;
            case "gold":
              genArray(goldData, source, video)
              break;
            case null:
              genArray(nullData, source, video)
          }        
      }
      
      }
    }

    this.setState({data: {red: redData, blue: blueData, gold: goldData}})
    console.log(this.state.data)
    
  }

  getData=()=>{
    fetch('/InHouseInsights.json'
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
        // console.log('generatingthumbs', data)
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


  reactModal = ( ) => {
    // const setShow = this.(false);

    const handleClose = () => this.setState({isOpen: false});


    return(
      <Modal id="modal-content" 
        show={this.state.isOpen}
        onHide={handleClose}
          >
        <Modal.Body>
            <iframe src={this.state.src} 
              frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>      
        </Modal.Body>
       
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
        {this.reactModal()}
        </div>
      <Container id ='top_text'>
        <Row id = 'title_bar'>
          <Col id = 'start_button'>
          <button type='button' class='btn btn-dark btn-lg' 
          onClick={this.openModal}
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

          {/* 
          
          fx returns 
          
          videoList(categories)

          videoList = (categories) => {
            categories.forEach((category) = > {
              
              let screenWidth = screen.width;

              if(screenWidth < 576)

              {
                generateAccordions(category)! 
              }
              else {
                  this.generateThumbnails(category) 
              }

            })

          }
          
          */}

          <Col  sm={4} lg={true}>
            {this.generateThumbnails('red')}
          </Col >
          <Col  sm={4} lg={true}>
            {this.generateThumbnails('blue')}
          </Col>
          <Col  sm={4} lg={true}>
            {this.generateThumbnails('gold')}
           </Col>
        </Row>
        <Row>
      
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
