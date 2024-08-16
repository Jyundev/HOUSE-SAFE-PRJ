// https://www.youtube.com/watch?v=K6OJP0s5VDQ&list=PLKWMD009Q4qTp1bzs3zGI5BvLB8EsAGBn&index=8
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import TabBar from '../components/TabBar'

const _layout = () => {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home"
                }} />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore"
                }} />
            <Tabs.Screen
                name="create"
                options={{
                    title: "Create"
                }} />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile"
                }} />
        </Tabs>
    )
}

export default _layout

const styles = StyleSheet.create({})