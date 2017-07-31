'use strict';

import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator, ToastAndroid } from "react-native";
import { Actions } from 'react-native-router-flux';
import Slider from "@controls/Slider/Index";
import Header from './Header';
import css from "./style";

export default class Setting extends Component {
	state = { isLoading: false };


	onButtonPress() {
		this.setState({ isLoading: true });
		ToastAndroid.show('Текстът се оразмерява...', ToastAndroid.SHORT);
		setTimeout(() => Actions.postDetails({ type: 'replace', post: this.props.post }), 100);
	}

	renderButton() {
    if (this.state.isLoading) {
      return (
				<View style={styles.spinnerStyle}>
					<ActivityIndicator
						size={'large'}
					/>
				</View>
			);
    }

    return (
			<TouchableOpacity
				onPress={this.onButtonPress.bind(this)}
				style={styles.buttonStyle}
			>
				<Text style={styles.textStyle}>
					Готово
				</Text>
			</TouchableOpacity>
    );
  }


	render() {
		return (
			<ScrollView>
				<Header headerText="Аа" post={this.props.post} />
				<View style={css.boxSetting}>
					<Text style={{ fontSize: 18, color: '#2c3e50', textAlign: 'center', paddingTop: 20 }}>
						Преместете плъзгача наляво или надясно, за да промените размера на шрифта.
					</Text>
					<Slider />
					{this.renderButton()}
				</View>
			</ScrollView>
		);
	}
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
		marginTop: 30,
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#16a085',
    marginLeft: 5,
    marginRight: 5
  },
	spinnerStyle: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 20
	}
};
