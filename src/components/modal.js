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

export default { openModal, closeModal, reactModal, iframeHTML}