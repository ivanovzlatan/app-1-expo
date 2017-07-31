'use strict';

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ToastAndroid } from "react-native";
import post from "./style";

import { Actions } from 'react-native-router-flux';
import Tools from '@common/Tools';
import CommentIcons from "@controls/CommentIcons/Index";

export default class Post extends Component {

  viewPost() {
    ToastAndroid.show('Зарежда книгата "' + this.props.post.title.rendered + '"', ToastAndroid.SHORT);
    Actions.postDetails({ post: this.props.post });
  }

  render() {
    const data = this.props.post;
    const imageURL = Tools.getImage(data);
    const postTitle = typeof data.title.rendered == 'undefined' ? '' : data.title.rendered;
    const postContent = typeof data.excerpt.rendered == 'undefined' ? '' : data.excerpt.rendered;

    return (
      <TouchableOpacity style={post.panelList} onPress={this.viewPost.bind(this)}>

        <Image source={{ uri: imageURL }} style={post.imageList} />

        <View style={post.titleList}>
          <Text style={post.nameList}>{Tools.getDescription(postTitle, 300)}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 7 }}><Text style={post.descriptionList}>{Tools.getDescription(postContent, 120)}</Text></View>
            <View style={{ flex: 3, alignItems: 'flex-end' }}>
              <CommentIcons
                hideOpenIcon={true}
                post={this.props.post}
                style={post.smShareIcons}
                comment='null'
              />
            </View>
          </View>
        </View>

      </TouchableOpacity>
    );
  }
}
