// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //     </View>
// //   );
// // }


// import React from 'react';
// import { AppLoading } from 'expo';
// import { Container, Text } from 'native-base';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isReady: false,
//     };
//   }

//   async componentDidMount() {
//     await Font.loadAsync({
//       Roboto: require('native-base/Fonts/Roboto.ttf'),
//       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
//       ...Ionicons.font,
//     });
//     this.setState({ isReady: true });
//   }

//   render() {
//     if (!this.state.isReady) {
//       return <AppLoading />;
//     }

//     return (
//       <Container >
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         </View>
//       </Container>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Font from 'expo-font';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';
// import Navigation from './components/Navigation';
// import Get_demo from './components/Get_demo';
// import Header from './components/Header/Header';
import {  Container, 
          Header, 
          Title, 
          Content, 
          Footer, 
          FooterTab, 
          Button, 
          Left, Right, Body, 
          Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  function HomeScreen() {
  return (
    <Container>
        <Header>
          <Left>
            <Button iconLeft transparent>
              <Icon name='menu' />
            </Button>
          </Left>

          <Body>
            <Title>Team edition</Title>
          </Body>
           <Right>
            <Button small iconRight transparent > 
              <Icon type="MaterialIcons" name='translate' />
            </Button>
        
            <Button  small iconRight transparent> 
              <Icon name='person-add'  />
            </Button>
            <Button small iconRight transparent> 
              <Icon name='log-in' />
            </Button>
          </Right>
        </Header>
        


        <Content>
        <Text>asd</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button block full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
class App extends Component {

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
      FontAwesome: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf"),
      MaterialIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf")
      // ...Ionicons.font,
    });
    this.setState({ isReady: true });
    }

  render() {
    return (      
       <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
    
        <Stack.Screen name="Home ddemo" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Overview' }}/>
      </Stack.Navigator>
    </NavigationContainer>

    );
  }
}
 

export default App;



