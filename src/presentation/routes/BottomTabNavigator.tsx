import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { MaterialTopTabNavigator } from './MaterialTopTabNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: globalColors.background
            }}
            screenOptions={{
                // headerShown: false
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarActiveTintColor: globalColors.primary
            }}
        >
            <Tab.Screen
                name="Tab1"
                options={{
                    title: 'Tabs1',
                    tabBarIcon: ({ color }) => (
                        // <Text style={{ color }}>Tab1</Text>
                        <IonIcon name='football-outline' color={color} />
                    )
                }}
                component={Tab1Screen}
            />

            {/* <Tab.Screen
                name="Tab2"
                component={Tab2Screen}
                options={{
                    title: 'Tabs2',
                    tabBarIcon: ({ color }) => (<Text style={{ color }}>Tab2</Text>)
                }}
            /> */}

            <Tab.Screen
                name="Tab2"
                component={MaterialTopTabNavigator}
                options={{
                    title: 'Tabs2',
                    tabBarIcon: ({ color }) => (
                        <IonIcon color={color} name='scan-outline' />
                        // <Text style={{ color }}>Tab2</Text>
                    )
                }}
            />

            <Tab.Screen
                name="Tab3"
                component={StackNavigator}
                // component={Tab3Screen}
                options={{
                    title: 'Tabs3',
                    tabBarIcon: ({ color }) => (
                        // <Text style={{ color }}>Tab3</Text>
                        <IonIcon color={color} name='grid-outline' />
                    )
                }}
            />
        </Tab.Navigator>
    );
}