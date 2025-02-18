import {LlamaContext} from 'llama.rn';                                                                                 
                                                                                                                                     
 export const defaultCompletionParams = {                                                                                            
   temperature: 0.7,                                                                                                                 
   max_tokens: 500,                                                                                                                  
   top_p: 0.95,                                                                                                                      
   top_k: 40,                                                                                                                        
   stop: ['</s>', '<|end|>'],                                                                                                        
 };                                                                                                                                  
                                                                                                                                     
 export const formatChatPrompt = (messages: { role: string; content: string }[]): string => {                                        
   return messages                                                                                                                   
     .map(message => {                                                                                                               
       if (message.role === 'system') {                                                                                              
         return `System: ${message.content}\n`;                                                                                      
       }                                                                                                                             
       if (message.role === 'user') {                                                                                                
         return `User: ${message.content}\n`;                                                                                        
       }                                                                                                                             
       if (message.role === 'assistant') {                                                                                           
         return `Assistant: ${message.content}\n`;                                                                                   
       }                                                                                                                             
       return '';                                                                                                                    
     })                                                                                                                              
     .join('') + 'Assistant:';                                                                                                       
 };                                                                                                                                  
                                                                                                                                     
 export const getCompletion = async (                                                                                                
   context: LlamaContext,                                                                                                            
   prompt: string,                                                                                                                   
   onToken?: (token: string) => void                                                                                                 
 ) => {                                                                                                                              
   try {                                                                                                                             
     const response = await context.completion(                                                                                      
       {                                                                                                                             
         ...defaultCompletionParams,                                                                                                 
         prompt,                                                                                                                     
       },                                                                                                                            
       onToken ? data => onToken(data.token) : undefined                                                                             
     );                                                                                                                              
     return response.text;                                                                                                           
   } catch (error) {                                                                                                                 
     console.error('Completion error:', error);                                                                                      
     throw error;                                                                                                                    
   }                                                                                                                                 
 };                                                                                                                                  
                                                                                                                                     
 export const userId = 'user_1';                                                                                                     
 export const assistantId = 'assistant_1';                                                                                           
                                                                                                                                     
 export const user = {id: userId};                                                                                                   
 export const assistant = {id: assistantId};