import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AddEvent from './components/AddEvent';
import Test from './components/Test';
import RegisteredList from './components/RegisteredList';
import ViewEvent from './components/ViewEvent';
import AllRegistrations from './components/AllRegistrations';
import Photos from './components/Photos';


// export default function App() {
//   return (
//     <View style={{flex:1}}>
//       {/* <LoginPage /> */}
//       {/* <AddEvent /> */}
//       {/* <ViewEvent /> */}
//       {/* <AllRegistrations /> */}
//       {/* <RegisteredList /> */}



//       {/* <Test /> */}
//     </View>
//   );
// }





const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const LogoutFunction = () => (<Logout onPress={handleLogout} />)
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator>
          <Drawer.Screen
            name="Explore"
            component={ViewEvent}
            options={{
              // title: "My Profile",
              drawerLabel: "Explore",
              drawerActiveTintColor: "white",
              drawerActiveBackgroundColor: "#717999",
              drawerContentStyle: {
                backgroundColor: "#DCDEE6",
              },
              headerStyle: {
                backgroundColor: '#717999'
              },
            }}
          />
          <Drawer.Screen name="AddEvent" component={AddEvent} options={{
            title: "Add Event",
            drawerLabel: "Add Event",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#717999",
            drawerContentStyle: {
              backgroundColor: "#DCDEE6",
            },
            headerStyle: {
              backgroundColor: '#717999'
            },
          }} />
          <Drawer.Screen name="AllRegistrations" component={AllRegistrations} options={{
            title: "Events Posted",
            drawerLabel: "Events Posted",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#717999",
            drawerContentStyle: {
              backgroundColor: "#DCDEE6",
            },
            headerStyle: {
              backgroundColor: '#717999'
            },
          }} />
          <Drawer.Screen name="RegisteredList" component={RegisteredList} options={{
            //admin
            title: "My Registrations",
            drawerLabel: "My Registrations",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#717999",
            drawerContentStyle: {
              backgroundColor: "#DCDEE6",

            },
            headerStyle: {
              backgroundColor: '#7D8ABC'
            },
          }} />
          <Drawer.Screen name="Photos" component={Photos} options={{
            //admin
            title: "Event Photos",
            drawerLabel: "Event Photos",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#717999",
            drawerContentStyle: {
              backgroundColor: "#DCDEE6",

            },
            headerStyle: {
              backgroundColor: '#7D8ABC'
            },
          }} />

          <Drawer.Screen name="Logout" component={LogoutFunction} options={{
            title: "Logout",
            drawerLabel: "Logout",

            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#717999",
            drawerContentStyle: {
              backgroundColor: "#DCDEE6",
            },
            headerStyle: {
              backgroundColor: '#717999'
            },
          }} />

        </Drawer.Navigator>
      ) : <LoginPage onLoginSuccess={handleLogin} />}
    </NavigationContainer>
  );
}

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarLabelPosition: "below-icon",
//         tabBarActiveTintColor: "white",
//         tabBarInactiveTintColor: 'black',
//         tabBarInactiveBackgroundColor: '#DCDEE6',
//         tabBarLabelStyle: {
//           fontSize: 15
//         },

//       }}
//     >
//       <Tab.Screen
//         name="Explore"
//         component={ViewEvent}
//         options={{

//           tabBarLabel: "Explore",
//           // tabBarIcon: () => <Ionicons name={"person-circle-outline"} size={24} />,
//           headerShown: false,
//           tabBarActiveBackgroundColor: '#717999',
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default App;


