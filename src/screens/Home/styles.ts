import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },
    header: {
        paddingTop: 72,
        paddingBottom: 70,
        alignItems: "center",
        backgroundColor: '#0D0D0D'
    },
    input: {
        backgroundColor: '#262626',
        flex: 1,
        padding: 16,
        borderRadius: 6,
        fontSize: 16,
        color: '#F2F2F2',
        marginEnd: 4,
        borderWidth: 1
    },
    inputFocused: {
        backgroundColor: '#262626',
        flex: 1,
        padding: 16,
        borderRadius: 6,
        fontSize: 16,
        color: '#F2F2F2',
        marginEnd: 4,
        borderColor: '#5E60CE',
        borderWidth: 1
    },
    btnAdd: {
        backgroundColor: '#1E6F9F',
        height: 52,
        width: 52,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
    },
    inputContainer: {
        flexDirection: "row",   
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,
        marginHorizontal: 24,
    },
    containerCounter: {
        flexDirection: "row",
        marginHorizontal: 24,
        marginTop: 32,
    },
    separator: {
        borderWidth: 1,
        borderColor: '#333333',
        marginHorizontal: 24,
        marginTop: 20,
    },
    txtEmptyTitle: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 16,
    },
    txtEmptyBody: {
        color: '#808080',
        fontWeight: 'regular',
        fontSize: 14,
        marginTop: 4,
    },
    emptyView: {
        alignItems: 'center',
        marginTop: 48,
    }
});