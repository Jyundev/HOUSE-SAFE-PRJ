import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

const { width:SCREEN_WIDTH } = Dimensions.get('window');

export default function first() {

    return(
        <>
            <View style={styles.stepBar}>
                <View style={styles.currentStep}></View>
                <View style={styles.notCurrentStep}></View>
                <View style={styles.notCurrentStep}></View>
            </View>
            <View style={styles.container}>
                <Text style={styles.step}>1단계</Text>
                <Text style={styles.sentnece}>주소를 입력해주세요.</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="시•군•구를 입력해주세요."
                />
            </View>
            <View style={styles.Btn}>
                <View style={styles.nextBtn}>
                    <Text>이전</Text>
                </View>
                <View style={styles.nextBtn}>
                    <Text>다음</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    stepBar: {
        flexDirection: 'row',
        flex: 1,
        gap: 20,
        marginTop: 60,
        marginBottom: -200,
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
    container: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    step: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    sentnece: {
        fontSize: 20,
    },
    input: {
        backgroundColor: 'lightgrey',
        width: SCREEN_WIDTH/1.2,
        height: 40,
        borderRadius: 300,
        textAlign: 'center'
    },
    Btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 70
    },
    nextBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 300,
        width: 80,
        height: 40
    }
})