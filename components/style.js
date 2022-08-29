import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        maxWidth: '100%',
        flexDirection: "row",
        justifyContent:'space-between'
    },

    screenSecondNumber: {
        fontSize: 40,
        color: 'gray',
        fontWeight: '200',
        alignSelf: "flex-end",
    },

    screenFirstNumber: {
        fontSize: 96,
        color: 'gray',
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})

export default styles;