import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    const startQuiz = () => {
      navigation.navigate('Quiz'); // Navigate to QuizScreen
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Quiz</Text>
      <Text style={styles.subtitle}>Start Testing your knowledge in different areas</Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={startQuiz}>
        <Text style={styles.buttonText}>Start Quiz Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#666666',
  },
  buttonContainer: {
    backgroundColor: '#911BE8',
    height: 50,
    width: '60%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For Android shadow
    shadowColor: 'rgba(0, 0, 0, 0.3)', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
