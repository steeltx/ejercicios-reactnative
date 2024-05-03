import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from "react-native";

// const { width, height } = Dimensions.get('window');

export const DimenstionScreen = () => {

    // tomar las dimensiones de la pantalla y no del elemento padre
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.5
                }} />
            </View>
            <Text style={styles.title}>w: {width}, h : {height} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        width: 400,
        height: 300,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        height: '50%',
        width: '50%'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});
