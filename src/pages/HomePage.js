import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import '../App.css'; 

const HomePage = () => {
  return (
    <Box className="homepage">
      <Box className="hero">
        <Heading><h1>Welcome to the Next-Gen Quiz App</h1></Heading>
        <Text mt={4}>
          <h1>This is your dashboard where you can upload study materials, take quizzes, and view your grades. 
          Our app uses advanced NLP technology to create quizzes from your study materials, making learning more effective and interactive.</h1>
        </Text>
      </Box>
      <Box p={5}>
        <Heading><h1>Get Started</h1></Heading>
        <Text mt={4}><h3>
          Begin by uploading your study materials and let our app generate quizzes for you. 
          Track your progress and manage your learning efficiently with our user-friendly interface.</h3>
        </Text>
      </Box>
    </Box>
  );
};

export default HomePage;
