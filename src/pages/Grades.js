// src/pages/GradesPage.js
import React from 'react';
import { Box, Heading, Text, VStack, Divider } from '@chakra-ui/react';

function GradesPage({ scores = [] }) { // Default to empty array if scores is undefined
  return (
    <Box
      bg="#f0f4f8" // Light background color
      p={6} // Reduced padding
      borderRadius="md"
      boxShadow="md"
      maxW="500px" // Reduced max width
      mx="auto"
    >
      <Heading as="h1" mb={4} fontSize="xl" color="#0874e0">Your Grades</Heading> {/* Reduced font size */}
      <Divider mb={4} borderColor="#0874e0" />
      <VStack spacing={3} align="stretch"> {/* Reduced spacing */}
        {scores.length > 0 ? (
          scores.map((score, index) => (
            <Box
              key={index}
              p={3} // Reduced padding
              borderRadius="md"
              bg="#ffffff"
              boxShadow="sm"
              border="1px"
              borderColor="#e0e0e0"
            >
              <Text fontSize="md" fontWeight="bold" color="#0874e0">{`Quiz ${index + 1}`}</Text> {/* Reduced font size */}
              <Text fontSize="sm" color="#ff6f61">{`Score: ${score}`}</Text> {/* Reduced font size */}
            </Box>
          ))
        ) : (
          <Text>No grades available</Text>
        )}
      </VStack>
    </Box>
  );
}

export default GradesPage;


// import React, { useState, useEffect } from 'react';

// function GradesPage() {
//   const [grades, setGrades] = useState([]);

//   useEffect(() => {
//     const fetchGrades = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/grades');
//         const data = await response.json();
//         setGrades(data);
//       } catch (error) {
//         console.error('Error fetching grades:', error);
//       }
//     };

//     fetchGrades();
//   }, []);

//   return (
//     <div>
//       <h2>Your Grades</h2>
//       <ul>
//         {grades.map((grade, index) => (
//           <li key={index}>{`Quiz ${index + 1}: ${grade.score}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GradesPage;
