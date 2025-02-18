import React from 'react';                                                                                                          
 import {View, FlatList, StyleSheet, ActivityIndicator, Text} from 'react-native';                                                                            
 import {observer} from 'mobx-react-lite';                                                                                           
 import {ChatInput} from '../components/ChatInput/ChatInput';                                                                        
 import {Message} from '../components/Message/Message';                                                                              
 import {useChatSession} from '../hooks/useChatSession';                                                                             
  
 import {modelStore} from '../store/ModelStore';                                                                                                 
 import {chatSessionStore} from '../store/ChatSessionStore';                                                                            
                                                                                                                                     
 export const ChatScreen = observer(() => {                                                                                          
   const {handleSendMessage} = useChatSession();                                                                                     
                                                                                                                                     
   return (                                                                                                                          
     <View style={styles.container}>
      {modelStore.isLoading && (                                                                                                                
         <View style={styles.loadingContainer}>                                                                                                  
           <ActivityIndicator size="large" color="#007AFF" />                                                                                    
           <Text>Loading model...</Text>                                                                                                         
         </View>                                                                                                                                 
       )}                                                                                                      
       <FlatList                                                                                                                     
         data={chatSessionStore.currentSession?.messages || []}                                                                      
         keyExtractor={item => item.id}                                                                                              
         renderItem={({item}) => <Message message={item} />}                                                                         
         inverted                                                                                                                    
       />                                                                                                                            
       <ChatInput                                                                                                                    
         onSend={handleSendMessage}                                                                                                  
         disabled={!modelStore.activeModel || modelStore.isLoading}                                                                  
       />                                                                                                                            
     </View>                                                                                                                         
   );                                                                                                                                
 });                                                                                                                                 
                                                                                                                                     
 const styles = StyleSheet.create({                                                                                                  
   container: {                                                                                                                      
     flex: 1,                                                                                                                        
   },
   loadingContainer: {                                                                                                                           
    position: 'absolute',                                                                                                                       
    top: 0,                                                                                                                                     
    left: 0,                                                                                                                                    
    right: 0,                                                                                                                                   
    bottom: 0,                                                                                                                                  
    justifyContent: 'center',                                                                                                                   
    alignItems: 'center',                                                                                                                       
    backgroundColor: 'rgba(255,255,255,0.8)',                                                                                                   
    zIndex: 1000,                                                                                                                               
  },                                                                                                                              
 });         