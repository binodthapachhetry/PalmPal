export type RootStackParamList = {                                                                                                  
    Chat: undefined;                                                                                                                  
    Models: undefined;                                                                                                                
  };                                                                                                                                  
                                                                                                                                      
  declare global {                                                                                                                    
    namespace ReactNavigation {                                                                                                       
      interface RootParamList extends RootStackParamList {}                                                                           
    }                                                                                                                                 
  }   