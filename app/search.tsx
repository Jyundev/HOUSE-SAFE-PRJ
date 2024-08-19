import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const searcb = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder='Search'/>
        </SafeAreaView>
    )
}

export default searcb

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 20
        
    }
})