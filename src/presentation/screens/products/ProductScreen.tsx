import { useEffect } from "react";
import { Text, View } from "react-native"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { RootStackParams } from "../../routes/StackNavigator";
import { globalStyles } from "../../theme/theme";

export const ProductScreen = () => {
    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, []);

    return (
        <View style={globalStyles.container}>
            <Text>ProductsScreen</Text>

            <Text style={{
                textAlign: 'center',
                fontSize: 20,
                marginTop: 20
            }}>
                {params.id} - {params.name}
            </Text>
        </View>
    )
}
