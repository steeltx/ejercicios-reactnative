import { useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../theme/global.styles";
import { FAB } from "react-native-paper";
// import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>
            {/* <Icon name="add-outline" size={25} /> */}
            <FAB
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                icon="add"
            />
        </View>
    )
}
