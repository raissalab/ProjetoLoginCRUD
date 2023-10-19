import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { ListarProdutos } from "./src/Componentes/ListarProdutos"
import { ManterProdutos } from "./src/Componentes/ManterProdutos"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Login">
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='ListarProdutos' component={ListarProdutos} options={{ title: 'Cadastro de Produtos', headerShown: false }} />
                <Stack.Screen name='ManterProdutos' component={ManterProdutos} options={{ title: 'Cadastrar/Atualizar Produtos' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}