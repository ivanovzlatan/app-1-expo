'use strict';
import React, {Component} from "react";
import {View} from 'react-native';
import css from "./style";
import User from "@services/User";
import {
  GoogleAnalyticsTracker,
  GoogleTagManager,
  GoogleAnalyticsSettings
} from 'react-native-google-analytics-bridge';

export default class Index extends Component {
  constructor() {
    // The tracker must be constructed, and you can have multiple:
    let tracker1 = new GoogleAnalyticsTracker('UA-90561349-1');
    let tracker2 = new GoogleAnalyticsTracker('UA-90561349-2');
    tracker1.trackScreenView('Home');
    tracker2.trackEvent('New');

    // The GoogleAnalyticsSettings is static, and settings are applied across all trackers:
    GoogleAnalyticsSettings.setDispatchInterval(30);
    GoogleAnalyticsSettings.setDryRun(true);

    // GoogleTagManager is also static, and works only with one container. All functions here are Promises:
    GoogleTagManager.openContainerWithId("GT-NZT48")
      .then(() => {
        return GoogleTagManager.stringForKey("pack");
      })
      .then((pack) => {
        //console.log("Pack: ", pack);
      })
      .catch((err) => {
        //console.log(err);
      });
  }

  render() {
    return (
      <View style={css.body}>

      </View>
    )
  }
}
