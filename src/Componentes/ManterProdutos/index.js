import { View, TouchableOpacity, Text, Alert } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';
import { estilos } from "./estilos";
import { useState } from "react";
import { cadastrarProdutos, atualizarProdutos } from "../../servicos/firestore";

export function ManterProdutos({ navigation, route }) {
    const [nomeProduto, setNomeProduto] = useState(route?.params?.nomeProduto)
    const [precoProduto, setPrecoProduto] = useState(route?.params?.precoProduto)
    const [idadeProduto, setIdadeProduto] = useState(route?.params?.idadeProduto)
    const [statusErro, setStatusErro] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    async function salvarProduto() {
        if (nomeProduto == '') {
            setStatusErro('Descricao')
            setMensagemErro('O jogador não pode ser vazio')
        } else if (precoProduto == '') {
            setStatusErro('Preco')
            setMensagemErro('O número deve ter um valor')
        } else if (idadeProduto == '') {
            setStatusErro('Idade')
            setMensagemErro('A idade deve ter um valor')
        } else {
            setStatusErro('')
            let resultado = ''
            if (route?.params) {
                resultado = await atualizarProdutos(route?.params?.id, { nomeProduto, precoProduto, idadeProduto })
            }
            else {
                resultado = await cadastrarProdutos({ nomeProduto, precoProduto, idadeProduto })
            }
            if (resultado == 'erro') {
                Alert.alert('Erro ao cadastrar produto')
            } else {
                setNomeProduto('')
                setPrecoProduto('')
                setIdadeProduto('')
                navigation.navigate('ListarProdutos')
            }
        }
    }
    return (
        <View style={estilos.container}>
            <TextInput
                label="Nome do Jogador"
                value={nomeProduto}
                onChangeText={setNomeProduto}
                mode="outlined"
                error={statusErro == 'Descricao'}
                style={estilos.input} />
            {statusErro == 'Descricao' ? <HelperText type="error" visible={statusErro == 'Descricao'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Número da Camisa"
                value={precoProduto}
                keyboardType="numeric"
                onChangeText={setPrecoProduto}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'Preco' ? <HelperText type="error" visible={statusErro == 'Preco'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Idade do Jogador"
                value={idadeProduto}
                keyboardType="numeric"
                onChangeText={setIdadeProduto}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'Idade' ? <HelperText type="error" visible={statusErro == 'Idade'}>
                {mensagemErro}
            </HelperText> : null}
            <TouchableOpacity
                style={estilos.botao} onPress={() => salvarProduto()}>
                <Text style={estilos.texto}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}