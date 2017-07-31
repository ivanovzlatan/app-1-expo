import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
import Color from '@common/Color';
import Constants from '@common/Constants';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h3": {
        "color": "#494949",
        "fontSize": 16
    },
    "toolbarView": {
        "backgroundColor": Color.main,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 10,
        "width": width
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
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 9,
        "transform": [{scaleX: Constants.RTL ? -1 : 1 }]
    },
    "toolbarMenuAndroid": {
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
    "toolbarTitleView": {
        "position": "absolute",
        "top": 2,
        "left": 6,
        "width": width - 160,
        "height": 40,
        "marginLeft": 0,
        "marginRight": 80,
        "alignItems": "flex-start"
    },
    "toolbarHome": {
        "position": "absolute",
        "top": 2,
        "left": width/2 - 77,
        "width": width,
        "height": 40,
        "marginLeft": 0,
        "alignItems": "flex-start"
    },
    "toolbarLogo": {
        "height": 13,
        "top": 6,
        "width": 155,
        "resizeMode": "contain",
        "transform": [{scaleX: Constants.RTL ? -1 : 1 }]
    },
    "toolbarTitle": {
        "color": Color.text,
        "fontSize": 17,
        "marginBottom": 4,
        "fontWeight": "500",
        "alignSelf": "flex-start",
        "left": 0,
        "transform": [{scaleX: Constants.RTL ? -1 : 1 }]
    },
    "textcolor": {
        "color": "#494949"
    },
    "icon": {
        "fontSize": 40,
        "color": "#494949"
    },
    "icon32": {
        "fontSize": 32,
        "color": "#494949"
    },
    "imageIconView": {
        "marginLeft": 2,
        "marginRight": 0,
        "marginTop": 0,
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "marginBottom": 10,
        "shadowColor": "#000",
        "width": 35,
        "zIndex": 10,
        "height": 50,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "imageIcon": {
        "width": 16,
        "height": 16
    },
    "imageIconLarge": {
        "width": 18,
        "height": 18
    },
    "iconHome": {
        "width": 20,
        "marginLeft": -4
    },
    "iconPadding": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "iconLarge": {
        "width": 24
    },
    "iconBack": {
        "marginLeft": 0,
        "position": "absolute",
        "zIndex": 999,
        "left": 0,
        "top": -8,
        "color": Color.text
    },
    "iconBackAndroid": {
        "marginLeft": 0,
        "position": "absolute",
        "left": -10,
        "top": -2,
        "color": Color.text
    },
    "textBack": {
        "color": Color.text,
        "fontSize": 16,
        "marginTop": -11,
        "left": 4,
        "transform": [{scaleX: Constants.RTL ? -1 : 1 }]
    },
    "rowCenter": {
        "flexDirection": "row",
        "alignItems": "center"
    },
    "padLeft10": {
        "marginLeft": 18
    },
    "toolbar": {
        "backgroundColor": Color.main,
        "justifyContent": "space-between",
        "alignItems": "center",
        "flexDirection": "row",
        "paddingTop": 28,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "logo": {
        "resizeMode": "contain",
        "height": 22,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "modal": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "borderRadius": 3,
        "overflow": "hidden"
    },
    "image": {
        "width": width-20
    },
    "inputIcon": {
        "position": "absolute",
        "left": 0,
        "top": 6,
        "resizeMode": "contain",
        "height": 24,
        "width": 24
    },
    "buttonRound": {
        "position": "relative",
        "borderColor": "#ddd",
        "borderWidth": 0.8,
        "borderTopWidth": 0,
        "borderRightWidth": 0,
        "borderLeftWidth": 0,
        "marginTop": 10,
        "marginRight": 8,
        "marginBottom": 8,
        "marginLeft": 8,
        "paddingBottom": 8
    },
    "button": {
        "backgroundColor": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderColor": "transparent",
        "borderWidth": 2,
        "alignSelf": "stretch",
        "borderRadius": 23,
        "height": 45,
        "marginTop": 18,
        "marginLeft": 10,
        "marginRight": 10
    },
    "buttonColor": {
        "backgroundColor": "#eee",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderColor": "transparent",
        "borderWidth": 2,
        "alignSelf": "stretch",
        "borderRadius": 23,
        "height": 45,
        "marginTop": 18,
        "marginLeft": 10,
        "marginRight": 10
    },
    "buttonText": {
        "color": "#eee",
        "alignSelf": "center",
        "fontSize": 18
    },
    "buttonColorText": {
        "color": "#fff",
        "alignSelf": "center",
        "fontSize": 17
    },
    "textInput": {
        "height": 40,
        "backgroundColor": "transparent",
        "color": "rgba(255, 255, 255, 0.9)",
        "paddingLeft": 40
    },
    "textInputDark": {
        "height": 40,
        "backgroundColor": "transparent",
        "color": "rgba(0, 0, 0, 0.9)",
        "paddingLeft": 40
    },
    "outerBorder": {
        "position": "relative",
        "borderColor": "white",
        "borderWidth": 0.8,
        "borderTopWidth": 0,
        "borderRightWidth": 0,
        "borderLeftWidth": 0,
        "marginTop": 5,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15
    },
    "outerBorderDark": {
        "position": "relative",
        "borderColor": "#aaa",
        "borderWidth": 0.8,
        "borderTopWidth": 0,
        "borderRightWidth": 0,
        "borderLeftWidth": 0,
        "marginTop": 5,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15
    },
    "inputSearch": {
        "height": 34,
        "borderColor": "#ddd",
        "borderWidth": 1,
        "fontSize": 14,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "borderRadius": 4,
        "marginTop": 8,
        "marginLeft": 10,
        "marginRight": 10,
        "marginBottom": 8,
        "color": "#333",
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "width": width - 20
    },
    "searchBox": {
        "height": 0
    },
    "halfWidth": {
        "width": width/2 - 20
    },
    "templateLayout": {
        "flexWrap": "wrap",
        "flexDirection": "row",
        "alignItems": "stretch"
    },
    "templateRow": {
        "width": width/2 - 12,
        "height": vh * 21,
        "backgroundColor": "#f9f9f9",
        "marginLeft": 8,
        "marginBottom": 8,
        "borderWidth": 1,
        "borderColor": "#eee",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "templateImage": {
        "width": width/2-12,
        "height": 100,
        "resizeMode": "contain"
    },
    "templateMenu": {
        "color": "#888",
        "fontWeight": "600",
        "fontSize": 12
    },
    "iconHide": {
        "opacity": 0.2
    }
});
