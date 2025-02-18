import AsyncStorage from '@react-native-async-storage/async-storage';                                                               
 import {modelStore} from './store/ModelStore';                                                                                      
 import {chatSessionStore} from './store/ChatSessionStore';                                                                          
                                                                                                                                     
 export const initializeApp = async () => {                                                                                          
   try {                                                                                                                             
     // Load any saved chat sessions                                                                                                 
     await chatSessionStore.loadSessions();                                                                                          
                                                                                                                                     
     // Initialize default model(s)                                                                                                  
     modelStore.models = [                                                                                                           
       {                                                                                                                             
         id: 'Llama32',                                                                                                        
         name: 'Llama323BQ4KM',                                                                                                      
         path: 'models/Llama-3.2-3B-Instruct-Q4_K_M.gguf', // You'll need to update this                                                             
         isLoaded: false,                                                                                                            
       }                                                                                                                             
     ];                                                                                                                              
                                                                                                                                     
     // Load any saved settings                                                                                                      
     const savedSettings = await AsyncStorage.getItem('app_settings');                                                               
     if (savedSettings) {                                                                                                            
       // Handle settings initialization                                                                                             
     }                                                                                                                               
   } catch (error) {                                                                                                                 
     console.error('Failed to initialize app:', error);                                                                              
   }                                                                                                                                 
 };  