// https://www.youtube.com/watch?v=K6OJP0s5VDQ&list=PLKWMD009Q4qTp1bzs3zGI5BvLB8EsAGBn&index=8
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import TabBar from '../components/TabBar'

const _layout = () => {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    display: ['index', 'report', 'tip', 'profile'].includes(route.name) ? 'flex' : 'none',
                },
            })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "홈"
                }} />
            <Tabs.Screen
                name="report"
                options={{
                    title: "리포트"
                }} />
            <Tabs.Screen
                name="tip"
                options={{
                    title: "팁"
                }} />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "마이페이지"
                }} />

                
        </Tabs>
    )
}

export default _layout

const styles = StyleSheet.create({})