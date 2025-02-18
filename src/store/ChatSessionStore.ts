import {makeAutoObservable} from 'mobx';                                                                                            
 import AsyncStorage from '@react-native-async-storage/async-storage';                                                               
 import {ChatSession, Message} from '../utils/types';                                                                                
                                                                                                                                     
 class ChatSessionStore {                                                                                                            
   sessions: ChatSession[] = [];                                                                                                     
   currentSession: ChatSession | null = null;                                                                                        
                                                                                                                                     
   constructor() {                                                                                                                   
     makeAutoObservable(this);                                                                                                       
     this.loadSessions();                                                                                                            
   }                                                                                                                                 
                                                                                                                                     
   async loadSessions() {                                                                                                            
     try {                                                                                                                           
       const sessions = await AsyncStorage.getItem('chat_sessions');                                                                 
       if (sessions) {                                                                                                               
         this.sessions = JSON.parse(sessions);                                                                                       
       }                                                                                                                             
     } catch (error) {                                                                                                               
       console.error('Failed to load sessions:', error);                                                                             
     }                                                                                                                               
   }                                                                                                                                 
                                                                                                                                     
   async saveSession(session: ChatSession) {                                                                                         
     this.sessions = [...this.sessions, session];                                                                                    
     await AsyncStorage.setItem('chat_sessions', JSON.stringify(this.sessions));                                                     
   }                                                                                                                                 
                                                                                                                                     
   createNewSession() {                                                                                                              
     const newSession: ChatSession = {                                                                                               
       id: Date.now().toString(),                                                                                                    
       title: 'New Chat',                                                                                                            
       messages: [],                                                                                                                 
     };                                                                                                                              
     this.currentSession = newSession;                                                                                               
     this.saveSession(newSession);                                                                                                   
   }                                                                                                                                 
                                                                                                                                     
   addMessage(message: Message) {                                                                                                    
     if (!this.currentSession) {                                                                                                     
       this.createNewSession();                                                                                                      
     }                                                                                                                               
     this.currentSession?.messages.push(message);                                                                                    
     this.saveSession(this.currentSession!);                                                                                         
   }                                                                                                                                 
 }                                                                                                                                   
                                                                                                                                     
 export const chatSessionStore = new ChatSessionStore();   