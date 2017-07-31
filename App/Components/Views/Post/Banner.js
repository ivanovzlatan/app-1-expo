'use strict';

import React, { Component } from "react";
import { View, Image } from "react-native";
import news from "./style";


export default class Banner extends Component {
	render() {
			return (
				<View style={{height: 200}}>
					<Image
						style={news.bannerImage}
						source={require('@images/kid-banner.png')}></Image>
				</View>
			);
	}
}
