'use-strict';

import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/EvilIcons";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

// Component
const Header = (props) => {
  return (
    <View style={styles.toolbarMenuAndroid}>
      <TouchableOpacity onPress={() => Actions.postDetails({ type: 'replace', post: props.post })}>
        <Icon name={'chevron-left'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  titleStyle: {
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    position: 'relative',
    flex: 8
  },
  viewStyle: {
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    height: 50,
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
      height: 50,
      width: width,
      backgroundColor: '#2c3e50',
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'center'
  },
  icon: {
      fontSize: 55,
      color: '#16a085',
      marginLeft: 0,
  },
};

// make it available
export default Header;
