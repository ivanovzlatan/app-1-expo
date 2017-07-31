'use strict';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const Constants = {
	AppName: 'Прочете ли?',

	RTL: false,
	Language: 'en',
	fontFamily: '',

	URL: {
		root: 'https://prochete.li',
	},
	placeHolderImage: 'http://beostore.io/wp-content/uploads/2015/10/placeholderImage.png',
	Window: {
		width: width,
		height: height
	},
	Key: {
		email: "_Email",
		user: "_User",
		posts: "_Post"
	},
	fontText: {
		size: 18,
		fontSizeMin: 16,
		fontSizeMax: 28
	}
};

module.exports = Constants;
