import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
import Color from '@common/Color';
import Constants from '@common/Constants';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "shareIcon": {
        "flexDirection": "row",
        "position": "absolute",
        "right": 8,
        "bottom": 2
    },
    "newsIcons": {
        "marginLeft": 2,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 8,
        "paddingLeft": 3
    },
    "iconText": {
        "marginLeft": -6,
        "fontSize": 13,
        "fontWeight": "500"
    }
});