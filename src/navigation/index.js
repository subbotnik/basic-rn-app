import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../ui/screens/home';
import ProfileScreen from '../ui/screens/profile';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});

export default createAppContainer(MyDrawerNavigator);
