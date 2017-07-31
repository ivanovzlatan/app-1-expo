import React, { Component } from 'react';
import { View, AsyncStorage, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Licensed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      license: '',
    };
  }

  async componentWillMount() {
    const STORAGE_KEY = 'userID';
    const value = await AsyncStorage.getItem(STORAGE_KEY);

    if (value !== null) {
      console.log('There is a user logged in');
      const requestUrl = 'https://prochete.li/wc-api/v3/customers/'
      + value
      + '?consumer_key=ck_ca431dc35bcee4d9a0df7f69a27a1ee31a3a38e1&'
      + 'consumer_secret=cs_dca9e3daf7653e3e08ef354e047369b316746143';

      return fetch(requestUrl)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.customer.role === 'subscriber') {
            setTimeout(() => Actions.main({ type: 'reset' }), 0);
          } else if (responseJson.customer.role === 'administrator') {
            setTimeout(() => Actions.main({ type: 'reset' }), 0);
          }
          this.setState({ license: responseJson.customer.role });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Actions.auth({ type: 'reset' });
    }
  }

  async getSubscription() {
    const STORAGE_KEY = 'userID';
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    console.log('THE LOGGED IN USER IS:', value);
    return value;
  }

  /*reRoute() {
    if (this.state.license === 'subscriber') {
      setTimeout(() => Actions.main({ type: 'reset' }), 3000);
    } else if (this.state.license !== 'subscriber') {
      console.log(this.state.license);
      setTimeout(() => Actions.auth({ type: 'reset' }), 3000);
    }
  }
  */

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center', }}
      >
        <Image
          source={require('@images/spinner.gif')}
        />
      </View>
    );
  }
}

export default Licensed;
