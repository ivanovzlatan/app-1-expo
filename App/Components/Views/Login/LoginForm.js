import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '@actions';
import { CardSection, Input, Button, Spinner } from '@common';

class LoginForm extends Component {
  state = { nonce: '' };

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    const nonce = this.state.nonce;
    console.log(email, password, nonce);
    this.props.loginUser({ email, password, nonce });
  }


  componentWillMount() {
    return fetch('https://prochete.li/api/get_nonce/?controller=user&method=generate_auth_cookie')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ nonce: responseJson.nonce });
        return responseJson.nonce;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /*login() {
    const { email, password } = this.props;
    const gotnonce = this.state.nonce;
    const requestUrl = 'https://prochete.li/api/user/generate_auth_cookie/?insecure=cool&nonce=' + gotnonce
			+ '&username=' + email + '&password=' + password;

    return fetch(requestUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'ok') {
          console.log('SUCCESS');
          Actions.main({ type: 'reset' });
        }
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  */

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Влез
      </Button>
    );
  }

  onBtnRegPress() {
    Actions.register({ type: 'reset' });
  }

  render() {
    return (
      <View style={{ flex: 1  }}>
        <View style={{ alignItems: 'center', paddingBottom: 25 }}>
          <Image style={{ width: 100, height: 100 }}
				       source={require('@images/logo.png')}>
          </Image>
        </View>
        <View style={{ flex: 1, marginLeft: 15, marginRight: 15 }}>
          <CardSection>
            <Input
              label="Имейл"
              placeholder="email@gmail.com"
              keyboardType="email-address"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Парола"
              placeholder="******"
              keyboardType="name-phone-pad"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>

          <CardSection>
            <TouchableOpacity style={{ flex: 1 }}>
              <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row', }}
              >
                <Text
                style={{
                  fontSize: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#16a085' }}
                >
                Нямаш регистрация?
                </Text>
              </View>
            </TouchableOpacity>
          </CardSection>
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};
export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
