import { StyleSheet, View } from "react-native";

export const HomeWorkScreen = () => {
    return (
        <View style={style.container}>
            <View style={[style.box, style.purpleBox]}/>
            <View style={[style.box, style.orangeBox]}/>
            <View style={[style.box, style.blueBox]}/>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor : '#5856d6',
        // alignSelf: 'flex-end',
        // flex: 1
        // top: 100
    },
    orangeBox: {
        backgroundColor : '#f0a23b',
        // alignSelf: 'center'
        // flex: 1
        // right: -100
        top: 50
    },
    blueBox: {
        backgroundColor : '#28c4d9',
        // width: '100%'
        // alignSelf: 'flex-start',
        // flex: 2
    }
});
