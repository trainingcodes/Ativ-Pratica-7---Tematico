import React from "react";import { View, Text } from 'react-native'

export default comp => (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: comp.corFundo || '#ff0'
     }}>
        <Text style={{
            fontSize: 50,
            color: comp.corTexto || '#939' }}>
            {comp.children}
         </Text>
     </View>
 )
