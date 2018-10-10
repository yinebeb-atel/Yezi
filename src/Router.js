import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 30 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth" >
          <Scene
            key="login"
            component={LoginForm}
            title=" "
            initial
          />
          <Scene
            key="signUp"
            component={SignUpForm}
            title="SignUp"
          />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};


export default RouterComponent;
