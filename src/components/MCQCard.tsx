// src/components/MCQCard.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useMCQ } from '../contexts/MCQContext';

interface MCQ {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
  isCorrect?: boolean; // Optional property for tracking if the user's answer was correct
}

interface MCQCardProps {
  mcq: MCQ;
}

const MCQCard: React.FC<MCQCardProps> = ({ mcq }) => {
  const { selectedMCQ, setSelectedMCQ, revealAnswer } = useMCQ();

  const handleChoiceTap = async (choice: string) => {
    setSelectedMCQ(mcq);

    if (choice === mcq.correctAnswer) {
      mcq.isCorrect = true;
    } else {
      mcq.isCorrect = false;
    }

    await revealAnswer(mcq.id);
  };

  return (
    <View>
     <Text>{mcq.question}</Text>
      {mcq.choices.map((choice) => (
        <TouchableOpacity key={choice} onPress={() => handleChoiceTap(choice)}>
          <Text>{choice}</Text>
        </TouchableOpacity>
      ))}
      {selectedMCQ && selectedMCQ.id === mcq.id && (
        <Text>
          Correct Answer: {selectedMCQ.correctAnswer}{' '}
          {selectedMCQ.isCorrect ? '(Correct)' : '(Incorrect)'}
        </Text>
      )}
    </View>
  );
};

export default MCQCard;