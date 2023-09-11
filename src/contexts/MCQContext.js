// src/contexts/MCQContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const MCQContext = createContext();

export const MCQProvider = ({ children }) => {
  const [mcqs, setMCQs] = useState([]);
  const [selectedMCQ, setSelectedMCQ] = useState(null);

  useEffect(() => {
    // Fetch MCQs from the API and set them in the state
    const fetchMCQs = async () => {
      try {
        const response = await fetch('https://cross-platform.rp.devfactory.com/for_you');
        const data = await response.json();
        setMCQs(data);
        
      } catch (error) {
        console.error('Error fetching MCQs:', error);
      }
    };

    fetchMCQs();
  }, []);

  const revealAnswer = async (id) => {
    try {
      const response = await fetch(`https://cross-platform.rp.devfactory.com/reveal?id=${id}`);
      const data = await response.json();
      const updatedMCQs = mcqs.map((mcq) => {
        if (mcq.id === id) {
          return { ...mcq, correctAnswer: data.correctAnswer };
        }
        return mcq;
      });
      setMCQs(updatedMCQs);
    } catch (error) {
      console.error('Error revealing answer:', error);
    }
  };

  return (
    <MCQContext.Provider value={{ mcqs, selectedMCQ, setSelectedMCQ, revealAnswer }}>
      {children}
    </MCQContext.Provider>
  );
};

export const useMCQ = () => {
  const context = useContext(MCQContext);
  if (!context) {
    throw new Error('useMCQ must be used within an MCQProvider');
  }
  return context;
};
