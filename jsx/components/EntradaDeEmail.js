import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

function EntradaDeEmail(){
  
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <View>
      <TextInput
          keyboardType='email-address'
          placeholder="Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
          right={<TextInput.Icon icon="eye" />}
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