import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import BusinessList from './components/BusinessList';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
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
          />
          <Scene
            key="signUp"
            component={SignUpForm}
            title="SignUp"
          />
        </Scene>
        <Scene
          key="main"
          tabs
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          navBar={Headers}
        >
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList2"
            component={BusinessList}
            initial
            title='A'
          // icon={TabIcon('user')}
          />
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="B"
            component={BusinessList}
            initial
            title='B'
          // icon={TabIcon('user')}
          />
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="C"
            title="C"
            // iconName="tags"
            // icon={TabIcon}
            component={BusinessList}
          />
          {/* <Scene key="profile" component={EmployeeEdit} /> */}

          {/* <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" /> */}
        </Scene>
      </Scene>
    </Router>
  );
};


export default RouterComponent;
