import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.warning}>화면이 존재하지 않습니다😶</Text>
            <Link href='/'>메인페이지로 돌아가기</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    warning: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 20,
    }
})