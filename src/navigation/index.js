import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '~/ui/screens/home';
import Overview from '~/ui/screens/overview';
import SignIn from '~/ui/screens/signIn';
import SignUp from '~/ui/screens/signUp';
import ForgotPassword from '~/ui/screens/forgotPassword';

const HomeNavigator = createStackNavigator(
  { Home: HomeScreen },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  });

const SignUpNavigator = createStackNavigator({
  Overview: Overview,
  SignIn: SignIn,
  SignUp: SignUp,
  ForgotPassword: ForgotPassword,
},
{
  initialRouteName: 'Overview',
  // headerMode: 'none',
  navigationOptions: {
    header: null,
  },
});

const MainNavigator = createStackNavigator({
  SignUpNavigator,
  HomeNavigator,
});

export default createAppContainer(MainNavigator);
