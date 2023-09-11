// src/services/api.js

const API_URL = 'https://cross-platform.rp.devfactory.com/for_you';

export const fetchMCQs = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    return data; 
  } catch (error) {
    console.error('Error fetching MCQs:', error);
    throw error;
  }
};
