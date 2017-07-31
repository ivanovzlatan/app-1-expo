'use strict';
import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Constants } from 'expo';

import Setting from '@setting/Index';
import ReadLater from '@readlater/Index';

import LoginForm from './Views/Login/LoginForm';
import MyWeb from './Views/Login/MyWeb';
import Licensed from './Views/Login/Licensed';
import Abonament from './Views/Login/Abonament';

import PostDetails from './Views/PostDetail/Index';
import News from './Views/Post/Index';

import Home from './Home';

export default class RootRouter extends Component {
  render() {
    return (
      <Router
        sceneStyle={{ paddingTop: 50 }}
        navigationBarStyle={{
          borderBottomColor: 'transparent',
          elevation: 2,
          backgroundColor: '#2c3e50',
        }}
        leftButtonIconStyle={{ tintColor: '#16a085' }}
      >

        <Scene key="licensed">
          <Scene key="license" component={Licensed} title="Лиценз" init hideNavBar sceneStyle={{ paddingTop: 0 }} />
        </Scene>

        <Scene key="auth" sceneStyle={{ paddingTop: 0 }} >
          <Scene key="login" component={LoginForm} title="Влезте в профила си" hideNavBar />
          <Scene key="register" component={MyWeb} title="Регистрирайте се" hideNavBar />
        </Scene>

        <Scene key="abonament">
          <Scene key="aboniraise" component={Abonament} title="Абонамент" init />
        </Scene>

        <Scene key="main">
          <Scene key="home" component={Home} title="" initial={true} hideNavBar sceneStyle={{ paddingTop: 0 }} duration={1} />

          <Scene key="news" component={News} title="Title" hideNavBar sceneStyle={{ paddingTop: 0 }} />
          <Scene
            key="postDetails"
            component={PostDetails}
            title=''
            duration={1}
            hideNavBar
            sceneStyle={{ paddingTop: 0 }}
          />

        <Scene key="readlater" component={ReadLater} title="T" sceneStyle={{ paddingTop: 0 }} />
        <Scene
          key="setting"
          component={Setting}
          title=""
          hideNavBar
          sceneStyle={{ paddingTop: 0 }}
        />
        </Scene>
      </Router>
    );
  }
}
