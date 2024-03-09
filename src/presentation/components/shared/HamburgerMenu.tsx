import { useEffect } from "react";
import { Pressable, View } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { IonIcon } from "./IonIcon";

export const HamburgerMenu = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <View style={{marginLeft: 4}}>
                        <IonIcon name="menu-outline" size={30} />
                    </View>
                    {/* <Text>Menu</Text> */}
                </Pressable>
            )
        })
    }, []);

    return <></>;
}