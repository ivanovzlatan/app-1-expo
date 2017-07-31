'use strict';

import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import style from "./style";
import PostFeature from "./PostFeature";

export default class PostHome extends Component {
  render() {
    return (
      <View>
        <View style={style.hlist}>
          <PostFeature
            id="klist"
            vertical={true}
          />
          </View>
      </View>
    );
  }
}
