import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FacebookTabBar = React.createClass({
    tabIcons: [],

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array
    },

    componentDidMount() {
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    },

    setAnimationValue({ value, }) {
        this.tabIcons.forEach((icon, i) => {
            const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
            icon.setNativeProps({
                style: {
                    color: 'this.iconColor(progress)',
                },
            });
        });
    },
    // color ‎22, 160, 133
    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 22 + (204 - 22) * progress;
        const green = 160 + (204 - 160) * progress;
        const blue = 133 + (204 - 133) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    },
    render() {
        return <View style={[styles.tabs, this.props.style, ]}>
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                    <Icon
                        name={tab}
                        size={30}
                        color={this.props.activeTab === i ? 'rgb(22,160,133)' : 'rgb(204,204,204)'}
                        ref={(icon) => { this.tabIcons[i] = icon; }}
                    />
                </TouchableOpacity>;
            })}
        </View>;
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        backgroundColor: '#2c3e50'
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        backgroundColor: '#2c3e50'
    },
});

export default FacebookTabBar;
