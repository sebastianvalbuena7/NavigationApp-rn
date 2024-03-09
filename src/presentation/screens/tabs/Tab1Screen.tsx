import { Text, View } from "react-native"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu";
import { IonIcon } from "../../components/shared/IonIcon";

export const Tab1Screen = () => {
    return (
        <View>
            <HamburgerMenu />
            <Text>
                Tab1Screen
            </Text>

            <IonIcon
                name="american-football-outline"
                size={30}
                color="#232323"
            />
        </View>
    )
}
