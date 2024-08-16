import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AlertIcon from '../assets/images/alert.svg';

const Home = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/forecast/first'); // Navigate to the correct path
  };

  return (
    <View style={styles.container}>

      <View style={styles.alertContainer}>
        <Text style={styles.alertTitle}>내 집의 안전도는?</Text>
        <AlertIcon style={styles.alertIcon} />
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText} onPress={handlePress}>바로 확인하기</Text>
        </TouchableOpacity>
        <Text style={styles.descriptionText}>
          정보 입력으로 전세 사기 위험을 확인하세요.{'\n'}
          전세 사기 위험도를 확인해드립니다
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>내집 실거래가</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>악성 임대인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>공인중개사</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>토지대장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#E0E0E0',
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
    color: '#6D6D6D',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#E0E0E0',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    minWidth: '40%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});
