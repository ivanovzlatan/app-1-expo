'use strict';
import React, { Component } from 'react';
import { View, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import WebView from "@controls/WebView/Index";
import Header from './Header';
import * as actions from '@actions';
import Footer from './Footer';

const CARD_PREVIEW_WIDTH = 20;
const { width, height } = Dimensions.get('window');

//const STORAGE_KEY = 'key';

class ReaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
      totalPages: '',
      rememberedPage: '',
    };
  }
  state = { albums: [] };

// Redux action dispatch here
  componentWillMount() {
    this.props.splitLibrary(this.props.postContent);
    //console.log(this.props.postContent);
  }

// If there's a saved page, it fires scrollTo. *async important, without it it gives error.
  async componentDidMount() {
    await this._loadInitialState().done();
  }

// scrollTo scrolls fast and logs all pages before scrolling,
// therefore it saves the first one as a remembered page.
// setTimeout important.
  _loadInitialState = async () => {
    const STORAGE_KEY = this.props.postTitle;
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        this.setState({ rememberedPage: value });
        setTimeout(
          () => this.scrollView.scrollTo({ x: width * (this.state.rememberedPage - 1) }),
          0
        ).then(setTimeout(
          () => this.rememberPage(),
          100
        ));
      }
    } catch (error) {
      console.log(error);
    }
  }

   handleScroll(event) {
     // Still trigger the passed callback, if provided:
     // this.props.onScroll && this.props.onScroll(event);

     const e = event.nativeEvent;

     // Get values from event:
     this.scrollViewWidth = e.layoutMeasurement.width;
     this.scrollViewHeight = e.layoutMeasurement.height;
     this.innerScrollViewWidth = e.contentSize.width;
     this.innerScrollViewHeight = e.contentSize.height;

     // These are important, but they're not state variables that trigger an update:
     this.scrollX = e.contentOffset.x;
     this.scrollY = e.contentOffset.y;

     const totalHorizontalPages =
       Math.floor(
         this.innerScrollViewWidth / this.scrollViewWidth + 0.5
       );

      this.setState({
        totalPages: totalHorizontalPages,
        currentPage:
          Math.min(
            Math.max(
              Math.floor(this.scrollX / this.scrollViewWidth + 0.5
          ) + 1, 0), totalHorizontalPages)
      });

    // This timeout must be bigger than in the Initialize method
    setTimeout(
      () => this.rememberPage(),
      200
    );

    if (this.state.currentPage === 2) {
      //console.log('Post for save', this.props.post);
      this.savePost();
    }
   }

   async savePost() {
     const userPosts = await AsyncStorage.getItem('Books');
     var postData = [];
     if (userPosts != null) {
       //console.log('there are user posts saved');
       postData = JSON.parse(userPosts);
     }

     const indexPost = _.findIndex(postData, (data) => {
       //console.log('checking index');
       return data.id == this.props.post.id
     });

     // not in the read later array yet
     if (indexPost == -1) {
       //console.log('SAVING POST');
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

   rememberPage() {
     const STORAGE_KEY = this.props.postTitle;
     let STORAGE_KEY_ADD = this.state.currentPage;
     AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_KEY_ADD), () => {
     })
       .then(this.setState({ rememberedPage: STORAGE_KEY_ADD.rememberedPage }));
   }

  renderAlbums() {
    return this.props.albums.map(function (album, index) {
      return (
        <View style={styles.card} key={index}>
          <ScrollView>
              <WebView html={album} />
          </ScrollView>
        </View>
      );
    });
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Аа" post={this.props.post} />
        <ScrollView
        ref={scrollView => {
          this.scrollView = scrollView;
        }}
        style={styles.container}
        automaticallyAdjustInsets={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={width}
        snapToAlignment="center"
        pagingEnabled={true}
        onScroll={this.handleScroll.bind(this)}
        >
        {this.renderAlbums()}
      </ScrollView>
      <Footer
        footerText="Text"
        currentPage={this.state.currentPage}
        totalPages={this.state.totalPages}
      />
    </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  content: {
    marginTop: 0,
    paddingHorizontal: CARD_PREVIEW_WIDTH,
    alignItems: 'center',
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    width: width,
    margin: 0,
    height: height - 95,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
};

const mapStateToProps = (state) => (
  { albums: state.albums }
);

export default connect(mapStateToProps, actions)(ReaderView);
