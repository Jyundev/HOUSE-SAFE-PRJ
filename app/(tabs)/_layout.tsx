// https://www.youtube.com/watch?v=K6OJP0s5VDQ&list=PLKWMD009Q4qTp1bzs3zGI5BvLB8EsAGBn&index=8
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TabBar from '../../components/TabBar';

const _layout = () => {

    const router = useRouter();


    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    display: ['index', 'report', 'tip', 'profile'].includes(route.name) ? 'flex' : 'none',
                },
                headerStyle: { backgroundColor: Colors.light.background },
                headerTitle: () => null,
                headerShown: true,  // 공통적으로 헤더를 표시
                headerLeft: () => (
                    <View style={styles.iconContainer}>
                        <AntDesign name="hearto" size={24} color="black" />
                    </View>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => router.push('/login')}>
                        <Feather name="user" size={24} color="black" />
                    </TouchableOpacity>
                ),
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

const styles = StyleSheet.create({
    iconContainer: {
        paddingHorizontal: 30,
    },
})