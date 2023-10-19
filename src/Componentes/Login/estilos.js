import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem:{
        width: 200, 
        height: 115,
        borderRadius: 10,
    },
    input: {
        height: 50,
        width: "90%",
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#036900',
        padding: 10,
        width: 105,
        height: 40,
        margin: 6,
        borderRadius: 50,
    },
    textoButton: {
        color: '#fff', 
    },
    texto: {
        fontSize: 12,
    },
    textoLink:{
        color: '#0ac704',
    },

})