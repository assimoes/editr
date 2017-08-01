import Editr from './app/Editr'
import Plugr from './app/plugins/Plugr'
import Snap from 'snapsvg-cjs'
const editor = new Editr();


var paper = Snap('#svg');

var xDist = 30;
var yDist = 30;



for (var i = 0; i < 800/xDist; i++) {
    var line = paper.line(i * xDist, 0, i * xDist, 600);
    line.attr('stroke', 'white');
    line.attr('stroke-width', '1px');
    line.attr('stroke-opacity', '0.1');
}
for (var i = 0; i < 600/xDist; i++) {
    var line = paper.line(0, i* yDist, 800, i * yDist);
    line.attr('stroke', 'white');
    line.attr('stroke-width', '1px');
    line.attr('stroke-opacity', '0.1');
}

xDist = xDist/2;
yDist = yDist/2;

for (var i = 0; i < 800/xDist; i++) {
    var line = paper.line(i * xDist, 0, i * xDist, 600);
    line.attr('stroke', 'white');
    line.attr('stroke-width', '1px');
    line.attr('stroke-opacity', '0.1');
    line.attr('stroke-dasharray','5, 5');
}
for (var i = 0; i < 600/xDist; i++) {
    var line = paper.line(0, i* yDist, 800, i * yDist);
    line.attr('stroke', 'white');
    line.attr('stroke-width', '1px');
    line.attr('stroke-opacity', '0.1');
}

console.log(paper);

// var elem = document.getElementById('path1');
// var root = document.getElementById('root');
// var transformList = elem.transform.baseVal;
// var svgRoot = elem.parentNode;

// var translate = svgRoot.createSVGTransform();
// translate.setTranslate(50,5);

// var rotate = svgRoot.createSVGTransform();

// var coords = elem.getBBox();
// var x = coords.x + (coords.width/2);
// var y = coords.y + (coords.height/2);

// rotate.setRotate(60,x,y);

// transformList.appendItem(translate);
// transformList.appendItem(rotate);
// console.log(transformList)