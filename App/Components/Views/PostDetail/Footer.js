// import
import React from 'react';
import { Text, View } from 'react-native';


// Component
const Footer = (props) => {
  const { textStyleCurrent, textStyleTotal, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyleCurrent}>{props.currentPage} <Text style={textStyleTotal}> / {props.totalPages}</Text></Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    elevation: 2,
    position: 'relative'
  },
  textStyleCurrent: {
    color: '#1abc9c',
    fontSize: 20
  },
  textStyleTotal: {
    color: '#fff',
    fontSize: 12
  }
};

// make it available
export default Footer;
