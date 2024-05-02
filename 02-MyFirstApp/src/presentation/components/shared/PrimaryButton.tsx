import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ( {label, onPress, onLongPress} : Props) => {
    return (
        <Pressable
                onPress={ () => onPress && onPress()}
                onLongPress={ () => onLongPress && onLongPress()}
                style={ ({pressed})=> [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
            >
                <Text style={{color: 'white'}}>{label}</Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    },
    button: {
        backgroundColor: '#5856d6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonPressed : {
        backgroundColor: '#4746ab'
    }
});