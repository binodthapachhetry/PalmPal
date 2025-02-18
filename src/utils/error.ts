export enum ErrorCode {                                                                                                             
    MODEL_LOAD_FAILED = 'MODEL_LOAD_FAILED',                                                                                          
    INFERENCE_FAILED = 'INFERENCE_FAILED',                                                                                            
    STORAGE_ERROR = 'STORAGE_ERROR',                                                                                                  
  }                                                                                                                                   
                                                                                                                                      
  export class AppError extends Error {                                                                                               
    constructor(                                                                                                                      
      message: string,                                                                                                                
      public code: ErrorCode,                                                                                                         
      public originalError?: any                                                                                                      
    ) {                                                                                                                               
      super(message);                                                                                                                 
      this.name = 'AppError';                                                                                                         
    }                                                                                                                                 
  }                                                                                                                                   
                                                                                                                                      
  export const handleError = (error: any) => {                                                                                        
    console.error('Error:', error);                                                                                                   
                                                                                                                                      
    if (error instanceof AppError) {                                                                                                  
      // Handle known errors                                                                                                          
      switch (error.code) {                                                                                                           
        case ErrorCode.MODEL_LOAD_FAILED:                                                                                             
          return 'Failed to load AI model';                                                                                           
        case ErrorCode.INFERENCE_FAILED:                                                                                              
          return 'Failed to generate response';                                                                                       
        case ErrorCode.STORAGE_ERROR:                                                                                                 
          return 'Failed to save data';                                                                                               
        default:                                                                                                                      
          return 'An unexpected error occurred';                                                                                      
      }                                                                                                                               
    }                                                                                                                                 
                                                                                                                                      
    // Handle unknown errors                                                                                                          
    return 'An unexpected error occurred';                                                                                            
  };    