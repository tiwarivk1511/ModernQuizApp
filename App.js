import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

const Stack = createStackNavigator();

const App = () => {
  const [score, setScore] = useState(0); // State to manage the score

  const resetScore = () => {
    setScore(0); // Reset the score to 0
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen
          name="Result"
          // Pass the score and the resetScore function as props
          options={{ headerShown: false }}
        >
          {props => (
            <ResultScreen
              {...props}
              score={score}
              resetScore={resetScore}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
