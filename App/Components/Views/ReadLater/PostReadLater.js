'use strict';

import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ToastAndroid } from "react-native";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/EvilIcons";
import User from '@services/User';

import Tools from "@common/Tools";
import css from "./style";

export default class PostReadLater extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRemove: false,
			menuVisible: false,
		};
	}

	viewPost() {
		Actions.postDetails({ post: this.props.post });
	}

	removePost(post) {
		User.removePost(post);
		this.setState({ isRemove: true });
		ToastAndroid.show('Книгата беше успешно премахната от "Моите Книги"', ToastAndroid.SHORT);
	}

	/*isReadPost(post) {
		User.removePost(post);
		this.setState({ isRemove: true });
	}
	*/

	renderMenu() {
		if (this.state.menuVisible) {
			return (
				<View style={{ flexDirection: 'column' }}>
					<TouchableOpacity
						style={{ borderColor: '#eee', borderBottomWidth: 1, backgroundColor: '#f9f9f9' }}
						onPress={() => this.removePost(this.props.post)}
					>
						<Text style={styles.name}>Маркирай като прочетена</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ borderColor: '#eee', borderBottomWidth: 1, backgroundColor: '#f9f9f9' }}
						onPress={() => this.removePost(this.props.post)}
					>
						<Text style={[styles.name, { color: '#b25b73' }]}>Премахни от Моите Книги</Text>
					</TouchableOpacity>
				</View>
			);
		}
	}

	renderMenuButton() {
		if (this.state.menuVisible) {
			return (
				<TouchableOpacity onPress={() => this.setState({ menuVisible: false })}>
					<Icon name={'chevron-up'} style={styles.icon} />
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableOpacity onPress={() => this.setState({ menuVisible: true })}>
					<Icon name={'chevron-down'} style={styles.icon} />
				</TouchableOpacity>
			);
		}
	}

	render() {
		if (this.state.isRemove)    {
			return null;
		}

		const swipeBtns = [{
			text: 'Изтрий',
			backgroundColor: '#E3222C',
			borderColor: '#fff',
			borderWidth: '2',
			underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
			onPress: () => {
				this.removePost(this.props.post)
			}
		}];

		/* PUT IN READ
		<View style={{ alignItems: 'flex-end', marginRight: 20, marginTop: 20 }}>
			<Icon.Button
				style={css.newsIcons}
				name={'check'}
				size={40}
				color={'#16a085'}
				onPress={this.isReadPost.bind(this)}
				backgroundColor="transparent">
			</Icon.Button>
		</View>
		*/
		const data = this.props.post;
		const imageURL = Tools.getImage(data);
		const postTitle = typeof data.title.rendered != 'undefined' ? data.title.rendered : '';

		return (
			<View style={{ backgroundColor: '#fff' }}>
				<TouchableOpacity style={css.panel} onPress={this.viewPost.bind(this)}>
					<Image source={{uri: imageURL}} style={css.image}></Image>

					<View style={css.title}>
						<View style={{ flex: 3 }}>
							<Text style={css.name}>{Tools.getDescription(postTitle, 150)}</Text>
						</View>
						<View style={styles.menu}>
							{this.renderMenuButton()}
						</View>
					</View>
				</TouchableOpacity>
				{this.renderMenu()}
			</View>
		);
	}
}

const styles = {
  icon: {
      fontSize: 40,
      color: '#34495e',
      marginLeft: 0,
			marginRight: 10
  },
	menu: {
			flex: 1,
      height: 50,
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'flex-end',
			justifyContent: 'flex-end'
  },
	name: {
		fontSize: 20,
		paddingLeft: 20,
		paddingTop: 5,
		paddingBottom: 5,
		color: '#16a085'
	}
};
