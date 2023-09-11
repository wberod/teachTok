// src/screens/HomeScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MCQCard from '../components/MCQCard';
import { fetchMCQs } from '../services/api';
import MCQ from '../types/MCQ'; // Import the MCQ type

function HomeScreen() {
  console.log('HomeScreen rendering');
  
  const [mcqs, setMCQs] = useState<MCQ[]>([]); // Annotate the type as MCQ[]

  useEffect(() => {
    // Fetch MCQ data from the API when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchMCQs();
        console.log('API Response:', data); // Log the response to check if it's empty
        setMCQs(data);
      } catch (error) {
        console.error('Error fetching MCQs:', error);
        
      }
    };

    fetchData();
  }, []);

  // Ensure mcqs is an array before attempting to map over it
  const renderMCQs = () => {
    if (!Array.isArray(mcqs)) {
      return null; // or display an error message
    }

    return mcqs.map((mcq) => (
      <MCQCard key={mcq.id} mcq={mcq} />
    ));
  };

  return (
    <View>
      <Text>
        Text to export
      </Text>
      {renderMCQs()}
    </View>
  );
}

export default HomeScreen;
