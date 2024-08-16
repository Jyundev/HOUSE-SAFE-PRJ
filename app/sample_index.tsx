import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Home = () => {

    const router = useRouter();

    const toForecast = () => {
        router.push('/forecast/first')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headment}>내 집 계약 전에</Text>
            <Text style={styles.headment}>확인해야 할 모든 정보</Text>
            <Text style={styles.logo}>로고</Text>
            <TouchableOpacity
                style={styles.kakaoLogin}
                onPress={toForecast}
            >
                <Text>전세사기 예측하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.googleLogin}
                onPress={toForecast}
            >
                <Text>전세사기 리포트</Text>
            </TouchableOpacity>
            <Link href="/login">로그인</Link>
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headment: {
        fontSize: 30
    },
    logo: {
        margin: 30,
        fontSize: 60
    },
    kakaoLogin: {
        backgroundColor: 'lightgrey',
        width: SCREEN_WIDTH / 1.5,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    googleLogin: {
        backgroundColor: 'tomato',
        borderWidth: 1,
        width: SCREEN_WIDTH / 1.5,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
});
