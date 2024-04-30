import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage';

export default function App() {
  return (
    <View style={{flex:1}}>
      <LoginPage />
    </View>
  );
}

