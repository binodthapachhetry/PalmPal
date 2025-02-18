export interface Message {                                                                                                          
  id: string;                                                                                                                       
  content: string;                                                                                                                  
  role: 'user' | 'assistant';                                                                                                       
  timestamp: number;                                                                                                                
}                                                                                                                                   
                                                                                                                                    
export interface ChatSession {                                                                                                      
  id: string;                                                                                                                       
  title: string;                                                                                                                    
  messages: Message[];                                                                                                              
}                                                                                                                                   
                                                                                                                                    
export interface Model {                                                                                                            
  id: string;                                                                                                                       
  name: string;                                                                                                                     
  path: string;                                                                                                                     
  isLoaded: boolean;                                                                                                                
} 