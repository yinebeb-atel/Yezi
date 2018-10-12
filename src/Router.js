import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import BusinessList from './components/BusinessList';
import SubscribedList from './components/SubscribedList';
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
          //navBar={Headers}
          hideBackImage
        >
          <Scene key="Home">
            <Scene
              key="home"
              component={BusinessList}
              title='Home'
              initial
              onRight={() => Actions.edit()}
              rightTitle="Edit"
            // icon={TabIcon}
            />

            <Scene
              key="edit"
              component={EditProfile}
              title='Edit'
            // icon={TabIcon}
            />
          </Scene>
          <Scene
            key="suggested"
            component={SubscribedList}
            title='Add'
          // icon={TabIcon}
          />
        </Scene>
      </Scene>
    </Router>
  );
};


export default RouterComponent;
