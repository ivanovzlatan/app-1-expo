'use strict';
import React, { Component } from "react";
import { View, AsyncStorage, ToastAndroid } from 'react-native';
import _ from 'lodash';
import css from './style';
import Icon from "react-native-vector-icons/SimpleLineIcons";
// import User from "@services/User";
import Tools from "@common/Tools";


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ColorHeart: typeof this.props.color == 'undefined' ? '#c3c5c9' : this.props.color,
      whichIcon: 'plus'
    };
  }

  readLater() {
    this.setState({
      ColorHeart: '#16a085',
      whichIcon: 'check'
    });
    console.log(this.props.post);
    this.savePost(this.props.post);
    ToastAndroid.show('Книгата беше успешно добавена в "Моите Книги"', ToastAndroid.SHORT);
  }

  async savePost() {
    if (typeof this.props.post == 'undefined' || this.props.post == null) {
      return;
    }

    const userPosts = await AsyncStorage.getItem('Books');
    var postData = [];
    if (userPosts != null) {
      postData = JSON.parse(userPosts);
    }

    const indexPost = _.findIndex(postData, (data) => {
      return data.id == this.props.post.id
    });

    // not in the read later array yet
    if (indexPost == -1) {
      postData.push({
        id: this.props.post.id,
        author: this.props.post.author,
        title: { rendered: this.props.post.title.rendered },
        content: { rendered: this.props.post.content.rendered },
        better_featured_image: { source_url: this.props.post.better_featured_image.source_url } });


      // save to storage local
      AsyncStorage.setItem('Books', JSON.stringify(postData));
      // sync to firebase
    }
  }

  /*


  if (indexPost == -1) {
    postData.push(this.props.post);

    // save to storage local
    AsyncStorage.setItem('Books', JSON.stringify(postData));
        console.log('pushing: ', this.props.post);
    // sync to firebase
  }
  // console.log('save post', indexPost, post);
}
  */

  render() {
    const textColor = typeof this.props.color == 'undefined' ? '#c3c5c9' : this.props.color;
    return (
      <View style={{ backgroundColor: 'transparent' }}>

        <Icon.Button style={css.newsIcons}
                     name={this.state.whichIcon}
                     size={30}
                     color={this.state.ColorHeart}
                     onPress={this.readLater.bind(this)}
                     backgroundColor="transparent">
        </Icon.Button>


      </View>
    )
  }
}
