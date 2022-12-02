import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

function EntradaDeEmail(props){
  
  const [email, setEmail] = useState('');
  const [icono, setIcono] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
      setIcono("check");
    } else {
      setCheckValidEmail(true);
      setIcono("");
    }
  };

  return (
    <View>
      <TextInput
          keyboardType='email-address'
          placeholder={props.indicacion}
          label={props.nom}
          value={email}
          onChangeText={text => handleCheckEmail(text)}
          right={<TextInput.Icon icon={icono} iconColor='green'/>}
        />
     
      {checkValidEmail ? (
        <HelperText type="error">Adreça no valida.</HelperText>
      ) : (
        <HelperText> </HelperText>
      )}
    </View>
    );
}


export default EntradaDeEmail;