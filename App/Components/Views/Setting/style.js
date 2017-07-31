import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
import Color from '@common/Color';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "wrap": {
        "flex": 1
    },
    "boxSetting": {
        "flex": 3,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "alignItems": "center"
    }
});
