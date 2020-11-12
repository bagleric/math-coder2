
import * as Blockly from 'blockly/core';

import theBlocks from "./blocks.json"
// import anime from 'animejs/lib/anime.es.js';

Blockly.Blocks['draw_shape_circle'] = {
    init: function () {
        this.jsonInit(theBlocks.draw_shape_circle);
    }
};

Blockly.JavaScript['draw_shape_circle'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `console.log(${block});`;
    // console.log({ block })
    // var node = document.createElement("LI");
    // console.log({ node })
    // var textnode = document.createTextNode("Water");
    // console.log({ textnode })
    // node.appendChild(textnode);
    // document.getElementById("#code").appendChild(node);
    // anime({
    //     targets: '.circle',
    //     translateX: 250,
    //     rotate: '1turn',
    //     backgroundColor: '#FFF',
    //     duration: 800
    // });
    return code;
}