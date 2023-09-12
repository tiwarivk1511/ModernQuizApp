import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultScreen = ({ route, navigation, score, resetScore }) => {
  const { score: finalScore } = route.params;

  return (
    <View style={styles.container}>
      <Text>Your Score: {finalScore}</Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => {
          resetScore(); // Reset the score to 0
          navigation.navigate('Home');
        }}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default ResultScreen;
