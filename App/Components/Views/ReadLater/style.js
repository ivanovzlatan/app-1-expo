import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
import Color from '@common/Color';
import Constants from '@common/Constants';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "hlist": {
        "flex": 1
    },
    "body": {
        "backgroundColor": Color.main,
        "height": height,
    },
    "panel": {
        "backgroundColor": "#fff",
        "borderColor": "#eee",
        "borderBottomWidth": 1,
        "flexDirection": Constants.RTL ? 'row-reverse' : 'row'
    },
    "title": {
        "width": vw * 70,
        "paddingRight": 15
    },
    "image": {
        "marginTop": 12,
        "marginLeft": 8,
        "marginRight": 8,
        "marginBottom": 8,
        "alignItems": "center",
        "justifyContent": "center",
        "position": "relative",
        "width": vw * 30,
        "height": vw * 30 - 20,
        "borderRadius": 2
    },
    "shareIcon": {
        "flexDirection": "row-reverse",
        "position": "absolute",
        "left": 8,
        "bottom": 2
    },
    "name": {
        "fontSize": 18,
        "marginLeft": 8,
        "marginTop": 12,
        "marginRight": 15,
        "color": "#2c3e50",
        "fontWeight": "400"
    },
    "time": {
        "marginLeft": 8,
        "marginRight": 8,
        "color": "#999",
        "fontSize": 11,
        "marginBottom": 10,
        "marginTop": 6,
        "backgroundColor": "transparent"
    },
    "topBar": {
        "width": width,
        "height": 35,
        "backgroundColor": "#16a085",
        "flexDirection": Constants.RTL ? 'row-reverse' : 'row',
        "justifyContent": "flex-end",
        "alignItems": "center",
        "paddingRight": 22
    },
    "descriptionList": {
        "fontSize": 12,
        "marginLeft": 4,
        "marginTop": 4,
        "marginRight": 8,
        "color": "#b3bbc9",
        "fontWeight": "300"
    },
    "toolbarMenu": {
        "height": 50,
        "width": width,
        "backgroundColor": Color.toolbar,
        "flexDirection": "row",
        "justifyContent": "space-between",
        "paddingLeft": 15,
        "paddingTop": 13,
        "paddingRight": 15,
        "position": "relative",
        "transform": [{scaleX: Constants.RTL ? -1 : 1 }]
    },
    "clearText": {
        "marginRight": 12,
        "color": "#ffffff"
    },
    "prochetena": {
      "fontSize": 14,
      "marginLeft": 8,
      "marginTop": 12,
      "marginRight": 30,
      "color": "#16a085",
      "fontWeight": "800",
    },
    "newsIcons": {
        "marginLeft": 2,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 8,
        "paddingLeft": 3
    },
    "slide": {
        "width": (vw * 86),
        "marginTop": vh * 4
    },
    "viewShadow": {
        "shadowColor": "#000",
        "shadowOpacity": 0.4,
        "shadowRadius": 8,
        "shadowOffset": {width: 0, height: 2},
        "borderRadius": 3,
        "width": vw * 86,
        "marginLeft": vw * 8 - 1
    },
    "card": {
        "borderRadius": 3,
        "overflow": "hidden"
    },
    "cardImage": {
        "alignItems": "center",
        "justifyContent": "center",
        "position": "relative",
        "width": vw * 86,
        "height": vh * 40,
        "borderRadius": 3
    },
    "cardTitle": {
        "width": vw * 86,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "height": vh * 25
    },
    "cardName": {
        "fontSize": 18,
        "fontWeight": "300",
        "marginTop": 8,
        "marginRight": 8,
        "marginBottom": 8,
        "marginLeft": 8
    },
    "cardTime": {
        "marginTop": 8,
        "marginRight": 8,
        "marginBottom": 8,
        "marginLeft": 8,
        "color": "#999"
    }
});
