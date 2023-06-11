 import React from "react";
 import { View, SafeAreaView, Button } from 'react-native'

 export default comp => (
     <SafeAreaView style={{flexGrow: 1}}>
         <View style ={{
             flexDirection: 'row',
             justifyContent: 'space-around'
         }}>

             {comp.avancar
                 ? <Button title='Próxima'
                 onPress={() => {
                     comp.navigation.navigate(comp.avancar)
                 }
            } />
            : false
            }

            {comp.voltar
                 ? <Button title='Anterior'
                onPress={() => {
                  comp.navigation.goBack()
                }
           } />
            : false
            }
        </View>
        <View style={{flex:1}}>
            {comp.children}
         </View>
     </SafeAreaView>
)