import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {

}from 'react-native-paper';

import Nom from './components/Nom';
import Email from './components/EntradaDeEmail';
import Telf from './components/Telefon';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <Nom nom={"Manel"} estilo={styles.estilDeText}/>
      <Email nom={"Email"} indicacion={"Indique el seu correo"}/>
      <Telf nom={"Telefon"} indicacion={"+xx xxx xx xx xx o xxx xx xx xx"}/>
    </View>
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
  estilDeText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    },
});

export default App;
