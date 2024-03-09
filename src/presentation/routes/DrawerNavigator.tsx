import { View, useWindowDimensions } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { BottomTabNavigator } from './BottomTabNavigator';
import { IonIcon } from '../components/shared/IonIcon';

export type RootDrawerParams = {
    // StackNavigator: undefined,
    Tabs: undefined;
    Profile: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
                headerShown: false,
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: globalColors.background,
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}
        >
            {/* <Drawer.Screen
                name="StackNavigator"
                component={StackNavigator}
                options={{
                    drawerItemStyle: {
                        marginTop: 10,
                        borderRadius: 100,
                        paddingHorizontal: 20
                    }
                }}
            /> */}
            <Drawer.Screen
                name="Tabs"
                component={BottomTabNavigator}
                options={{
                    drawerIcon: ({ color }) => (<IonIcon name='bonfire-outline' color={color} />)
                }}
            />

            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (<IonIcon name='cafe-outline' color={color} />)
                }}
            />
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={{
                height: 200,
                backgroundColor: globalColors.primary,
                margin: 20,
                borderRadius: 50
            }} />

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}