import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider as PaperProvider, TextInput} from 'react-native-paper';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const nom = (textAMostrar) => {
    return <Text style={{color:'blue',fontSize:25}}>{textAMostrar}</Text>;
  };

  const [text, setText] = React.useState("");

  const dades = (arr,estil) => {
    let mapa;
    if(estil){
      mapa = arr.map((value)=>
        <View style={styles.florida}> 
          <TextInput  
          style={{width:408,height:50}}
          mode="outlined"
          placeholder={value}
          placeholderTextColor="white"
          label={value}
          value={text}
          onChangeText={text => setText(text)}
          />
        </View>
      );
    }else{
      mapa = arr.map((value)=>
        <View style={styles.upv}> 
          <TextInput  
          style={{width:408,height:50}}
          mode="outlined"
          placeholder={value}
          placeholderTextColor="orange"
          label={value}
          value={text}
          onChangeText={text => setText(text)}
          />
        </View>
      );
    }
    
    return mapa 
  }

  let arrayDades = ["Nombre","Apellido"];
  let estilo = true;
  return (
    <PaperProvider>
        {nom("Oberto")}
        {dades(arrayDades,estilo)}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  upv:{
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
