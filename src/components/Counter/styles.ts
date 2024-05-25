import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignSelf: "baseline",
        flexDirection: "row",
    },
    txtCounterTitleCreated: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: "bold",
        marginEnd: 8,
    },
    txtCounterTitleFinished: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: "bold",
        marginEnd: 8,
    },
    containerCounter: {
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },
    txtCounterQuantity: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: "bold"
    }
});