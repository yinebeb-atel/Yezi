import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import BusinessList from './components/BusinessList';
// import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import EditProfile from './components/EditProfile'
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
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="gotoA"
            component={BusinessList}
            initial
            title='A'
          // icon={TabIcon('user')}
          />
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="gotoB"
            component={BusinessList}
            title='B'
          // icon={TabIcon('user')}
          />
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="gotoC"
            title="C"
            // iconName="tags"
            // icon={TabIcon}
            component={BusinessList}
          />
          <Scene key="editprofile" component={EditProfile} />

          {/* <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" /> */}
        </Scene>
      </Scene>
    </Router>
  );
};


export default RouterComponent;
