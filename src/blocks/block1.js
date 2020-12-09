
import * as Blockly from "blockly/core";

import theBlocks from "./blocks.json"
// import anime from 'animejs/lib/anime.es.js';

Blockly.Blocks["draw_shape_circle"] = {
    init: function () {
        this.jsonInit(theBlocks.draw_shape_circle);
    }
};

Blockly.JavaScript["draw_shape_circle"] = function () {
    var images = require.context("../assets/", false, /\.png$/);
    var url = images("./circle.png");
    return "<img src="+url+">";
};
