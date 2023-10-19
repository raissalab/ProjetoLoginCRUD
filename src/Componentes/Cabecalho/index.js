import { View, Text, TouchableOpacity } from "react-native";
import estilos from "./estilos";
import Icon from 'react-native-vector-icons/Feather';
import { auth } from "../../config/firebase";

export function Cabecalho({ navigation }) {
  const usuario = auth.currentUser;
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>{usuario.email} vc está logado</Text>
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Login')}>
        <Icon
          name={'log-out'}
          size={22}
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  )
}