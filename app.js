heightInput = document.getElementById('height');
widthInput = document.getElementById('width');
vlinesInput = document.getElementById('vlines');
hlinesInput = document.getElementById('hlines');

const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";
// change any value
let width = 80;
let height = 60;
let targets = 10;


let stroke = 1;
const colorArray = ["#94c356", "#46a4cc", "#a63e4b"];






function myFunction() {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }

    let myHeight = heightInput.value
    let myWidth = widthInput.value
    let vlines = vlinesInput.value;
    let hlines = hlinesInput.value;
    document.getElementById("demo").innerHTML = "Image Size:" +  myHeight.toString() + 'x' +  myWidth.toString();
    
    gsap.set(svg, {
        attr: {
          width: myWidth,
          height: myHeight,
          viewBox: "0 0 " + myWidth + " " + myHeight
        }
      });
    
    // Horizontal left
    alpha = 1;
    for (let i = 0; i < vlines; i++) {
        let newLine = document.createElementNS(svgns, "line");
        newLine.setAttribute('x1', (myWidth*alpha).toString());
        newLine.setAttribute('x2', (myWidth*alpha).toString());
        newLine.setAttribute('y1', '0');
        newLine.setAttribute('y2', myHeight.toString());
        newLine.setAttribute('stroke', 'red');
        newLine.setAttribute('stroke-width', stroke.toString());

        svg.appendChild(newLine);
        alpha = alpha*(Math.sqrt(5)/2-1/2)
    }

    // Horizontal right
    alpha = 1;
    for (let i = 0; i < vlines; i++) {
        let newLine = document.createElementNS(svgns, "line");
        newLine.setAttribute('x1', (myWidth - myWidth*alpha).toString());
        newLine.setAttribute('x2', (myWidth - myWidth*alpha).toString());
        newLine.setAttribute('y1', '0');
        newLine.setAttribute('y2', myHeight.toString());
        newLine.setAttribute('stroke', 'black');
        newLine.setAttribute('stroke-width', stroke.toString());

        svg.appendChild(newLine);
        alpha = alpha*(Math.sqrt(5)/2-1/2)
    }

    // Vertical top
    alpha = 1;
    for (let i = 0; i < hlines; i++) {
        let newLine = document.createElementNS(svgns, "line");
        newLine.setAttribute('x1', '0');
        newLine.setAttribute('x2', myWidth.toString());
        newLine.setAttribute('y1', (myHeight*alpha).toString());
        newLine.setAttribute('y2', (myHeight*alpha).toString());
        newLine.setAttribute('stroke', 'blue');
        newLine.setAttribute('stroke-width', stroke.toString());

        svg.appendChild(newLine);
        alpha = alpha*(Math.sqrt(5)/2-1/2)
    }

    // Vertical Bottom
    alpha = 1;
    for (let i = 0; i < hlines; i++) {
        let newLine = document.createElementNS(svgns, "line");
        newLine.setAttribute('x1', '0');
        newLine.setAttribute('x2', myWidth.toString());
        newLine.setAttribute('y1', (myHeight - myHeight*alpha).toString());
        newLine.setAttribute('y2', (myHeight - myHeight*alpha).toString());
        newLine.setAttribute('stroke', 'green');
        newLine.setAttribute('stroke-width', stroke.toString());

        svg.appendChild(newLine);
        alpha = alpha*(Math.sqrt(5)/2-1/2)
    }

  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);
  
  // //add namespaces
  // if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
  //   source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  // }
  // if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
  //   source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  // }
  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
  
  //convert svg source to URI data scheme. 
  var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
  
  download(url);

  // console.log(svg.childNodes);
  // for(let i=0; i < svg.childElementCount; i++){
  //   svg.removeChild(svg.childNodes[0]);
  // }


}

function download(dataURL){
  dl = document.getElementById("link");
  dl.setAttribute("href", dataURL);
  dl.setAttribute("download", "goldenRatioGrid.svg");
  dl.innerHTML = "Download"
}
