var _0xa972=['compassPositionMarks','mapMark','compassPositionMarks2','compassPositionNumbersReloader','compassReload','compassPositionMarksReloader','reloadMark','compassPositionMarksReloader2','showMarkPosition','angle','toFixed','showMouseStyle','black','mouseInRange','mouseAngleStyle','angleCenter','checkMouseRange','floor','mainDistanceCircles','style','fixed','length','option','name','value','defAngle','compassCenter','reloadCenter','°\x20(\x20','abs','changed','images/zemelapis.jpg','width','height','showTargetInfo','USA-1','GER-1','GER-3','cord','position','focus','def_direction','direction','sector_range','max_range','mouseAngle','mouseInZone','mark','drawSelectedPosition','prototype','angleBetweenPosition_Focus','zoneLines','compassLines','lineAngle','compassPositionNumbers','compassNumber'];(function(_0x567383,_0x254dc2){var _0x4c0ad0=function(_0x7f27f7){while(--_0x7f27f7){_0x567383['push'](_0x567383['shift']());}};_0x4c0ad0(++_0x254dc2);}(_0xa972,0x103));var _0x4f60=function(_0x4a8b5d,_0x41e191){_0x4a8b5d=_0x4a8b5d-0x0;var _0x4815c0=_0xa972[_0x4a8b5d];return _0x4815c0;};var img,moveX,moveY,arty,startPos=[{'name':_0x4f60('0x0'),'x':0x612,'y':0xf9c,'defAngle':-0x55,'lineAngle':-0xb4,'compassNumber':-0xc2,'compassReload':-0x93,'mapMark':-0x9f,'reloadMark':-0x9d,'compassCenter':0x13,'reloadCenter':0x14c},{'name':'USA-2','x':0x625,'y':0xfa6,'defAngle':-0x55,'lineAngle':-0xb4,'compassNumber':-0xc2,'compassReload':-0x93,'mapMark':-0x9f,'reloadMark':-0x9d,'compassCenter':0x13,'reloadCenter':0x14c},{'name':'USA-3','x':0x635,'y':0xfab,'defAngle':-0x66,'lineAngle':-0xb4,'compassNumber':-0xc2,'compassReload':-0x93,'mapMark':-0x9f,'reloadMark':-0x9d,'compassCenter':0x2,'reloadCenter':0x13b},{'name':_0x4f60('0x1'),'x':0x573,'y':0xaf,'defAngle':0x5a,'lineAngle':0x0,'compassNumber':-0xc2,'compassReload':-0x92,'mapMark':-0x9f,'reloadMark':-0x9c,'compassCenter':0xc2,'reloadCenter':0x92},{'name':'GER-2','x':0x58b,'y':0xb1,'defAngle':0x4b,'lineAngle':0x0,'compassNumber':-0xc2,'compassReload':-0x93,'mapMark':-0x9f,'reloadMark':-0x9d,'compassCenter':0xb3,'reloadCenter':0x84},{'name':_0x4f60('0x2'),'x':0x5a7,'y':0xb1,'defAngle':0x4b,'lineAngle':0x0,'compassNumber':-0xc2,'compassReload':-0x93,'mapMark':-0x9f,'reloadMark':-0x9d,'compassCenter':0xb3,'reloadCenter':0x84}],artyAngle=[0x0,-0x4b,-0x3c,-0x2d,-0x1e,-0xf,0xf,0x1e,0x2d,0x3c,0x4b],selectArty,rotateArty,Artillery=function(_0x313905,_0x117d6d,_0x57af94,_0x2ca8f2,_0x1cea35,_0x16a54d,_0x9b2deb,_0xfedf08,_0x4826c6,_0x551672,_0x40aae5){this[_0x4f60('0x3')]={'x':_0x313905,'y':_0x117d6d,'direction':parseInt(_0x57af94),'defAngle':parseInt(_0x2ca8f2),'lineAngle':parseInt(_0x1cea35),'compassNumber':parseInt(_0x16a54d),'compassReload':parseInt(_0x9b2deb),'mapMark':parseInt(_0xfedf08),'reloadMark':parseInt(_0x4826c6),'compassCenter':parseInt(_0x551672),'reloadCenter':parseInt(_0x40aae5)};this[_0x4f60('0x4')];this[_0x4f60('0x5')];this[_0x4f60('0x6')]=this[_0x4f60('0x3')]['defAngle']+parseInt(this['cord'][_0x4f60('0x7')]);this[_0x4f60('0x8')]=0x256;this[_0x4f60('0x9')]=0x1900;this[_0x4f60('0xa')];this[_0x4f60('0xb')]=this['mouseInRange']=!0x1;this[_0x4f60('0xc')]={'x':null,'y':null,'angle':null,'angleCenter':null};};Artillery['prototype'][_0x4f60('0xd')]=function(){push();noStroke();fill(0xff,0x0,0xff);translate(this[_0x4f60('0x4')]['x'],this[_0x4f60('0x4')]['y']);circle(0x0,0x0,0x10,0x10);pop();};Artillery[_0x4f60('0xe')][_0x4f60('0xf')]=function(){var _0xcf01aa=createVector();push();translate(this['position']['x'],this['position']['y']);_0xcf01aa['x']=this['focus']['x']-this[_0x4f60('0x4')]['x'];_0xcf01aa['y']=this[_0x4f60('0x5')]['y']-this[_0x4f60('0x4')]['y'];this[_0x4f60('0xa')]=atan2(_0xcf01aa['y'],_0xcf01aa['x'])-(0x4b+this[_0x4f60('0x6')]-0x3c);pop();};Artillery[_0x4f60('0xe')][_0x4f60('0x10')]=function(){push();noStroke();translate(this[_0x4f60('0x4')]['x'],this[_0x4f60('0x4')]['y']);rotate(this[_0x4f60('0x6')]-0x3c);for(var _0xb94c95=0x1;_0xb94c95<this['max_range']/0x2/0x64;_0xb94c95++)stroke(0xff,0x64),0x1===_0xb94c95&&stroke(0x0,0x0,0xff),0x10===_0xb94c95&&stroke(0xff,0x0,0xff),0x1f===_0xb94c95&&stroke(0xff,0x0,0x0),rect(0x0,0x0,0x0,this[_0x4f60('0x9')]/0x2),rotate(-0x1);pop();};Artillery[_0x4f60('0xe')][_0x4f60('0x11')]=function(_0x46002b){push();translate(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y']);rotate(this[_0x4f60('0x3')][_0x4f60('0x12')]);for(var _0x524ef0=0x0;_0x524ef0<_0x46002b;_0x524ef0++)stroke(0xff,0x32),rotate(0xf),line(0x0,0x0,arty['max_range']/0x2,0x0);pop();};Artillery[_0x4f60('0xe')][_0x4f60('0x13')]=function(_0x26a767){push();noStroke();translate(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y']);textSize(0xe);rotate(this[_0x4f60('0x3')][_0x4f60('0x14')]);for(var _0x3adcf8=0x1;0x6>_0x3adcf8;_0x3adcf8++)for(var _0x1c6d53=0x0;_0x1c6d53<_0x26a767;_0x1c6d53++)fill(0xff,0xff,0x0,0xff),rotate(0xf),text('|'+0xf*_0x1c6d53,-0x2,this[_0x4f60('0x8')]*_0x3adcf8);pop();};Artillery[_0x4f60('0xe')][_0x4f60('0x15')]=function(_0x583dcb){push();noStroke();translate(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y']);textSize(0xe);rotate(this[_0x4f60('0x3')][_0x4f60('0x16')]);for(var _0x112659=0x1;0x6>_0x112659;_0x112659++)for(var _0x33b313=0x0;_0x33b313<_0x583dcb;_0x33b313++)fill(0xff),rotate(0xf),text('|',-0x2,this[_0x4f60('0x8')]*_0x112659);pop();};Artillery['prototype'][_0x4f60('0x17')]=function(_0x3f3ce0){push();noStroke();translate(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y']);textSize(0xe);rotate(this[_0x4f60('0x3')][_0x4f60('0x16')]+0x5);for(var _0xc499c2=0x1;0x6>_0xc499c2;_0xc499c2++)for(var _0x52f786=0x0;_0x52f786<_0x3f3ce0;_0x52f786++)fill(0xff),rotate(0xf),text('|',-0x2,this[_0x4f60('0x8')]*_0xc499c2);pop();};Artillery['prototype'][_0x4f60('0x18')]=function(_0x5e8038){push();noStroke();translate(this[_0x4f60('0x3')]['x'],this['cord']['y']);textSize(0xe);rotate(this[_0x4f60('0x3')][_0x4f60('0x19')]);for(var _0x4555db=0x1;0x6>_0x4555db;_0x4555db++)for(var _0x2bb29d=0x0;_0x2bb29d<_0x5e8038;_0x2bb29d++)fill(0x0,0xff,0x0),rotate(0xf),text('|'+0xf*_0x2bb29d,-0x2,this['sector_range']*_0x4555db+0xf);pop();};Artillery[_0x4f60('0xe')][_0x4f60('0x1a')]=function(_0x3a8330){push();noStroke();translate(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y']);textSize(0xe);rotate(this[_0x4f60('0x3')][_0x4f60('0x1b')]);for(var _0x13df0e=0x1;0x6>_0x13df0e;_0x13df0e++)for(var _0xd84832=0x0;_0xd84832<_0x3a8330;_0xd84832++)fill(0x0,0xff,0x0),rotate(0xf),text('|',-0x2,this['sector_range']*_0x13df0e+0xf);pop();};Artillery['prototype'][_0x4f60('0x1c')]=function(_0x377e8d){push();noStroke();translate(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y']);textSize(0xe);rotate(this['cord'][_0x4f60('0x1b')]+0x5);for(var _0x553336=0x1;0x6>_0x553336;_0x553336++)for(var _0x69ca51=0x0;_0x69ca51<_0x377e8d;_0x69ca51++)fill(0x0,0xff,0x0),rotate(0xf),text('|',-0x2,this[_0x4f60('0x8')]*_0x553336+0xf);pop();};Artillery[_0x4f60('0xe')][_0x4f60('0x1d')]=function(_0x3df6b9,_0xbd53ef){push();stroke(0xff);null!==this[_0x4f60('0xc')][_0x4f60('0x1e')]&&(0x0<this[_0x4f60('0xc')][_0x4f60('0x1e')][_0x4f60('0x1f')](0x1)?fill(0x0,0x0,0xc8,0x64):fill(0xff,0x0,0x0,0x64));circle(this[_0x4f60('0xc')]['x'],this[_0x4f60('0xc')]['y'],_0x3df6b9);pop();};Artillery['prototype'][_0x4f60('0x20')]=function(){push();strokeWeight(0x2);fill(_0x4f60('0x21'));stroke(_0x4f60('0x21'));if(this[_0x4f60('0x22')])if(stroke(0xff),this[_0x4f60('0xb')])if(0x0<this[_0x4f60('0xa')][_0x4f60('0x1f')](0x1))fill(0x0,0x0,0xff);else{var _0x52b509=0x168+this[_0x4f60('0xa')];0x0>this['mouseAngle']&&(-0xf<=_0x52b509&&0xf>=_0x52b509?0x0>_0x52b509?fill(0xff,0x0,0x0):fill(0x0,0x0,0xff):fill(0xff,0x0,0x0));}else fill(_0x4f60('0x21')),stroke('black');line(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y'],this['focus']['x'],this['focus']['y']);circle(this[_0x4f60('0x5')]['x'],this[_0x4f60('0x5')]['y'],0x8,0x8);pop();};Artillery[_0x4f60('0xe')][_0x4f60('0x23')]=function(){push();noStroke();fill(0xff);textSize(0x12);translate(this[_0x4f60('0x5')]['x'],this[_0x4f60('0x5')]['y']);if(this[_0x4f60('0x22')]&&this[_0x4f60('0xb')]){if(-0xf<=this[_0x4f60('0xa')]&&0xf>=this[_0x4f60('0xa')])this[_0x4f60('0xb')]=!0x0;else{var _0x3edffe=0x168+this[_0x4f60('0xa')];this[_0x4f60('0xb')]=0x0>this[_0x4f60('0xa')]?-0xf<=_0x3edffe&&0xf>=_0x3edffe?!0x0:!0x1:!0x1;}-0xf>this[_0x4f60('0xa')]&&-0x159>this[_0x4f60('0xa')]?text((0x168+this[_0x4f60('0xa')])[_0x4f60('0x1f')](0x1)+'°',0x11,0x5):text(this[_0x4f60('0xa')][_0x4f60('0x1f')](0x1)+'°',0x11,0x5);fill(0xff,0xff,0x0);textSize(0xc);0x0>this[_0x4f60('0xc')][_0x4f60('0x24')]?text(''+(0x168+parseInt(this[_0x4f60('0xa')])+this[_0x4f60('0x3')]['direction']),0x11,0x12):(_0x3edffe=this[_0x4f60('0x3')]['compassCenter']+this[_0x4f60('0xa')]+this[_0x4f60('0x3')][_0x4f60('0x7')],0x0>_0x3edffe?text(''+(0x168+_0x3edffe)[_0x4f60('0x1f')](0x0),0x11,0x12):text(''+_0x3edffe[_0x4f60('0x1f')](0x0),0x11,0x12));}pop();};Artillery[_0x4f60('0xe')][_0x4f60('0x25')]=function(){var _0x21a4e6=int(dist(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y'],this['focus']['x'],this[_0x4f60('0x5')]['y']));_0x21a4e6=Math['floor'](_0x21a4e6/0x2);this[_0x4f60('0x22')]=0x64<=_0x21a4e6&&0x640>=_0x21a4e6?!0x0:!0x1;-0xf<=this[_0x4f60('0xa')]&&0xf>=this[_0x4f60('0xa')]?this['mouseInZone']=!0x0:(_0x21a4e6=0x168+this[_0x4f60('0xa')],this['mouseInZone']=0x0>this['mouseAngle']?-0xf<=_0x21a4e6&&0xf>=_0x21a4e6?!0x0:!0x1:!0x1);};Artillery[_0x4f60('0xe')]['showTargetInfo']=function(){push();noStroke();var _0x46963f=int(dist(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y'],this[_0x4f60('0xc')]['x'],this[_0x4f60('0xc')]['y']));translate(this[_0x4f60('0xc')]['x'],this['mark']['y']);_0x46963f=Math['floor'](_0x46963f/0x2);if(0x64<=_0x46963f&&0x640>=_0x46963f&&null!==this[_0x4f60('0xc')][_0x4f60('0x1e')]){textSize(0x12);fill(0xff);var _0x57dbf0=0x3d2-(0x18*_0x46963f/0x64-0x18);_0x46963f=0x0;0x3a2>_0x57dbf0&&(_0x46963f=0x1);0x35a>_0x57dbf0&&(_0x46963f=0x2);0x2e4>_0x57dbf0&&(_0x46963f=0x3);0x29d>_0x57dbf0&&(_0x46963f=0x4);text(''+Math[_0x4f60('0x26')](_0x57dbf0+_0x46963f),-0x30,0x5);textSize(0xc);fill(0x0);textSize(0x12);null!==this[_0x4f60('0xc')][_0x4f60('0x1e')]&&void 0x0!==this[_0x4f60('0xc')][_0x4f60('0x1e')]&&(fill(0xff),text(this['mark'][_0x4f60('0x1e')][_0x4f60('0x1f')](0x1)+'°',0x11,0x5),fill(0xff,0xff,0x0),textSize(0xc),0x0>this[_0x4f60('0xc')][_0x4f60('0x24')]?text(''+(0x168+parseInt(this[_0x4f60('0xc')][_0x4f60('0x24')])+this[_0x4f60('0x3')]['direction']),0x11,0x12):(_0x46963f=parseInt(this[_0x4f60('0xc')]['angleCenter'])+this[_0x4f60('0x3')]['direction'],0x0>_0x46963f?text(''+(0x168+_0x46963f)[_0x4f60('0x1f')](0x0),0x11,0x12):text(''+_0x46963f['toFixed'](0x0),0x11,0x12)));}pop();};Artillery['prototype'][_0x4f60('0x27')]=function(){for(var _0x15389f=this[_0x4f60('0x9')]/(this[_0x4f60('0x9')]/0x2/0x64),_0x33ede1=this['sector_range'],_0x37dc16=0x0;_0x37dc16<this[_0x4f60('0x9')]/0x2/0x64;_0x37dc16++){0x0==_0x37dc16%0x2?(stroke(0xff,0x96),fill(0xff,0xcc,0x0,0x5)):stroke(0xff,0xcc,0x0);arc(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y'],this[_0x4f60('0x9')]-_0x37dc16*_0x15389f,this[_0x4f60('0x9')]-_0x37dc16*_0x15389f,this[_0x4f60('0x6')],this['def_direction']+0x1e);push();translate(this[_0x4f60('0x3')]['x'],this[_0x4f60('0x3')]['y']);rotate(this[_0x4f60('0x6')]-0x3c);for(var _0x278298=0x0;0x1>_0x278298;_0x278298++)textAlign(LEFT),noStroke(),fill(0xff),textSize(0x12),0x0!=_0x37dc16%0x2||0x3d2===_0x33ede1||(_0x33ede1+=0x18,0x2b6!==_0x33ede1&&0x2fd!==_0x33ede1&&0x35c!==_0x33ede1&&0x3a3!==_0x33ede1||--_0x33ede1);pop();}};function buildArtillery(){selectArty=createSelect();selectArty[_0x4f60('0x4')](0xfa,0x14);selectArty[_0x4f60('0x28')](_0x4f60('0x4'),_0x4f60('0x29'));for(var _0x388225=0x0;_0x388225<startPos[_0x4f60('0x2a')];_0x388225++)selectArty[_0x4f60('0x2b')](''+startPos[_0x388225][_0x4f60('0x2c')],''+_0x388225);selectArty['changed'](setPosArtillery);}function setPosArtillery(){var _0x322df6=selectArty[_0x4f60('0x2d')]();arty=new Artillery(startPos[_0x322df6]['x'],startPos[_0x322df6]['y'],0x0,startPos[_0x322df6][_0x4f60('0x2e')],startPos[_0x322df6]['lineAngle'],startPos[_0x322df6][_0x4f60('0x14')],startPos[_0x322df6][_0x4f60('0x19')],startPos[_0x322df6][_0x4f60('0x16')],startPos[_0x322df6][_0x4f60('0x1b')],startPos[_0x322df6][_0x4f60('0x2f')],startPos[_0x322df6][_0x4f60('0x30')]);rotateArtillery();}function rotateArtillery(){rotateArty=createSelect();rotateArty[_0x4f60('0x4')](0x140,0x14);rotateArty[_0x4f60('0x28')](_0x4f60('0x4'),_0x4f60('0x29'));for(var _0x22fffb=0x0;_0x22fffb<artyAngle[_0x4f60('0x2a')];_0x22fffb++){var _0x29a15f=artyAngle[_0x22fffb]+arty[_0x4f60('0x3')][_0x4f60('0x30')];rotateArty[_0x4f60('0x2b')](artyAngle[_0x22fffb]+_0x4f60('0x31')+(0x0>_0x29a15f?Math[_0x4f60('0x32')](0x168+artyAngle[_0x22fffb]+arty[_0x4f60('0x3')][_0x4f60('0x30')]):0x168<_0x29a15f?artyAngle[_0x22fffb]+arty[_0x4f60('0x3')][_0x4f60('0x30')]-0x168:Math[_0x4f60('0x32')](artyAngle[_0x22fffb]+arty[_0x4f60('0x3')][_0x4f60('0x30')]))+'\x20)\x20,\x200°\x20(\x20'+(0x0>artyAngle[_0x22fffb]+arty[_0x4f60('0x3')]['compassCenter']?artyAngle[_0x22fffb]+arty[_0x4f60('0x3')]['compassCenter']+0x168:artyAngle[_0x22fffb]+arty[_0x4f60('0x3')]['compassCenter'])+'\x20)',''+artyAngle[_0x22fffb]);}rotateArty[_0x4f60('0x33')](setAngleArtillery);}function setAngleArtillery(){var _0x256bc1=selectArty['value'](),_0x411679=rotateArty['value']();arty=new Artillery(startPos[_0x256bc1]['x'],startPos[_0x256bc1]['y'],_0x411679,startPos[_0x256bc1][_0x4f60('0x2e')],startPos[_0x256bc1][_0x4f60('0x12')],startPos[_0x256bc1][_0x4f60('0x14')],startPos[_0x256bc1]['compassReload'],startPos[_0x256bc1][_0x4f60('0x16')],startPos[_0x256bc1][_0x4f60('0x1b')],startPos[_0x256bc1][_0x4f60('0x2f')],startPos[_0x256bc1][_0x4f60('0x30')]);}function preload(){img=loadImage(_0x4f60('0x34'));}function setup(){createCanvas(img[_0x4f60('0x35')],img[_0x4f60('0x36')]);angleMode(DEGREES);noCursor();arty=new Artillery(0x612,0xf9c,0x0,-0x55,-0xb4,-0xc2,-0x93,-0x9f,-0x9d,0x13,0x14c);buildArtillery();rotateArtillery();}function draw(){image(img,0x0,0x0);arty[_0x4f60('0x5')]=createVector(mouseX,mouseY);arty[_0x4f60('0x4')]=createVector(arty[_0x4f60('0x3')]['x'],arty[_0x4f60('0x3')]['y']);arty[_0x4f60('0xd')]();arty[_0x4f60('0x27')]();arty[_0x4f60('0x11')](0xb);arty['zoneLines']();arty[_0x4f60('0x13')](0x18);arty[_0x4f60('0x18')](0x18);arty['compassPositionMarks'](0x18);arty[_0x4f60('0x17')](0x18);arty[_0x4f60('0x1a')](0x18);arty[_0x4f60('0x1c')](0x18);arty[_0x4f60('0x1d')](0x1e,0x64);arty[_0x4f60('0x25')]();arty['showMouseStyle']();arty[_0x4f60('0x23')]();arty[_0x4f60('0x37')]();arty[_0x4f60('0xf')]();}function mouseMoved(){moveX=mouseX;moveY=mouseY;}function mouseDragged(){arty[_0x4f60('0xc')][_0x4f60('0x1e')]=null;arty[_0x4f60('0xc')][_0x4f60('0x24')]=null;arty['mark']['x']=mouseX;arty[_0x4f60('0xc')]['y']=mouseY;}function mouseReleased(){arty['mark']['x']=mouseX;arty[_0x4f60('0xc')]['y']=mouseY;arty['mouseInRange']?arty[_0x4f60('0xb')]?(arty[_0x4f60('0xc')][_0x4f60('0x1e')]=-0xf>=arty['mouseAngle']&&-0x159>=arty[_0x4f60('0xa')]?0x168+arty['mouseAngle']:arty[_0x4f60('0xa')],arty[_0x4f60('0xc')]['angleCenter']=(arty[_0x4f60('0x3')]['compassCenter']+arty[_0x4f60('0xc')][_0x4f60('0x1e')])[_0x4f60('0x1f')](0x0)):(arty[_0x4f60('0xc')][_0x4f60('0x1e')]=null,arty[_0x4f60('0xc')][_0x4f60('0x24')]=null):(arty[_0x4f60('0xc')][_0x4f60('0x1e')]=null,arty[_0x4f60('0xc')][_0x4f60('0x24')]=null);};