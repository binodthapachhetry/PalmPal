import React from 'react';                                                                                                          
 import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';                                                    
 import {observer} from 'mobx-react-lite';                                                                                           
 import {modelStore} from '../store';                                                                                                
                                                                                                                                     
 export const ModelsScreen = observer(() => {                                                                                        
   const handleModelSelect = async (model: Model) => {                                                                               
     if (model.isLoaded) {                                                                                                           
       await modelStore.unloadModel();                                                                                               
     } else {                                                                                                                        
       await modelStore.loadModel(model);                                                                                            
     }                                                                                                                               
   };                                                                                                                                
                                                                                                                                     
   return (                                                                                                                          
     <View style={styles.container}>                                                                                                 
       <FlatList                                                                                                                     
         data={modelStore.models}                                                                                                    
         keyExtractor={item => item.id}                                                                                              
         renderItem={({item}) => (                                                                                                   
           <TouchableOpacity                                                                                                         
             style={styles.modelItem}                                                                                                
             onPress={() => handleModelSelect(item)}                                                                                 
           >                                                                                                                         
             <Text style={styles.modelName}>{item.name}</Text>                                                                       
             <Text style={styles.modelStatus}>                                                                                       
               {item.isLoaded ? 'Loaded' : 'Not Loaded'}                                                                             
             </Text>                                                                                                                 
           </TouchableOpacity>                                                                                                       
         )}                                                                                                                          
       />                                                                                                                            
     </View>                                                                                                                         
   );                                                                                                                                
 });                                                                                                                                 
                                                                                                                                     
 const styles = StyleSheet.create({                                                                                                  
   container: {                                                                                                                      
     flex: 1,                                                                                                                        
   },                                                                                                                                
   modelItem: {                                                                                                                      
     padding: 15,                                                                                                                    
     borderBottomWidth: 1,                                                                                                           
     borderBottomColor: '#ccc',                                                                                                      
   },                                                                                                                                
   modelName: {                                                                                                                      
     fontSize: 16,                                                                                                                   
     fontWeight: 'bold',                                                                                                             
   },                                                                                                                                
   modelStatus: {                                                                                                                    
     fontSize: 14,                                                                                                                   
     color: '#666',                                                                                                                  
   },                                                                                                                                
 });    
