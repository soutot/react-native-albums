//Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
  //flex: 1 é necessário para que o ScrollView percorra todo o conteúdo
  // Está é a recomendação do curso, mas comigo funcionou sem
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to device
AppRegistry.registerComponent('albums', () => App); 
// () => App é igual a () => {return App} 
