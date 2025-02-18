import {makeAutoObservable, runInAction} from 'mobx';                                                                               
 import {Model} from '../utils/types';                                                                                               
 import {LlamaContext, initLlama} from 'llama.rn';
 import {Platform, NativeModules} from 'react-native';                                                                  
                                                                                                                                     
 class ModelStore {                                                                                                                  
   models: Model[] = [];                                                                                                             
   activeModel: Model | null = null;                                                                                                 
   context: LlamaContext | null = null;                                                                                              
   isLoading: boolean = false;                                                                                                       
                                                                                                                                     
   constructor() {                                                                                                                   
     makeAutoObservable(this);                                                                                                       
   }                                                                                                                                 
                                                                                                                                     
   async loadModel(model: Model) {                                                                                                   
     this.isLoading = true;                                                                                                          
     try {
       // Handle Android asset path                                                                                                              
       const modelPath = Platform.OS === 'android'                                                                                               
         ? `asset://${model.path}`                                                                                                               
         : model.path;

       const context = await initLlama({                                                                                             
         model: modelPath,                                                                                                          
         use_mlock: true,                                                                                                            
         n_ctx: 2048,                                                                                                                
       });                                                                                                                           
                                                                                                                                     
       runInAction(() => {                                                                                                           
         this.context = context;                                                                                                     
         this.activeModel = model;                                                                                                   
         model.isLoaded = true;                                                                                                      
       });                                                                                                                           
     } catch (error) {                                                                                                               
       console.error('Failed to load model:', error);                                                                                
     } finally {                                                                                                                     
       runInAction(() => {                                                                                                           
         this.isLoading = false;                                                                                                     
       });                                                                                                                           
     }                                                                                                                               
   }                                                                                                                                 
                                                                                                                                     
   async unloadModel() {                                                                                                             
     if (this.context) {                                                                                                             
       await this.context.release();                                                                                                 
       runInAction(() => {                                                                                                           
         this.context = null;                                                                                                        
         this.activeModel = null;                                                                                                    
       });                                                                                                                           
     }                                                                                                                               
   }                                                                                                                                 
 }                                                                                                                                   
                                                                                                                                     
 export const modelStore = new ModelStore()