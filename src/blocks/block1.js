// import * as loops from "blockly/blocks/loops"
import * as Blockly from "blockly/core";

import theBlocks from "./blocks.json"
// import anime from 'animejs/lib/anime.es.js';

// Blockly.Blocks["loop"] = loops.


Blockly.JavaScript['repeat_block'] = function (block) {
    // Repeat n times.
    let repeats;
    if (block.getField('TIMES')) {
        // Internal number.
        repeats = String(Number(block.getFieldValue('TIMES')));
    } else {
        // External number.
        repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    }
    let branch = Blockly.JavaScript.statementToCode(block, 'DO');
    branch = Blockly.JavaScript.addLoopTrap(branch, block);
    let code = '';
    // let loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
    //     'count', Blockly.VARIABLE_CATEGORY_NAME);
    let endVar = repeats;
    if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
        endVar = Blockly.JavaScript.variableDB_.getDistinctName(
            'repeat_end', Blockly.VARIABLE_CATEGORY_NAME);
        code += `let ${endVar} = ${repeats};\n`;
    }


    // code += `for (let ${loopVar} = 0; 
    //     ${loopVar} <  ${endVar} ;
    //     ${loopVar}++) {\n
    //     ${branch} }\n`;

    code += "<div>"
    for (let i = 0; i < endVar; i++) {
        code += branch;
    }
    code += "</div>"
    return code;
};

Blockly.Blocks["draw_shape_circle"] = {
    init: function () {
        this.jsonInit(theBlocks.draw_shape_circle);
    }
};

Blockly.JavaScript["draw_shape_circle"] = function () {
    let images = require.context("../assets/", false, /\.png$/);
    let url = images("./circle.png");
    return "<img height='50' src=" + url + ">";
};


Blockly.Blocks["repeat_block"] = {
    init: function () {
        this.jsonInit(theBlocks.controls_repeat_ext);
    }
};

// Blockly.JavaScript["repeat_block"] = function (block) {
//     console.log(block);
//     console.log(block.inputList);
//     return `<div>${block}</div>`;
// };


Blockly.Blocks["start_block"] = {
    init: function () {
        this.jsonInit(theBlocks.start_block);
    }
};

Blockly.JavaScript["start_block"] = function () {
    return "<div>";
};
