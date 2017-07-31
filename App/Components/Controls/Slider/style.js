import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
import Color from '@common/Color';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "text": {
        "fontSize": 30,
        "fontWeight": "600",
        "color": "#16a085",
        "marginTop": 20,
        "marginRight": 10,
        "marginBottom": 20,
        "marginLeft": 10,
        "textAlign": "center"
    }
});
