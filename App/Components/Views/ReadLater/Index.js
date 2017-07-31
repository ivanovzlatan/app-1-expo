'use strict';

import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Header from '@common/Header';
import css from './style';
import PostReadLater from './PostReadLater';
import User from '@services/User';
import { Spinner } from '@common';

class ReadLater extends Component {
	constructor(props) {
		super(props);
		this.data = [];
		this.state = {
			isLoading: true,
			dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		};
	}

	componentWillMount() {
		this.fetchPostData();
	}

	async componentDidMount() {
    await this.lastRead();
  }

	getDataSource(posts) {
		return this.state.dataSource.cloneWithRows(posts);
	}

	async getPosts() {
    try {
      var userPosts = await AsyncStorage.getItem('Books');
			var postData = [];

			if (userPosts === null) {
				this.downloadBooks();
				//setTimeout(() => Actions.main({ type: 'reset' }), 0);
			} else if (userPosts !== null) {
        postData = JSON.parse(userPosts);
      }
			return postData;
    } catch (error) {
      // console.log('error', error.message);
    }
  }

	downloadBooks() {
			var books = this.props.books;
			// save to storage local
			AsyncStorage.setItem('Books', JSON.stringify(books));
			// sync to firebase
		}

	async lastRead() {
		const lastReading = await AsyncStorage.getItem('LastOpenBook');
		var postData = [];
		console.log('lastreading', lastReading);
		if (lastReading !== null) {
			postData = JSON.parse(lastReading);
			Actions.postDetails({ post: postData });
		}
	}

	async fetchPostData() {
		const self = this;
		const data = await this.getPosts();

		self.data = data;
		if (this.refs.listview) {
			self.setState({ dataSource: self.getDataSource(data) });
			this.setState({ isLoading: false });
		}
	}

	clearAll() {
		const self = this;
		User.clearPosts(true).then(function () {
			self.setState({ dataSource: self.getDataSource([]) });
		});
	}

	refreshList() {
		Actions.licensed({ type: 'reset' });
	}
	goHome() {
		Actions.news();
	}

	logOut() {
		AsyncStorage.clear();
	}

	renderRow(post) {
		if (post != null) {
			return <PostReadLater post={post} />;
		}
		return null;
	}

	renderSpinner() {
		if (this.state.isLoading) {
			return <Spinner size="large" />;
		}

		return;
	}

	render() {
		// this.downloadBooks();
		//console.log('now check this out!', this.props.books);
		return (
			<View style={css.body}>
				<Header headerText="Моите Книги" />
				<View style={css.topBar}>
						<TouchableOpacity onPress={this.refreshList.bind(this)}>
							<Text	style={css.clearText}>
								Прочетени
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.goHome.bind(this)}>
							<Text	style={css.clearText}>
								Home
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.logOut.bind(this)}>
							<Text	style={css.clearText}>
								Log Out
							</Text>
						</TouchableOpacity>
				</View>
				{this.renderSpinner()}
				<ListView
					ref="listview"
					contentContainerStyle={css.listView}
					enableEmptySections={true}
					horizontal={false}
					showsHorizontalScrollIndicator={false}
					renderRow={this.renderRow.bind(this)}
					dataSource={this.state.dataSource}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
  return { books: state.books };
};

export default connect(mapStateToProps)(ReadLater);
