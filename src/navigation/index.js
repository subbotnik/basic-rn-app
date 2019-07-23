import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '~/ui/screens/home';

const TabNavigator = createStackNavigator({ Home: HomeScreen });

export default createAppContainer(TabNavigator);
