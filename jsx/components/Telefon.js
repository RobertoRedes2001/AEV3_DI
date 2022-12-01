import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

function EntradaDeTelefon(){
  
  const [telefon, setTelefon] = useState('');
  const [icono, setIcono] = useState('');
  const [checkValidTelefon, setCheckValidTelefon] = useState(false);
  const [limite,setLimite]=useState(9);
  
  const handleCheckTelefon = text => {

    let regex = !/^\+\d{2}([ \/\.])\d{9}$/;
    let re = !/^[0-9]{9}$/;

    setTelefon(text);
    if(text.startsWith('+')){
        if (regex.test(text)) {
            setCheckValidTelefon(false);
            setIcono("check");
            setLimite(13);
            } else {
            setCheckValidTelefon(true);
            setIcono("");
            }
    }else{
        if (re.test(text)) {
            setCheckValidTelefon(false);
            setIcono("check");
            setLimite(9);
          } else {
            setCheckValidTelefon(true);
            setIcono("");
          }
    }
    
  };

  return (
    <View>
      <TextInput
          keyboardType='phone-pad'
          placeholder="Telefon"
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