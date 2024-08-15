import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width:SCREEN_WIDTH } = Dimensions.get('window');

export default function Login() {

    const router = useRouter();

    const login = () => {
        alert('카카오 로그인 성공!');
        router.push('/login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headment}>내 집 계약 전에</Text>
            <Text style={styles.headment}>확인해야 할 모든 정보</Text>
            <Text style={styles.logo}>로고</Text>
            <TouchableOpacity 
                style={styles.kakaoLogin}
                onPress={login}
            >
                <Text>카카오톡</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style={styles.googleLogin}
                onPress={login}
            >
                <Text>구글</Text>
            </TouchableOpacity>
            <Link href="/details">View details</Link>
        </View>
    );
}

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
        backgroundColor: 'yellow',
        width: SCREEN_WIDTH/1.5,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    googleLogin: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: SCREEN_WIDTH/1.5,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
});
