import React, {Component} from "react";
import {View, Animated, ScrollView} from "react-native";
import Header from '@common/Header';
import EventEmitter from "@services/AppEventEmitter";
import css from "./style";

export default class StickyScrollView extends Component {
    render() {
        return (
            <View style={css.body}>
                <Header headerText="Библиотека" />
                <ScrollView>
                    {this.props.children}
                </ScrollView>
            </View>
        );
    }
}
