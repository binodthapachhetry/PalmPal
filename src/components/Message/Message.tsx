import React from 'react';                                                                                                          
 import {View, Text, StyleSheet} from 'react-native';                                                                                
 import {Message as MessageType} from '../../utils/types';                                                                           
                                                                                                                                     
 interface Props {                                                                                                                   
   message: MessageType;                                                                                                             
 }                                                                                                                                   
                                                                                                                                     
 export const Message: React.FC<Props> = ({message}) => {                                                                            
   const isUser = message.role === 'user';                                                                                           
                                                                                                                                     
   return (                                                                                                                          
     <View style={[styles.container, isUser ? styles.userMessage : styles.aiMessage]}>                                               
       <Text style={styles.text}>{message.content}</Text>                                                                            
     </View>                                                                                                                         
   );                                                                                                                                
 };                                                                                                                                  
                                                                                                                                     
 const styles = StyleSheet.create({                                                                                                  
   container: {                                                                                                                      
     maxWidth: '80%',                                                                                                                
     marginVertical: 5,                                                                                                              
     padding: 10,                                                                                                                    
     borderRadius: 15,                                                                                                               
   },                                                                                                                                
   userMessage: {                                                                                                                    
     alignSelf: 'flex-end',                                                                                                          
     backgroundColor: '#007AFF',                                                                                                     
   },                                                                                                                                
   aiMessage: {                                                                                                                      
     alignSelf: 'flex-start',                                                                                                        
     backgroundColor: '#E9E9EB',                                                                                                     
   },                                                                                                                                
   text: {                                                                                                                           
     fontSize: 16,                                                                                                                   
   },                                                                                                                                
 });   
