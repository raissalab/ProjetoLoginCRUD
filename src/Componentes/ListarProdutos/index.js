import { View, FlatList, TouchableOpacity } from "react-native"
import { estilos } from "./estilos"
import { BotaoProduto } from "../BotaoProduto"
import { useEffect, useState } from "react"
import { buscarProdutos, pegarProdutoTempoReal } from "../../servicos/firestore"
import { CardProduto } from "../CardProduto"
import { Cabecalho } from '../Cabecalho'


export function ListarProdutos({ navigation }) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    async function carregarProdutos() {
        setRefreshing(true)
        const produtosFirestore = await buscarProdutos()
        setProdutos(produtosFirestore)
        setRefreshing(false)
    }
    useEffect(() => {
        carregarProdutos()
        pegarProdutoTempoReal(setProdutos)
    }, [])

    return (
        < >
            <Cabecalho navigation={navigation}/>
            <View style={estilos.container}>
                {produtos.length > 0 && (<FlatList
                    data={produtos}
                    renderItem={({ item }) => <CardProduto produto={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                    refreshing={refreshing}
                    onRefresh={carregarProdutos}
                />)
                }
                <BotaoProduto onPress={() => navigation.navigate('ManterProdutos')} />
            </View>
        </>
    )
}