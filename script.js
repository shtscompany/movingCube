// Getting 'Info' div in js hands
const square = document.getElementById('box');
const info = document.getElementById('info');
const vertLine = document.getElementById('vl');
const horizLine = document.getElementById('hl');
const horizCoor = document.getElementById('hlcor');
const vertCoor = document.getElementById('vlcor');

// declare Variables
let squaereWidth=200;
let infoWidth=70;


// Creating function that will tell the position of cursor
function tellPos(p){
// square skiwing
  square.style.width = squaereWidth + 'px';
  square.style.height = squaereWidth + 'px';
  
//   moving square
  square.style.left = p.pageX - squaereWidth/2+'px';
  square.style.top = p.pageY - squaereWidth/2+'px';
  
//   info box 
  info.innerHTML = ' ' + p.pageX + ' * ' + p.pageY;
  info.style.marginTop = squaereWidth + 'px';
  info.style.marginLeft = squaereWidth/2-infoWidth/2 + 'px';
  
//   Verticla line
  vertLine.style.left = p.pageX +'px';
  vertLine.style.height = p.pageY +'px';
  
// horizontal line
  horizLine.style.top = p.pageY +'px';
  horizLine.style.width = p.pageX +'px';
  
//   add coordinates to divs
  horizCoor.innerHTML=p.pageX;
  vertCoor.innerHTML=p.pageY;
  
//   horizontal line coordinates
  horizCoor.style.marginTop = p.pageY-30 + 'px';
  horizCoor.style.marginLeft = p.pageX-squaereWidth/2-50+'px';
  
  
 //   Vertical line coordinates
  vertCoor.style.marginLeft = p.pageX+20+'px';
  vertCoor.style.marginTop =p.pageY-squaereWidth/2-30+'px';
}


addEventListener('mousemove', tellPos, false);

