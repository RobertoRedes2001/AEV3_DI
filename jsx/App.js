import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Text, TextInput} from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider as PaperProvider} from 'react-native-paper';

const nom = (textAMostrar, estils) => {
  return <Text styles={estils}>{textAMostrar}</Text>;
};

const dades = (unArray) => {
  return unArray.map((unElementDeLArray, i, array) => {
    
    return(<TextInput 
    label={unElementDeLArray}
    placeholder={unElementDeLArray}
    key={'id_'+i}
    />)
  });
};

const App = () => {
  const arrayDades = ['Email', 'Nom', 'Cognoms', 'Telefon'];
  return (
    <PaperProvider>
      {nom('Pablo Vicente Rozalén', styles.nom)}
      {dades(arrayDades)}
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
    fontWeight: 'bold ',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  nom: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
