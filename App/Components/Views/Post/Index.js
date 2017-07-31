'use strict';

import React, { Component } from "react";
import { View } from "react-native";
import PostHome from "./PostHome";
import Banner from "./Banner";
import Header from '@common/Header';
import StickyScrollView from "./StickyScrollView";


export default class Index extends Component {

	render() {
		return (
			<StickyScrollView>
				<View style={{ flex: 1 }}>
					<Banner />
	        <PostHome />
	      </View>
			</StickyScrollView>
		);
	}
}
