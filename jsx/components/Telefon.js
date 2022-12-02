import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

function EntradaDeTelefon(props){
  
  const [telefon, setTelefon] = useState('');
  const [icono, setIcono] = useState('');
  const [checkValidTelefon, setCheckValidTelefon] = useState(false);
  const [limite,setLimite]=useState(9);
  
  const handleCheckTelefon = text => {

    let regex = /^(\+{1}[0-9]{2})?[0-9]{9}$/;

    setTelefon(text);
    if(text.startsWith('+')){
      setLimite(13);
    }else{
      setLimite(9);
    }
    if (regex.test(text)) {
      setCheckValidTelefon(false);
      setIcono("check");
    } else {
      setCheckValidTelefon(true);
      setIcono("");
    }
    
  };

  return (
    <View>
      <TextInput
          keyboardType='phone-pad'
          placeholder={props.indicacion}
          label={props.nom}
          maxLength={limite}
          value={telefon}
          onChangeText={text => handleCheckTelefon(text)}
          right={<TextInput.Icon icon={icono} iconColor='green'/>}
        />
     
      {checkValidTelefon ? (
        <HelperText type="error">Telefon Incorrecte.</HelperText>
      ) : (
        <HelperText> </HelperText>
      )}
    </View>
    );
}


export default EntradaDeTelefon;