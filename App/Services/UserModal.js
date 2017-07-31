import React, {Component} from "react";
import {AsyncStorage} from "react-native";
import Constants from "@common/Constants";
//import Api from "./Api";
import _ from "lodash";

function UserModal() {
	if (!(this instanceof UserModal)) {
		return new UserModal();
	}
};


UserModal.prototype.removePost = async function (post) {
	const userPosts = await AsyncStorage.getItem('Books');
	var postData = [];
	if (userPosts != null) {
		postData = JSON.parse(userPosts);
	}
	var newPostData = _.remove(postData, (data) => {
		return data.id != post.id
	});

	AsyncStorage.setItem('Books', JSON.stringify(newPostData));

};

/**
 * Remove all read later post
 */
UserModal.prototype.clearPosts = function (isSync) {
	return AsyncStorage.multiRemove(['Books'], (err) => {});
}

/**
 * Logout and delete all offline data
 */
UserModal.prototype.logOut = function () {
	AsyncStorage.removeItem('userID', (err) => {});
	// AsyncStorage.clear();
}

export default UserModal;
