import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, } from 'react';
import LoginPage from './components/LoginPage';
import AddEvent from './components/AddEvent';
import Test from './components/Test';
import RegisteredList from './components/RegisteredList';
import ViewEvent from './components/ViewEvent';
import AllRegistrations from './components/AllRegistrations';
import Photos from './components/Photos';
import Logout from './components/Logout';
import AboutUs from './components/AboutUs';
import Community from './components/Community';
import AddPost from './components/AddPost';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from './components/Profile';

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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
            name=" "
            component={TabNavigator}
            options={{
              // title: "My Profile",
              drawerLabel: "Explore",
              drawerActiveTintColor: "white",
              drawerActiveBackgroundColor: "#3FA2F6",
              drawerContentStyle: {
                backgroundColor: "white",
              },
              // headerShown: false,
              
              headerStyle: {
                backgroundColor: 'white'
              },
            }}
          />
          <Drawer.Screen name="AddEvent" component={AddEvent} options={{
            title: "Add Event",
            drawerLabel: "Add Event",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#3FA2F6",
            drawerContentStyle: {
              backgroundColor: "white",
            },
            // headerShown: false,
            headerStyle: {
              backgroundColor: 'white'
            },
          }} />
          <Drawer.Screen name="AllRegistrations" component={AllRegistrations} options={{
            title: "Events Posted",
            drawerLabel: "Events Posted",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#3FA2F6",
            drawerContentStyle: {
              backgroundColor: "white",
            },
            headerStyle: {
              backgroundColor: 'white'
            },
          }} />





          <Drawer.Screen name="Photos" component={Photos} options={{
            //admin
            title: "Event Photos",
            drawerLabel: "Event Photos",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#3FA2F6",
            drawerContentStyle: {
              backgroundColor: "white",

            },
            headerStyle: {
              backgroundColor: 'white'
            },
          }} />

          <Drawer.Screen name="Add post" component={AddPost} options={{
            //admin
            title: "Add post",
            drawerLabel: "Add post",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#3FA2F6",
            drawerContentStyle: {
              backgroundColor: "white",

            },
            headerStyle: {
              backgroundColor: 'white'
            },
          }} />

          <Drawer.Screen name="Terms and conditions" component={AboutUs} options={{
            //admin
            title: "Terms & conditions",
            drawerLabel: "Terms & conditions",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#3FA2F6",
            drawerContentStyle: {
              backgroundColor: "white",

            },
            headerStyle: {
              backgroundColor: 'white'
            },
          }} />
          <Drawer.Screen name="Community" component={Community} options={{

            title: "Feed",
            drawerLabel: "Community",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#3FA2F6",
            drawerContentStyle: {
              backgroundColor: "white",

            },
            headerStyle: {
              backgroundColor: 'white'
            },
          }} />

          <Drawer.Screen name="Logout" component={LogoutFunction} options={{
            title: "Logout",
            drawerLabel: "Logout",


            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#3FA2F6",
            drawerContentStyle: {
              backgroundColor: "white",
            },
            headerStyle: {
              backgroundColor: 'white'
            },
          }} />

        </Drawer.Navigator>
      ) : <LoginPage onLoginSuccess={handleLogin} />}
    </NavigationContainer>
  );
}








function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: 'black',
        tabBarInactiveBackgroundColor: 'white',
        tabBarHideOnKeyboard:'true',
        tabBarLabelStyle: {
          fontSize: 15,

        },

      }}
    >
      <Tab.Screen
        name="Explore"
        component={ViewEvent}
        options={{
          
          tabBarLabel: "Explore",
          // tabBarIcon: () => <Ionicons name={"person-circle-outline"} size={24} />,
          // tabBarIcon: () => <ion-icon name="heart"></ion-icon>,
          headerShown: false,
          tabBarActiveBackgroundColor: 'black',
          // tabBarActiveTintColor: "black",
          
        }}
      />
      <Tab.Screen
        name="My Registrations"
        component={RegisteredList}
        options={{

          tabBarLabel: "My Registrations",
          // tabBarIcon: () => (
          //   <Icon name={"add"} size={30} color='green' />
          // ),
          // tabBarIcon: () => <Ionicons name={"person-circle-outline"} size={24} />,
          headerShown: true,
          tabBarActiveBackgroundColor: 'black',
          // tabBarActiveTintColor: "black",

        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarActiveBackgroundColor: 'black',
          // tabBarActiveTintColor: "black",

        }}
      />
      
    </Tab.Navigator>
  );
}

export default App;


