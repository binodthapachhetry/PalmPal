
import React from 'react';                                                                                                                      
 import {NavigationContainer} from '@react-navigation/native';                                                                                   
 import {createNativeStackNavigator} from '@react-navigation/native-stack';                                                                      
 import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';                                                                           
 import {Colors} from 'react-native/Libraries/NewAppScreen';                                                                                     
 import {ChatScreen} from './screens/ChatScreen';                                                                                            
 import {ModelsScreen} from './screens/ModelsScreen';                                                                                        
 import {initializeApp} from './init';                                                                                                       
                                                                                                                                                 
 const Stack = createNativeStackNavigator();                                                                                                     
                                                                                                                                                 
 function App(): React.JSX.Element {                                                                                                             
   const isDarkMode = useColorScheme() === 'dark';                                                                                               
   const backgroundStyle = {                                                                                                                     
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,                                                                               
     flex: 1,                                                                                                                                    
   };                                                                                                                                            
                                                                                                                                                 
   // Initialize app when component mounts                                                                                                       
   React.useEffect(() => {                                                                                                                       
     initializeApp();                                                                                                                            
   }, []);                                                                                                                                       
                                                                                                                                                 
   return (                                                                                                                                      
     <SafeAreaView style={backgroundStyle}>                                                                                                      
       <StatusBar                                                                                                                                
         barStyle={isDarkMode ? 'light-content' : 'dark-content'}                                                                                
         backgroundColor={backgroundStyle.backgroundColor}                                                                                       
       />                                                                                                                                        
       <NavigationContainer>                                                                                                                     
         <Stack.Navigator initialRouteName="Models">                                                                                             
           <Stack.Screen                                                                                                                         
             name="Chat"                                                                                                                         
             component={ChatScreen}                                                                                                              
             options={{title: 'Chat'}}                                                                                                           
           />                                                                                                                                    
           <Stack.Screen                                                                                                                         
             name="Models"                                                                                                                       
             component={ModelsScreen}                                                                                                            
             options={{title: 'Select Model'}}                                                                                                   
           />                                                                                                                                    
         </Stack.Navigator>                                                                                                                      
       </NavigationContainer>                                                                                                                    
     </SafeAreaView>                                                                                                                             
   );                                                                                                                                            
 }                                                                                                                                               
                                                                                                                                                 
 export default App; 







// import React from 'react';                                                                                                          
// import {NavigationContainer} from '@react-navigation/native';                                                                       
// import {createNativeStackNavigator} from '@react-navigation/native-stack';                                                          
// import {ChatScreen} from './screens/ChatScreen';                                                                                    
// import {ModelsScreen} from './screens/ModelsScreen';                                                                                
                                                                                                                                    
// const Stack = createNativeStackNavigator();                                                                                         
                                                                                                                                    
// const App = () => {                                                                                                                 
//   return (                                                                                                                          
//     <NavigationContainer>                                                                                                           
//       <Stack.Navigator>                                                                                                             
//         <Stack.Screen                                                                                                               
//           name="Chat"                                                                                                               
//           component={ChatScreen}                                                                                                    
//           options={({navigation}) => ({                                                                                             
//             headerRight: () => (                                                                                                    
//               <TouchableOpacity onPress={() => navigation.navigate('Models')}>                                                      
//                 <Text>Models</Text>                                                                                                 
//               </TouchableOpacity>                                                                                                   
//             ),                                                                                                                      
//           })}                                                                                                                       
//         />                                                                                                                          
//         <Stack.Screen name="Models" component={ModelsScreen} />                                                                     
//       </Stack.Navigator>                                                                                                            
//     </NavigationContainer>                                                                                                          
//   );                                                                                                                                
// };                                                                                                                                  
                                                                                                                                    
// export default App; 