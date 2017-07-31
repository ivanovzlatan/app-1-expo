import React, {Component} from "react";
import { WebView, View, Text, Image, Dimensions } from "react-native";
import HTML from 'react-native-render-html';
import Tools from "@common/Tools";
import Constants  from "@common/Constants";
// const { width, height, scale } = Dimensions.get("window");

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: Constants.fontText.size
    };

    Tools.getFontSizePostDetail().then((data) => {
      this.setState({ fontSize: data });
    });
  }

  state = {
    imgWidth: 0,
    imgHeight: 0,
  }

  render() {
    const htmlStyle = {
      img: { height: this.state.imgHeight, width: this.state.imgWidth },
      link: { fontSize: this.state.fontSize != null ? this.state.fontSize : 18 },
      div: { fontSize: 18 },
      p: {
        lineHeight: this.state.fontSize != null ? this.state.fontSize * 2 - 10 : 15,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: this.state.fontSize != null ? this.state.fontSize : 18,
        color: '#333'
      },
      h4: {
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: this.state.fontSize != null ? this.state.fontSize : 18,
        color: '#333'
      },
      h2: {
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: this.state.fontSize != null ? this.state.fontSize : 18,
        color: '#333'
      },
      h1: {
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: this.state.fontSize != null ? this.state.fontSize + 7 : 18,
        color: '#333'
      },
      li: {
        fontSize: this.state.fontSize != null ? this.state.fontSize : 18
      },
      a: {
        paddingLeft: 12,
        zIndex: 9,
        paddingRight: 12,
        fontSize: this.state.fontSize != null ? this.state.fontSize : 18,
        color: '#2993FC'
      },
      blockquote: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      span: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    const renderers = {
	 	img: (htmlAttribs, children, passProps) => {
      Image.getSize(htmlAttribs.src, (width, height) => {
        // calculate image width and height
        const screenWidth = Dimensions.get('window').width;
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;
        this.setState({ imgWidth: screenWidth, imgHeight: imageHeight });
      });
      return (
        <View>
          <Image
          source={{ uri: htmlAttribs.src }}
          style={passProps.htmlStyles.img}
          {...passProps}
          resizeMode={'contain'}
          />
          <Text> {this.state.imgHeight} {this.state.imgWidth}</Text>
        </View>
    );
    }
  };

    return (
      <HTML
        html={this.props.html}
        onLinkPress={(evt, href) => Tools.openLink(href)}
        htmlStyles={htmlStyle}
        renderers={renderers}
      />
  );
  }
}
