// src/components/Quiz.js
import React, { useState } from "react";
import { Box, Button, Heading, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

const Quiz = ({ onSubmit }) => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
    } else {
      setShowScore(true);
      if (onSubmit) {
        onSubmit(score); // Pass score to parent
      }
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      {showScore ? (
        <Text fontSize="2xl" fontWeight="bold">
          You scored {score} out of {questions.length}
        </Text>
      ) : (
        <>
          <Heading as="h2" size="lg" mb={6}>
            {questions[currentQuestion].question}
          </Heading>
          <RadioGroup onChange={setSelectedOption} value={selectedOption}>
            <Stack spacing={3}>
              {questions[currentQuestion].options.map((option, index) => (
                <Radio key={index} value={option}>
                  {option}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          <Button mt={6} colorScheme="red" onClick={handleAnswerOptionClick}>
            Next
          </Button>
        </>
      )}
    </Box>
  );
};

export default Quiz;
