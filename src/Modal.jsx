import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// openModal = (iframe) => this.setState({ isOpen: true, iframe: this.iframeHTML(iframe) });
// closeModal = () => this.setState({ isOpen: false });

 export const reactModal = (videoTitle) => {
  return(
    <Modal id="modal-content" show={this.state.isOpen}>
      {/* <Modal.Header closeButton onClick={this.closeModal}> */}
        {/* <Modal.Title>{videoTitle}</Modal.Title> */}
      {/* </Modal.Header> */}
      <Modal.Body>
       
        {/* {this.state.iframe} */}
        <iframe src="https://player.vimeo.com/video/629447810?h=784c37af61&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=231098" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="2021 WEB Cohort Announcement"></iframe>      
        {/* <iframe src={fullLink} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="WBPC sponsorship"></iframe>*/}
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

 export const iframeHTML = (html) => {
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

// export {iframeHTML, reactModal}