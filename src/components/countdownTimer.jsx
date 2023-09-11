import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Text>Time Left: {timeLeft} seconds</Text>;
};
