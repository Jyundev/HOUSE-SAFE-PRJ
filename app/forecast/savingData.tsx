import { router } from "expo-router";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const { width:SCREEN_WIDTH } = Dimensions.get('window');

export default function savingData() {

    const before = () => {
        router.back()
    }

    return (
        <View style={styles.container}>
            <View style={styles.stepBar}>
                <View style={styles.currentStep}></View>
                <View style={styles.currentStep}></View>
                <View style={styles.currentStep}></View>
                <View style={styles.currentStep}></View>
            </View>
            <SafeAreaView style={styles.safecontainer}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <Text style={styles.step}>입력한 정보를 확인하세요.</Text>
                    <View style={styles.savingData}>
                        <Text style={styles.menu}>주소: </Text>
                        <Text style={styles.sentnece}>서울시 강동구 천호대로 101 임페리얼 아파트 101동 1102호</Text>
                    </View>
                    <View style={styles.savingData}>
                        <Text style={styles.menu}>전세 보증금: </Text>
                        <Text style={styles.sentnece}>1,000 만원</Text>
                    </View>
                    <View style={styles.savingData}>
                        <Text style={styles.menu}>임대인: </Text>
                        <Text style={styles.sentnece}>홍길동</Text>
                    </View>
                    <View style={styles.savingData}>
                        <Text style={styles.menu}>공인중개사: </Text>
                        <Text style={styles.sentnece}>서울부동산(대표자: 임꺽정)</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <View style={styles.Btn}>
                <TouchableOpacity 
                    style={styles.nextBtn}
                    onPress={before}
                >
                    <Text style={styles.btnText}>이전</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextBtn}>
                    <Text style={styles.btnText}>다음</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stepBar: {
        flexDirection: 'row',
        flex: 0.2,
        gap: 20,
        marginTop: 60,
        padding: 20,
    },
    currentStep: {
        flex: 1,
        width: 20,
        height: 15,
        backgroundColor: 'purple',
        opacity: 0.6,
        borderRadius: 300,
    },
    notCurrentStep: {
        flex: 1,
        width: 20,
        height: 15,
        backgroundColor: 'purple',
        opacity: 0.2,
        borderRadius: 300,
    },
    safecontainer: {
        flex: 0.8,
    },
    scroll: {
        flex: 1,
        gap: 30,
        alignItems: 'center',
    },
    step: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    savingData: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: SCREEN_WIDTH/1.5,
        padding: 10,
    },
    menu: {
        flex: 1,
        fontSize: 23,
        fontWeight: 600,
    },
    sentnece: {
        flex: 2,
        fontSize: 23,
    },
    input: {
        backgroundColor: 'lightgrey',
        width: SCREEN_WIDTH/1.2,
        height: 40,
        borderRadius: 300,
        textAlign: 'center'
    },
    Btn: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 70,
        marginTop: 60,
    },
    nextBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        opacity: 0.2,
        borderRadius: 300,
        width: 80,
        height: 40
    },
    btnText: {
        color: 'white'
    }
})