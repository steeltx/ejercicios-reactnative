import { StyleSheet, Text, View } from "react-native";

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox}/>
            <View style={styles.orangeBox}/>
            <View style={styles.greenBox}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28c4d9',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5956d6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        bottom: 0,
        position: 'absolute',
        right: 0
    }
});
