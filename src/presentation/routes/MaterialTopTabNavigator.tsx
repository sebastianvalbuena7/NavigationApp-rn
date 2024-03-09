import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreent';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();

export const MaterialTopTabNavigator = () => {
    return (
        <>
            <HamburgerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
            </Tab.Navigator>
        </>
    );
}