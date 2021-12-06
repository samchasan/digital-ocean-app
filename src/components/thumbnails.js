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

const generateThumbs = (vimeoData) => {
    console.log('in generating thumbs')
    const data = vimeoData.data
  
    for (let i = 0; i < data.length; i++) {
      let video = data[i]
      // console.log(video)
      console.log(i, video.name, video.embed, video.pictures)
  
      var node = document.createElement("li")
      // var a = document.createElement('a');
      // var div = document.createElement('div')
//
  
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
      // node.appendChild({a});
      document.getElementById("myList").appendChild(node);
    }
  }


  export default {thumbnail, generateThumbs}