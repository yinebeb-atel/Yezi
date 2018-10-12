import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import SubscribedList from './components/SubscribedList';
import BusinessList from './components/BusinessList';
import EditProfile from './components/EditProfile';
import { TabIcon, Headers } from './components/common';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 30 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth" >
          <Scene
            key="login"
            component={LoginForm}
            initial
            backTitle=" "
          />
          <Scene
            key="signUp"
            component={SignUpForm}
            title="SignUp"
            backTitle=" "
          />
        </Scene>
        <Scene
          key="main"
          tabs
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          navBar={Headers}
        >
          <Scene
            key="subscribed"
            component={SubscribedList}
            title='home'
            icon={TabIcon}
          />
          <Scene
            key="suggested"
            component={BusinessList}
            title='compass'
            icon={TabIcon}
          />
          <Scene
            key="editprofile"
            component={EditProfile}
            title='editprofile'
          />

        </Scene>
      </Scene>
    </Router>
  );
};


export default RouterComponent;
