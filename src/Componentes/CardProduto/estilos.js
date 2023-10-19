import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 5,
    },
    card: {
        flexDirection: 'row',
        width: "95%",
        height: 90,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
        elevation: 5,
        backgroundColor: '#fff'
    },
    textoContainer: {
        maxWidth: '70%',
    },
    textoNome: {
        fontSize: 20,
        overflow: 'hidden',
        position: 'relative'
    },
    textoPreco: {
        fontSize: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    editButton: {
        height: 30,
        width: 40,
        backgroundColor: '#036900',
        borderRadius: 10,
        padding: 8,
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 30,
        width: 40,
        backgroundColor: '#FA8072',
        borderRadius: 10,
        padding: 8,
        alignItems: 'center'
    },
});