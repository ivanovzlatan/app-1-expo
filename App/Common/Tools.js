'use strict';

import { AsyncStorage, Linking } from "react-native";
import Constants from '@common/Constants';
import AppEventEmitter from "@services/AppEventEmitter";
import { AllHtmlEntities } from 'html-entities';
import _ from 'lodash';

export default class Tools {

	/**
	 * refresh the tab bar & read later page
	 */
	static refresh() {
		AppEventEmitter.emit('login.refresh');
		AppEventEmitter.emit('homepage.refresh');
	}

	static getImage(data, imageSize) {
		if (typeof data == 'undefined' || data == null) {
			return '';
		}
		if (typeof imageSize == 'undefined')    {
			imageSize = 'medium_large';
		}

		var imageURL = typeof data.better_featured_image != 'undefined' &&  data.better_featured_image != null ? data.better_featured_image.source_url : '';

		if (typeof data._embedded != 'undefined') {
			if (typeof data._embedded['wp:featuredmedia'] != 'undefined') {
				if (typeof data._embedded['wp:featuredmedia'][0]['media_details'] != 'undefined') {
					if (typeof data._embedded['wp:featuredmedia'][0]['media_details']['sizes'] != 'undefined') {
						if (typeof data._embedded['wp:featuredmedia'][0]['media_details']['sizes'][imageSize] != 'undefined') {
							imageURL = data._embedded['wp:featuredmedia'][0]['media_details']['sizes'][imageSize]['source_url'];
						}

						if (imageURL == '' && typeof data._embedded['wp:featuredmedia'][0]['media_details']['sizes']['medium'] != 'undefined')   {
							imageURL = data._embedded['wp:featuredmedia'][0]['media_details']['sizes']['medium']['source_url'];
						}

						if (imageURL == '' && typeof data._embedded['wp:featuredmedia'][0]['media_details']['sizes']['full'] != 'undefined')   {
							imageURL = data._embedded['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url'];
						}
					}
				}
			}
		}

		if (imageURL == '') {
			return Constants.placeHolderImage;
		}

		return imageURL;
	}


	static async getFontSizePostDetail() {
		const data = await AsyncStorage.getItem('@setting_fontSize');
		if (typeof data != 'undefined') {
			return parseInt(data);
		}
		return Constants.fontText.size;
	}

	static getDescription(desc, limit) {
		if (typeof limit == 'undefined') {
			limit = 50
		}
		var desc = desc.replace('<p><p>', '');
		var desc = desc.replace('</p>', '');
		var desc = desc.replace('</p>', '');
		var desc = desc.replace('<br />', '');
		desc = _.truncate(desc, {'length': limit}) ;

		return AllHtmlEntities.decode(desc);
	}

  static openLink(url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        //console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
}
