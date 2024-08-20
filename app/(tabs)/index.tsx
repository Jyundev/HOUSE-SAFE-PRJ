import { Colors } from '@/constants/Colors';
import { Link, Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AlertIcon from '../../assets/images/alert.svg';

const screenWidth = Dimensions.get('window').width;
const buttonSize = (screenWidth / 3) - 20;

console.log(buttonSize)



const Home = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const handlePress = () => {
    router.push('/forecast/first'); // Navigate to the correct path
  };

  return (
    <View style={styles.container}>

      <Stack.Screen />
      <View style={styles.alertContainer}>
        <Text style={styles.alertTitle}>내 집의 안전도는?</Text>
        <AlertIcon style={styles.alertIcon} />
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText} onPress={handlePress}>바로 확인하기</Text>
        </TouchableOpacity>
        <Text style={styles.descriptionText}>
          전세 사기 위험을 쉽게 확인하세요.{'\n'}
          정보를 입력하면 위험도를 평가해드립니다.
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Link href='/search' asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>내집 실거래가</Text>
            </TouchableOpacity>
          </Link>
          <Link href='/search' asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>악성 임대인</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.row}>
          <Link href='/org-code' asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>공인중개사</Text>
            </TouchableOpacity>
          </Link>
          <Link href='/search' asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>토지대장</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 20
  },

  alertContainer: {
    alignItems: 'center',
    padding: 20,
  },
  alertTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  alertIcon: {
    marginBottom: 20,
  },
  checkButton: {
    backgroundColor: Colors.light.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  checkButtonText: {
    fontSize: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.light.text,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // 각 행 사이의 간격
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    marginHorizontal: 10, // 행 내에서 버튼 간의 간격
    backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center', // 텍스트를 버튼 중앙에 위치시키기 위해 사용
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.light.text,
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
});
