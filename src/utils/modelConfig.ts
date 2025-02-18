export const MODEL_CONFIG = {                                                                                                       
    inference: {                                                                                                                      
      defaultParams: {                                                                                                                
        temperature: 0.7,                                                                                                             
        max_tokens: 500,                                                                                                              
        top_p: 0.95,                                                                                                                  
        top_k: 40,                                                                                                                    
        stop: ['</s>', '<|end|>'],                                                                                                    
      },                                                                                                                              
    },                                                                                                                                
                                                                                                                                      
    loading: {                                                                                                                        
      defaultParams: {                                                                                                                
        use_mlock: true,                                                                                                              
        n_ctx: 2048,                                                                                                                  
        n_gpu_layers: 0,                                                                                                              
      },                                                                                                                              
    },                                                                                                                                
  };  