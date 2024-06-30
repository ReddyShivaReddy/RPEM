import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AddEvent from './components/AddEvent';
import Test from './components/Test';
import RegisteredList from './components/RegisteredList';
import ViewEvent from './components/ViewEvent';


export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      {/* <AddEvent /> */}
      {/* <Test /> */}
      {/* <RegisteredList /> */}
      <ViewEvent />
    </View>
  );
}

