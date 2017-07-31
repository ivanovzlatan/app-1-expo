import React, { Component } from 'react';
import { Text, WebView, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Spinner, CardSection } from '@common/index';

class MyWeb extends Component {
  constructor(props) {
    super(props);
    this.state = { webviewLoaded: false, registered: '', url: '' };
  }

  onBtnLogPress() {
    Actions.login({ type: 'reset' });
  }

  _onLoadEnd() {
      this.setState({ webviewLoaded: true });
  }

  _onNavigationStateChange = (navState) => {
    this.setState({
      url: navState.url,
    });
    console.log(this.state.url);

    if (this.state.url === 'https://prochete.li/success') {
      Actions.login({ type: 'reset' });
    }
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1 }}>
          {(this.state.webviewLoaded) ? null : <Spinner />}
          <WebView
            ref="webview"
            source={{ uri: 'https://prochete.li/register' }}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            onLoadEnd={this._onLoadEnd.bind(this)}
          />
         </View>
         <CardSection>
           <TouchableOpacity onPress={this.onBtnLogPress} style={{ flex: 1 }}>
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
               Вече сте регистриран/а?
               </Text>
             </View>
           </TouchableOpacity>
         </CardSection>
       </View>
    );
  }
}

export default MyWeb;
