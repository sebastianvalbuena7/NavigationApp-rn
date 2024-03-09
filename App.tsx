import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/presentation/routes/StackNavigator';
import { DrawerNavigator } from './src/presentation/routes/DrawerNavigator';
import { BottomTabNavigator } from './src/presentation/routes/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  )
}

export default App;