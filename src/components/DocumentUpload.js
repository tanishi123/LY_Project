// src/components/DocumentUpload.js
import React, { useState } from 'react';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';

function DocumentUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Box
      bg="#ffffff" // Light background color for the component
      p={6} // Padding around the component
      borderRadius="md" // Rounded corners
      boxShadow="md" // Box shadow for depth
      maxW="md" // Maximum width
      mx="auto" // Center align horizontally
      mt={10} // Margin at the top
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold" color="#0874e0">Upload Document</Text>
        <Input 
          type="file" 
          onChange={handleFileChange} 
          borderColor="#e0e0e0" // Border color
          _hover={{ borderColor: "#0874e0" }} // Border color on hover
          _focus={{ borderColor: "#0874e0", boxShadow: '0 0 0 1px #0874e0' }} // Border color on focus
        />
        <Button 
          onClick={handleUpload} 
          colorScheme="red" // Red color scheme
          size="lg" // Larger button
          mt={4} // Margin at the top
        >
          Upload
        </Button>
      </VStack>
    </Box>
  );
}

export default DocumentUpload;
