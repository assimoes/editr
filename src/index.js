import Editr from './app/Editr'
import Plugr from './app/plugins/Plugr'

const editor = new Editr();

editor.Use(new Plugr());
var elem = document.getElementById('path1');
var root = document.getElementById('root');
var transformList = elem.transform.baseVal;
var svgRoot = elem.parentNode;

var translate = svgRoot.createSVGTransform();
translate.setTranslate(50,5);

var rotate = svgRoot.createSVGTransform();

var coords = elem.getBBox();
var x = coords.x + (coords.width/2);
var y = coords.y + (coords.height/2);

rotate.setRotate(60,x,y);

transformList.appendItem(translate);
transformList.appendItem(rotate);
console.log(transformList)