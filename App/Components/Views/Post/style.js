import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
import Color from '@common/Color';
import Constants from '@common/Constants';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "width": width,
        "flex": 1,
        "backgroundColor": Color.main
    },
    "bodyCategoryList": {
        "marginTop": 5,
    },
    "color": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "backgroundColor": "#EBEBEB"
    },
    "card": {
        "width": width,
        "flexDirection": "row"
    },
    "box": {
        "width": vw * 40,
        "height": 100,
        "backgroundColor": "#ccc",
        "marginLeft": 20,
        "marginTop": 10,
        "marginBottom": 10
    },
    "relatedPostText": {
        "marginLeft": 8,
        "marginTop": 12,
        "fontSize": 15,
        "fontWeight": "500",
        "color": "#333"
    },
    "cardView": {
        "borderRadius": 2,
        "overflow": "hidden",
        "backgroundColor": "#ccc"
    },
    "cardNews": {
        "marginTop": 4,
        "marginRight": 8,
        "marginBottom": 8,
        "marginLeft": 8,
        "shadowColor": "#000",
        "shadowOpacity": 0.2,
        "shadowRadius": 2,
        "shadowOffset": {width: 0, height: 3},
        "height": width - 80,
        "borderRadius": 2,
        "elevation": 5
    },
    "image": {
        "width": vw * 40,
        "height": 90,
        "resizeMode": "cover",
        "marginLeft": 8,
        "marginTop": 20,
        "marginBottom": 10
    },
    "content": {
        "width": vw * 50,
        "marginLeft": 14,
        "marginTop": 20,
        "marginBottom": 30
    },
    "greyRow": {
        "backgroundColor": "#eee"
    },
    "menuView": {
        "backgroundColor": Color.menuCategory,
        "height": 50,
        "transform": [{scaleX: Constants.RTL ? -1 : 1 }]
    },
    "menuItemView": {
        "marginTop": 8,
        "marginRight": 8,
        "marginBottom": 8,
        "marginLeft": 8,
        "height": 34
    },
    "menuItem": {
        "marginTop": 6,
        "marginRight": 16,
        "marginBottom": 6,
        "marginLeft": 16,
        "fontSize": 16,
        "fontWeight": "500",
        "color": Color.menuItem,
        "transform": [{scaleX: Constants.RTL ? -1 : 1 }]
    },
    "menuItemActive": {
        "backgroundColor": Color.menuCategoryActive,
        "borderRadius": 1,
        "borderWidth": 1,
        "borderColor": Color.menuCategoryActiveBorder
    },
    "menuActiveText": {
        "color": '#1abc9c'
    },
    "placeHolderImage": {
        "alignItems": "center",
        "width": width,
        "height": width/3,
        "justifyContent": "center",
        "backgroundColor": "rgba(67, 130, 208, 0.2)"
    },
    "backgroundOne": {
        "backgroundColor": "rgba(58, 75, 133, 0.6)"
    },
    "backgroundTwo": {
        "backgroundColor": "rgba(188, 59, 36, 0.6)"
    },
    "backgroundThree": {
        "backgroundColor": "rgba(57, 174, 84, 0.6)"
    },
    "bannerText": {
        "position": "absolute",
        "bottom": 0,
        "backgroundColor": "rgba(0, 0, 0, 0.6)",
        "width": vw * 100,
        "alignItems": Constants.RTL ? 'flex-end' : 'flex-start'
    },
    "bannerTitle": {
        "marginTop": 12,
        "marginRight": 12,
        "marginBottom": 2,
        "marginLeft": 12,
        "color": "white",
        "fontSize": 15
    },
    "bannerDate": {
        "color": "rgba(255, 255, 255, 0.7)",
        "fontSize": 9,
        "fontWeight": "500",
        "marginLeft": 12,
        "marginRight": 12,
        "marginBottom": 16
    },
    "time": {
        "color": "#999",
        "fontSize": 10,
        "marginTop": 4,
        "marginBottom": 8,
        "marginLeft": 4,
        "marginRight": 4
    },
    "tagView": {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "justifyContent": "flex-start",
        "marginBottom": 6
    },
    "tag": {
        "backgroundColor": "#aaa",
        "borderRadius": 12,
        "alignSelf": "flex-start",
        "marginRight": 4
    },
    "tagText": {
        "fontSize": 9,
        "marginTop": 1,
        "marginRight": 8,
        "marginBottom": 1,
        "marginLeft": 8,
        "color": "white",
        "fontWeight": "600"
    },
    "hlist": {
        "backgroundColor": "white",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
    },
    "title": {
        "color": "#333",
        "fontSize": 22,
        "textAlign": "center",
        "fontWeight": "200",
        "marginTop": 12
    },
    "titleSmall": {
        "fontSize": 13,
        "color": "#999",
        "textAlign": "center",
        "marginBottom": 10,
        "marginTop": 4
    },
    "productItem": {
        "width": width-10,
        "height": (width-20) * 800/875,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "detailBlock": {
        "alignItems": "center",
        "backgroundColor": "#fff",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "width": width
    },
    "detailDesc": {
        "color": "#fff",
        "fontWeight": "600",
        "fontSize": 18,
        "paddingTop": 10,
        "textAlign": "center"
    },
    "largeImage": {
        "width": width - 16,
        "height": width - 120,
        "resizeMode": "cover"
    },
    "largeContent": {
        "width": width,
        "position": "absolute",
        "bottom": 0,
        "height": 100
    },
    "largeTitle": {
        "color": "#fff",
        "fontSize": 18,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "author": {
        "color": "#999",
        "fontSize": 13,
        "fontWeight": "600",
        "marginTop": 12,
        "marginRight": 12,
        "marginBottom": 12,
        "marginLeft": 20
    },
    "description": {
        "backgroundColor": "#eee",
        "flexDirection": "row"
    },
    "detailPanel": {
        "height": (width-20) * 800/875,
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "flex-end"
    },
    "html": {
        "marginLeft": 12,
        "marginRight": 12
    },
    "toolbar": {
        "backgroundColor": Color.toolbar,
        "height": 50,
        "width": width,
        "flexDirection": "row",
        "justifyContent": "space-between",
        "paddingLeft": 15,
        "paddingTop": 13,
        "paddingRight": 15,
        "position": "relative",
        "transform": [{scaleX: Constants.RTL ? -1 : 1 }]
    },
    "shareIcon": {
        "flexDirection": "row",
        "position": "absolute",
        "right": 14,
        "bottom": 2
    },
    "iconText": {
        "marginLeft": -6,
        "fontSize": 13,
        "fontWeight": "500"
    },
    "linearGradient": {
        "height": 120,
        "marginTop": -120,
        "justifyContent": "flex-end"
    },
    "newsTitle": {
        "fontSize": 18,
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "color": "white",
        "fontWeight": "400",
        "textAlign": "left",
        "backgroundColor": "transparent"
    },
    "avatar": {
        "width": 32,
        "height": 32,
        "borderRadius": 20,
        "resizeMode": "cover",
        "marginTop": 12,
        "marginRight": 12,
        "marginBottom": 12,
        "marginLeft": 12
    },
    "featureListView": {
        "flexDirection": Constants.RTL ? 'row-reverse' : 'row'
    },
    "listView": {
        "width": width,
        "justifyContent": "flex-start",
        "flexDirection": "row",
        "flexWrap": "wrap",
        "marginTop": 8,
        "paddingBottom": 20
    },
    "smCardNews": {
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 8,
        "width": width/2 - 12,
        "shadowColor": "#000",
        "shadowOpacity": 0.25,
        "shadowRadius": 4,
        "shadowOffset": {width: 0, height: 2},
        "borderRadius": 3,
        "elevation": 5,
        "flexDirection": "column",
        "position": "relative",
        "height": (vh * 30) + 132
    },
    "smImage": {
        "width": width/2,
        "height": vh * 30,
        "resizeMode": "cover"
    },
    "smTitle": {
        "marginTop": 12,
        "marginRight": 12,
        "marginBottom": 12,
        "marginLeft": 12,
        "fontSize": 15
    },
    "smAuthor": {
        "color": "#999",
        "fontSize": 12,
        "fontWeight": "300",
        "marginTop": 0,
        "marginLeft": 12,
        "marginBottom": 8,
        "position": "absolute",
        "bottom": 12
    },
    "smDescription": {
        "backgroundColor": "white",
        "height": 100
    },
    "smShareIcons": {
        "flexDirection": "row",
        "backgroundColor": "#F7F7F7",
    },
    "panelOne": {
        "backgroundColor": "#eee",
        "marginBottom": 12
    },
    "imagePanelOne": {
        "marginTop": 12,
        "marginLeft": 8,
        "alignItems": "center",
        "justifyContent": "center",
        "position": "relative",
        "width": (width)-50,
        "height": (width/2)
    },
    "nameOne": {
        "fontSize": 13,
        "width": (width)-50,
        "marginLeft": 8,
        "marginRight": 8,
        "marginTop": 6
    },
    "timeOne": {
        "marginLeft": 8,
        "marginRight": 8,
        "color": "#999",
        "fontSize": 10,
        "marginBottom": 10,
        "marginTop": 4
    },
    "panelTwo": {
        "position": "relative"
    },
    "imagePanelTwo": {
        "marginTop": 12,
        "alignItems": "center",
        "justifyContent": "center",
        "position": "relative",
        "width": (width/2 - 15),
        "height": (width/3),
        "marginRight": 5,
        "marginLeft": 5
    },
    "nameTwo": {
        "fontSize": 13,
        "width": (width/2 - 20),
        "marginLeft": 5,
        "marginTop": 6
    },
    "timeTwo": {
        "marginLeft": 8,
        "marginRight": 8,
        "color": "#999",
        "fontSize": 10,
        "marginTop": 4
    },
    "panel": {
        "position": "relative",
        "backgroundColor": "#eee",
        "paddingLeft": 8,
        "paddingTop": 8,
        "height": (width/3) + 120
    },
    "imagePanel": {
        "width": (width/3)-10,
        "height": (width/3),
        "marginRight": 8,
        "alignItems": "center",
        "justifyContent": "center",
        "position": "relative"
    },
    "name": {
        "fontSize": 13,
        "width": (width/3)-10,
        "marginLeft": 4,
        "marginTop": 6
    },
    "dot": {
        "backgroundColor": "rgba(0,0,0,.1)",
        "width": 8,
        "height": 8,
        "borderRadius": 4,
        "marginLeft": 4,
        "marginRight": 4
    },
    "dotActive": {
        "backgroundColor": "rgba(0,0,0,.4)",
        "width": 8,
        "height": 8,
        "borderRadius": 4,
        "marginLeft": 4,
        "marginRight": 4
    },
    "banner": {
        "height": width * 2 / 3,
        "width": width,
        "backgroundColor": "#ccc"
    },
    "bannerImage": {
        "width": width,
        "height": width * 2 / 3
    },
    "bannerView": {
        "width": width,
        "height": width * 2 / 3
    },
    "panelList": {
        "backgroundColor": "#fff",
        "borderColor": "#eee",
        "borderBottomWidth": 1,
        "flexDirection": Constants.RTL ? 'row-reverse' : 'row'
    },
    "titleList": {
        "width": vw * 65
    },
    "imageList": {
        "marginTop": 12,
        "marginLeft": 8,
        "marginRight": 8,
        "marginBottom": 8,
        "alignItems": "center",
        "justifyContent": "center",
        "position": "relative",
        "width": vw * 30,
        "height": vw * 30 - 20,
        "resizeMode": "cover",
        "borderRadius": 2
    },
    "nameList": {
        "fontSize": 17,
        "marginLeft": 4,
        "marginTop": 12,
        "marginRight": 8,
        "color": "#2c3e50",
        "fontWeight": "200"
    },
    "descriptionList": {
        "fontSize": 12,
        "marginLeft": 4,
        "marginTop": 4,
        "marginRight": 8,
        "color": "#b3bbc9",
        "fontWeight": "300"
    },
    "timeList": {
        "marginLeft": 4,
        "marginRight": 4,
        "color": "#999",
        "fontSize": 11,
        "marginBottom": 10,
        "marginTop": 6,
        "backgroundColor": "transparent"
    },
    "category": {
        "fontSize": 11,
        "marginTop": 0,
        "marginLeft": 4,
        "color": "#16a085"
    }
});
