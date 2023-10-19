import { View, Text, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import Icon from 'react-native-vector-icons/AntDesign';
import { deletarProdutos } from "../../servicos/firestore";

export function CardProduto({ produto, navigation }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.card} >
                <View style={estilos.textoContainer}>
                    <Text style={estilos.textoNome} numberOfLines={1}>{produto.nomeProduto}</Text>
                    <Text style={estilos.textoPreco}>Número: {produto.precoProduto}</Text>
                    <Text style={estilos.textoPreco}>Idade: {produto.idadeProduto}</Text>
                </View>
                <View style={estilos.buttonsContainer}>
                    <TouchableOpacity style={estilos.editButton} onPress={() => navigation.navigate('ManterProdutos', produto)}>
                        <Icon
                            name={'edit'}
                            size={13}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.deleteButton} onPress={() => deletarProdutos(produto.id)} >
                        <Icon
                            name={'delete'}
                            size={13}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}