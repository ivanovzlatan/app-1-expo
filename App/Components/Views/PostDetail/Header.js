'use-strict';

import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/EvilIcons";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

  /*  <View style={styles.toolbarMenuAndroid}>
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Icon name={'chevron-left'} style={styles.icon} />
      </TouchableOpacity>
    </View>
    */
class Header extends Component {

  onBack() {
    AsyncStorage.removeItem('LastOpenBook', (err) => {});
    console.log('DELETE LAST OPEN');
    Actions.pop();
  }

  render() {
    /*const backButton = () => {
        if (this.props.backFromSettings)	{
            return (
              <TouchableOpacity onPress={() => Actions.home({ type: 'reset' })}>
                <Icon name={'chevron-left'} style={styles.icon} />
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name={'chevron-left'} style={styles.icon} />
            </TouchableOpacity>
          );
        };
    */
    return (
    <View style={styles.toolbarMenuAndroid}>
      <TouchableOpacity onPress={this.onBack.bind(this)}>
        <Icon name={'chevron-left'} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.setting({ type: 'replace', post: this.props.post })}>
        <Text style={styles.Aa}>Aa</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = {
  titleStyle: {
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    height: 50 + Constants.statusBarHeight,
    position: 'relative',
    flex: 8
  },
  viewStyle: {
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    height: 50 + Constants.statusBarHeight,
    elevation: 2,
    position: 'relative',
    flex: 1,
    flexDirection: 'row'
  },
  buttonStyle: {
    height: 50,
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  },
  toolbarMenuAndroid: {
      paddingTop: Constants.statusBarHeight,
      height: 50 + Constants.statusBarHeight,
      width: width,
      backgroundColor: '#2c3e50',
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  icon: {
      fontSize: 55,
      color: '#16a085',
      marginLeft: 0,
  },
  Aa: {
      fontSize: 25,
      color: '#16a085',
      marginRight: 15,
  },

};

// make it available
export default Header;
