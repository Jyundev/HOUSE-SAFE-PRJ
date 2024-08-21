import { Stack } from 'expo-router/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                {/* (tabs) 경로 그룹의 기본 화면 */}
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                {/* 개별 스크린들 */}
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="search" options={{ headerShown: false }} />
            </Stack>
        </GestureHandlerRootView>

    );
}