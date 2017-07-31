import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#34495e',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 22,
    lineHeight: 30,
    flex: 3,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 5,
    flex: 1
  },
  containerStyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
