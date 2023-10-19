import { View, Image } from "react-native";
import { Cabecalho } from "../Cabecalho";
import estilos from "./estilos";

export function Home({ navigation }) {
    return (
        <>
            <Cabecalho navigation={navigation} />
            <View style={estilos.container}>
                <Image style={estilos.imagem} source={require('../../../assets/trofeu.png')}></Image>
            </View>
        </>
    )
}