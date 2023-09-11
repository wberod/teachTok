// src/App.js
import 'react-native-gesture-handler';
import React from 'react';
import { MCQProvider } from './contexts/MCQContext';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <MCQProvider>
      <AppNavigator />
    </MCQProvider>
  );
};

export default App;
