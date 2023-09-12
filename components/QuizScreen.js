import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { questions } from './questionData';

const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    } else {
      // Show popup when answer is wrong
      Alert.alert(
        'Wrong Answer',
        'Your answer is wrong. Would you like to start again?',
        [
          {
            text: 'Restart Quiz',
            onPress: () => handleRestart(),
          },
          {
            text: 'Cancel',
          },
        ],
      );
      return;
    }

    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Result', { score });
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.question}>
        {questions[currentQuestionIndex].question}
      </Text>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <RadioButton.Item
          key={index}
          label={option}
          value={option}
          status={selectedOption === option ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption(option)}
          style={styles.radioButton}
        />
      ))}

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleAnswer}
        disabled={selectedOption === null}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 16,
    marginBottom: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  radioButton: {
    marginBottom: 8,
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

export default QuizScreen;
