import {useCallback} from 'react';                                                                                                  
import {modelStore} from '../store/ModelStore';                                                                                                 
import {chatSessionStore} from '../store/ChatSessionStore';  
import {formatChatPrompt, getCompletion} from '../utils/chat';   
import {Alert} from 'react-native';                                                                          
                                                                                                                                     
 export const useChatSession = () => {                                                                                               
   const handleSendMessage = useCallback(async (content: string) => {                                                                
     if (!modelStore.context || !modelStore.activeModel) {     
      Alert.alert('Error', 'No model loaded. Please load a model first.');                                                                      
       return;                                                                                                                       
     }                                                                                                                               
                                                                                                                                     
     // Add user message                                                                                                             
     const userMessage = {                                                                                                           
       id: Date.now().toString(),                                                                                                    
       content,                                                                                                                      
       role: 'user' as const,                                                                                                        
       timestamp: Date.now(),                                                                                                        
     };                                                                                                                              
     chatSessionStore.addMessage(userMessage);                                                                                       
                                                                                                                                     
     try {                                                                                                                           
       // Get AI response                                                                                                            
       const response = await modelStore.context.completion({                                                                        
         prompt: content,                                                                                                            
         temperature: 0.7,                                                                                                         
       });                                                                                                                           
                                                                                                                                     
       // Add AI message                                                                                                             
       const aiMessage = {                                                                                                           
         id: Date.now().toString(),                                                                                                  
         content: response.text,                                                                                                     
         role: 'assistant' as const,                                                                                                 
         timestamp: Date.now(),                                                                                                      
       };                                                                                                                            
       chatSessionStore.addMessage(aiMessage);                                                                                       
     } catch (error) { 
       const errorMessage = error instanceof Error ? error.message : 'Unknown error';                                                                                                             
        Alert.alert('Error', `Failed to get AI response: ${errorMessage}`);                                                                                                             
       console.error('Failed to get AI response:', error);                                                                           
     }                                                                                                                               
   }, []);                                                                                                                           
                                                                                                                                     
   return {handleSendMessage};                                                                                                       
 }; 

// import {useCallback} from 'react'; 
// import {modelStore, chatSessionStore} from '../store';
//  import {formatChatPrompt, getCompletion} from '../utils/chat';                                                                      
                                                                                                                                     
//  const handleSendMessage = useCallback(async (content: string) => {                                                                  
//    if (!modelStore.context) return;                                                                                                  
                                                                                                                                     
//    const messages = [                                                                                                                
//      ...chatSessionStore.currentSession?.messages || [],                                                                             
//      {role: 'user', content}                                                                                                         
//    ];                                                                                                                                
                                                                                                                                     
//    const prompt = formatChatPrompt(messages);                                                                                        
                                                                                                                                     
//    try {                                                                                                                             
//      const response = await getCompletion(modelStore.context, prompt);                                                               
//      // Handle response... 
                                                                                                               
//    } catch (error) {                                                                                                                 
//      console.error('Chat error:', error);                                                                                            
//    }                                                                                                                                 
//  }, []);    