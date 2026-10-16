import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import FromScreen from './src/screens/FormScreen';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenForm = (item = null) => {
    setSelectedItem(item);
    setCurrentScreen('Form');
  };
  const handleBackToHome = () => {
    setSelectedItem(null);
    setCurrentScreen('Home');
  };
  return (
    <View style={styles.container}>
      {currentScreen === 'Home' ? (
        <HomeScreen onNavigateToForm={handleOpenForm}/>
      ):(
        <FromScreen itemToEdit={selectedItem} onNavigateBack={handleBackToHome}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
