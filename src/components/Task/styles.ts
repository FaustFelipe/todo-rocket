import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        flexDirection: "row",
        marginHorizontal: 24,
        marginBottom: 8,
        borderRadius: 8,
        padding: 12,
        alignItems: "center"
    },
    txtTaskName: {
        color: '#F2F2F2',
        fontSize: 14,
        marginHorizontal: 8,
        flex: 1
    },
    txtTaskNameFinished: {
        color: '#808080',
        fontSize: 14,
        marginHorizontal: 8,
        flex: 1,
        textDecorationLine: "line-through"
    }
});