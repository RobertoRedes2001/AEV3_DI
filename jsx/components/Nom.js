import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

function Nom(props){

  return (
    <View>
        <Text style={props.estilo}>{props.nom}</Text>
    </View>
    );
}

export default Nom;