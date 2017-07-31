'use strict';
import React, { Component } from "react";
import { AsyncStorage } from 'react-native';
import ReaderView from './ReaderView';
import Tools from "@common/Tools";

export default class NewsDetail extends Component {

  lastOpen() {
    AsyncStorage.setItem('LastOpenBook', JSON.stringify(this.props.post));
  }

  render() {
    const post = this.props.post;
    this.lastOpen();

		const imageURL = Tools.getImage(post);
		const postTitle = typeof this.props.post.title.rendered == 'undefined' ? '' : this.props.post.title.rendered;
    const postContent = typeof this.props.post.content.rendered == 'undefined' ? '' : this.props.post.content.rendered;

		return (
      <ReaderView postContent={postContent} postTitle={postTitle} post={this.props.post} />
		);
	}
}
