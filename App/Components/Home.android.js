'use strict';

import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import ReadLater from '@readlater/Index';

export default class Home extends Component {

	render() {
		return (
			<View>
				<StatusBar
					backgroundColor="#222f3d"
					barStyle="light-content"
				/>
				<ReadLater tabLabel="ios-bookmarks" />
			</View>

		);
	}
}
