'use strict';

import React, { Component } from "react";
import { ListView, View } from "react-native";
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import Post from "./Post";
import wp from '@services/WPAPI';
import css from "./style";
//import Spinkit from "@controls/Spinkit/Index";
import { Spinner } from '@common';


export default class PostFeature extends Component {

  constructor(props) {
    super(props);
    this.data = [];

    this.state = {
      limit: 3,
      page: 1,
      refreshing: false,
      isLoading: false,
      finish: false,
      datasource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    };
  }


  componentDidMount() {
    this.fetchPostData();
  }

  getDataSource(posts) {
    return this.state.datasource.cloneWithRows(posts);
  }

  fetchPostData() {
    var self = this;
    console.log('--start fetching post--');

    if ((this.state.finish || this.state.isLoading)) {
      console.log('is loading or finish', this.state.finish, this.state.isLoading);
      self.setState({isLoading: false});
      console.log(' setting isloading to false');
      return;
    }

    self.setState({isLoading: true});

    const api = wp.posts()
      .perPage(this.state.limit)
      .page(this.state.page)
      .sticky(false);

    api.get(function (err, data) {
      if (err) {
        console.log(err, this.props.tag);
      }

      console.log('Post data:', data);
      self.data = self.data.concat(data);

      self.setState({
        page: self.state.page + 1,
        finish: data.length < self.state.limit,
        isLoading: false,
        datasource: self.getDataSource(self.data)
      });
    });
}

  renderRow(layout, post) {
    return <Post post={post} />;
  }

  renderSpinner() {
    if (this.state.isLoading) {
      return <Spinner size="large" />;
    }

    return;
  }

  render() {
    return (
    <View>
      <ListView
      contentContainerStyle={this.props.vertical ? null : css.featureListView}
      renderScrollComponent={props => false ? <InvertibleScrollView {...props} inverted /> :
        <InvertibleScrollView {...props} />}
      key={this.props.id}

      dataSource={this.state.datasource}
      horizontal={this.props.vertical ? false : true}

      showsHorizontalScrollIndicator={this.props.vertical ? true : false}

      onEndReachedThreshold={100}
      onEndReached={this.fetchPostData.bind(this)}

      renderRow={this.renderRow.bind(this, this.props.layout)}>
    </ListView>
    <View style={{ backgroundColor: '#efefef' }}>{this.renderSpinner()}</View>
  </View>);
  }
}
