/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View, TouchableOpacity, Button} from 'react-native';
 import {createStackNavigator} from '@react-navigation/stack';
 import {NavigationContainer} from '@react-navigation/native';
 import AddProductScreen from './src/screens/add-product-screen';
 import HomeScreen from './src/screens/home-screen';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {withAuthenticator} from 'aws-amplify-react-native';
 import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
 
 const App: () => React$Node = () => {
   const Stack = createStackNavigator();
   return (
     <>
       <NavigationContainer>
         <Stack.Navigator initialRouteName="AnyCompany Travel">
           <Stack.Screen
             name="AnyCompany Travel"
             component={HomeScreen}
             options={({navigation}) => ({
               title: 'AnyCompany Travel',
               headerStyle: {
                 backgroundColor: '#ff9300',
               },
               headerLeft: () => (
                <TouchableOpacity 
                  style={styles.logOutBtn}
                  onPress={() =>{ Auth.signOut() }}>
                  <Icon name="sign-out" size={25} color="#000000" />
                </TouchableOpacity>
                  //type="clear"
                  //title="Sign Out"
                  //<Button
                    
               ),
               headerRight: () => (
                 <TouchableOpacity
                   style={styles.addButton}
                   onPress={() => navigation.navigate('AddProduct')}>
                   <Icon name={'plus'} size={20} color="#000000" />
                 </TouchableOpacity>
               ),
             })}
           />
           <Stack.Screen
             name="AddProduct"
             buttonStyle={styles.addButton}
             component={AddProductScreen}
             options={{
               title: 'Add a Trip',
               headerStyle: {
                 backgroundColor: '#ff9300',
               },
             }}
           />
         </Stack.Navigator>
       </NavigationContainer>
     </>
   );
 };
 const styles = StyleSheet.create({
   addButton: {
     marginRight: 20,
   },
   logOutBtn: {
     marginLeft: 10,
   },
 });
 
 export default withAuthenticator(App);
