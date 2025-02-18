import React, {useState} from 'react';                                                                                              
 import {View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';                                                   
                                                                                                                                     
 interface Props {                                                                                                                   
   onSend: (message: string) => void;                                                                                                
   disabled?: boolean;                                                                                                               
 }                                                                                                                                   
                                                                                                                                     
 export const ChatInput: React.FC<Props> = ({onSend, disabled}) => {                                                                 
   const [text, setText] = useState('');                                                                                             
                                                                                                                                     
   const handleSend = () => {                                                                                                        
     if (text.trim() && !disabled) {                                                                                                 
       onSend(text.trim());                                                                                                          
       setText('');                                                                                                                  
     }                                                                                                                               
   };                                                                                                                                
                                                                                                                                     
   return (                                                                                                                          
     <View style={styles.container}>                                                                                                 
       <TextInput                                                                                                                    
         style={styles.input}                                                                                                        
         value={text}                                                                                                                
         onChangeText={setText}                                                                                                      
         placeholder="Type a message..."                                                                                             
         multiline                                                                                                                   
       />                                                                                                                            
       <TouchableOpacity                                                                                                             
         style={styles.sendButton}                                                                                                   
         onPress={handleSend}                                                                                                        
         disabled={disabled}                                                                                                         
       >                                                                                                                             
         <Text>Send</Text>                                                                                                           
       </TouchableOpacity>                                                                                                           
     </View>                                                                                                                         
   );                                                                                                                                
 };                                                                                                                                  
                                                                                                                                     
 const styles = StyleSheet.create({                                                                                                  
   container: {                                                                                                                      
     flexDirection: 'row',                                                                                                           
     padding: 10,                                                                                                                    
     borderTopWidth: 1,                                                                                                              
     borderTopColor: '#ccc',                                                                                                         
   },                                                                                                                                
   input: {                                                                                                                          
     flex: 1,                                                                                                                        
     marginRight: 10,                                                                                                                
     padding: 10,                                                                                                                    
     backgroundColor: '#fff',                                                                                                        
     borderRadius: 20,                                                                                                               
   },                                                                                                                                
   sendButton: {                                                                                                                     
     justifyContent: 'center',                                                                                                       
     alignItems: 'center',                                                                                                           
     padding: 10,                                                                                                                    
   },                                                                                                                                
 });                      