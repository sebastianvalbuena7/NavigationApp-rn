import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/presentation/routes/StackNavigator';
import { DrawerNavigator } from './src/presentation/routes/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default App